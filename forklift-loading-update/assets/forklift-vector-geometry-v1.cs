using System;
using System.Collections.Generic;
using System.Globalization;
using System.Text;

public sealed class ForkliftGeometryResult {
    public string Path;
    public string Report;
    public int PointCount;
    public int ContourCount;
}
public static class ForkliftVectorGeometry {
    struct P { public int X,Y; public P(int x,int y){X=x;Y=y;} }
    static readonly int[] DX={1,0,-1,0}, DY={0,1,0,-1};
    static bool[] Dilate(bool[] a,int w,int h,int radius) {
        var b=new bool[a.Length];
        for(int y=0;y<h;y++)for(int x=0;x<w;x++)if(a[y*w+x])
            for(int dy=-radius;dy<=radius;dy++)for(int dx=-radius;dx<=radius;dx++)
                if(dx*dx+dy*dy<=radius*radius+1 && x+dx>=0 && x+dx<w && y+dy>=0 && y+dy<h) b[(y+dy)*w+x+dx]=true;
        return b;
    }
    static bool[] Erode(bool[] a,int w,int h,int radius) {
        var b=new bool[a.Length];
        for(int y=radius;y<h-radius;y++)for(int x=radius;x<w-radius;x++){
            bool ok=true;
            for(int dy=-radius;dy<=radius&&ok;dy++)for(int dx=-radius;dx<=radius;dx++)
                if(dx*dx+dy*dy<=radius*radius+1&&!a[(y+dy)*w+x+dx]){ok=false;break;}
            b[y*w+x]=ok;
        }return b;
    }
    static List<int> Component(bool[] a,bool[] seen,int seed,int w,int h,bool value) {
        var q=new List<int>();q.Add(seed);seen[seed]=true;
        for(int i=0;i<q.Count;i++){
            int at=q[i],x=at%w,y=at/w;
            for(int d=0;d<4;d++){int xx=x+DX[d],yy=y+DY[d];
                if(xx>=0&&xx<w&&yy>=0&&yy<h){int to=yy*w+xx;if(!seen[to]&&a[to]==value){seen[to]=true;q.Add(to);}}
            }
        }return q;
    }
    static void Edge(Dictionary<int,List<int>> edges,int from,int to) {
        List<int> list;if(!edges.TryGetValue(from,out list)){list=new List<int>();edges[from]=list;}list.Add(to);
    }
    static int Direction(int a,int b,int pitch) {
        int dx=b%pitch-a%pitch,dy=b/pitch-a/pitch;
        return dx>0?0:dy>0?1:dx<0?2:3;
    }
    static List<List<P>> Trace(bool[] a,int w,int h) {
        int pitch=w+1;var edges=new Dictionary<int,List<int>>();
        for(int y=0;y<h;y++)for(int x=0;x<w;x++)if(a[y*w+x]){
            if(y==0||!a[(y-1)*w+x])Edge(edges,y*pitch+x,y*pitch+x+1);
            if(x==w-1||!a[y*w+x+1])Edge(edges,y*pitch+x+1,(y+1)*pitch+x+1);
            if(y==h-1||!a[(y+1)*w+x])Edge(edges,(y+1)*pitch+x+1,(y+1)*pitch+x);
            if(x==0||!a[y*w+x-1])Edge(edges,(y+1)*pitch+x,y*pitch+x);
        }
        var contours=new List<List<P>>();
        while(edges.Count>0) {
            int start=0;foreach(var key in edges.Keys){start=key;break;}
            int current=start,priorDirection=-1;var poly=new List<P>();
            do{
                poly.Add(new P(current%pitch,current/pitch));
                List<int> options;if(!edges.TryGetValue(current,out options))throw new Exception("Open contour.");
                int choice=0,best=99;
                if(priorDirection>=0)for(int i=0;i<options.Count;i++){
                    int turn=(Direction(current,options[i],pitch)-priorDirection+4)%4;
                    int rank=turn==1?0:turn==0?1:turn==3?2:3;
                    if(rank<best){best=rank;choice=i;}
                }
                int next=options[choice];options.RemoveAt(choice);if(options.Count==0)edges.Remove(current);
                priorDirection=Direction(current,next,pitch);current=next;
            }while(current!=start);
            if(poly.Count>=3)contours.Add(poly);
        }return contours;
    }
    static double DistanceSquared(P p,P a,P b) {
        double dx=b.X-a.X,dy=b.Y-a.Y,len=dx*dx+dy*dy;
        double t=len==0?0:Math.Max(0,Math.Min(1,((p.X-a.X)*dx+(p.Y-a.Y)*dy)/len));
        double ex=p.X-a.X-t*dx,ey=p.Y-a.Y-t*dy;return ex*ex+ey*ey;
    }
    static void SimplifyRange(List<P> pts,int start,int end,double eps2,bool[] keep) {
        double max=eps2;int far=-1;
        for(int i=start+1;i<end;i++){double d=DistanceSquared(pts[i],pts[start],pts[end]);if(d>max){max=d;far=i;}}
        if(far>=0){keep[far]=true;SimplifyRange(pts,start,far,eps2,keep);SimplifyRange(pts,far,end,eps2,keep);}
    }
    static List<P> Simplify(List<P> pts,double tolerance) {
        int far=0;double longest=-1;
        for(int i=1;i<pts.Count;i++){double dx=pts[i].X-pts[0].X,dy=pts[i].Y-pts[0].Y,d=dx*dx+dy*dy;if(d>longest){longest=d;far=i;}}
        var open=new List<P>(pts);open.Add(pts[0]);var keep=new bool[open.Count];keep[0]=keep[far]=keep[open.Count-1]=true;
        SimplifyRange(open,0,far,tolerance*tolerance,keep);SimplifyRange(open,far,open.Count-1,tolerance*tolerance,keep);
        var result=new List<P>();for(int i=0;i<open.Count-1;i++)if(keep[i])result.Add(open[i]);return result;
    }
    static double Area(List<P> p) {
        double a=0;for(int i=0;i<p.Count;i++){P u=p[i],v=p[(i+1)%p.Count];a+=(double)u.X*v.Y-(double)v.X*u.Y;}return a/2;
    }
    public static ForkliftGeometryResult Build(byte[] rgb,int w,int h,int stride) {
        var a=new bool[w*h];var neutralMin=new byte[a.Length];var report=new StringBuilder();
        for(int y=0;y<h;y++)for(int x=0;x<w;x++){
            int offset=y*stride+x*3,b=rgb[offset],g=rgb[offset+1],r=rgb[offset+2];
            int min=Math.Min(r,Math.Min(g,b)),max=Math.Max(r,Math.Max(g,b));neutralMin[y*w+x]=(byte)min;
            a[y*w+x]=min<178 || (max-min>35 && min<225);
        }
        a=Erode(Dilate(a,w,h,1),w,h,1);
        var seen=new bool[a.Length];List<int> largest=new List<int>();int componentCount=0;
        for(int i=0;i<a.Length;i++)if(a[i]&&!seen[i]){var c=Component(a,seen,i,w,h,true);componentCount++;if(c.Count>largest.Count)largest=c;}
        report.AppendFormat("Confident foreground: {0} components, largest {1} pixels.\n",componentCount,largest.Count);
        a=new bool[a.Length];foreach(int pixel in largest)a[pixel]=true;
        a=Dilate(a,w,h,2);
        seen=new bool[a.Length];int retainedHoles=0,filledHoles=0;
        for(int i=0;i<a.Length;i++)if(!a[i]&&!seen[i]){
            var c=Component(a,seen,i,w,h,false);bool exterior=false;int dark=0,bright=0,minX=w,minY=h,maxX=0,maxY=0;
            foreach(int pixel in c){int x=pixel%w,y=pixel/w;
                if(x==0||x==w-1||y==0||y==h-1)exterior=true;
                minX=Math.Min(minX,x);minY=Math.Min(minY,y);maxX=Math.Max(maxX,x);maxY=Math.Max(maxY,y);
                int tone=neutralMin[pixel];if(tone>=185&&tone<=220)dark++;if(tone>=235)bright++;
            }
            if(exterior)continue;
            double darkFraction=(double)dark/c.Count,brightFraction=(double)bright/c.Count;
            bool meaningful=c.Count>=120&&darkFraction>=0.12&&brightFraction>=0.10&&maxY<810;
            if(meaningful){retainedHoles++;report.AppendFormat(CultureInfo.InvariantCulture,"Retained hole {0}: area {1}, bounds ({2},{3})-({4},{5}), grey fraction {6:0.000}, bright fraction {7:0.000}.\n",retainedHoles,c.Count,minX,minY,maxX,maxY,darkFraction,brightFraction);}
            else{filledHoles++;foreach(int pixel in c)a[pixel]=true;}
        }
        report.AppendFormat("Retained {0} meaningful checkerboard holes; filled {1} small/non-checkerboard enclosed regions.\n",retainedHoles,filledHoles);
        var contours=Trace(a,w,h);contours.Sort((u,v)=>Math.Abs(Area(v)).CompareTo(Math.Abs(Area(u))));
        var path=new StringBuilder();int pointCount=0;
        foreach(var contour in contours) {
            var poly=Simplify(contour,1.35);pointCount+=poly.Count;
            for(int i=0;i<poly.Count;i++){if(i==0)path.Append('M');else path.Append('L');
                path.Append(((double)poly[i].X/w).ToString("0.######",CultureInfo.InvariantCulture));path.Append(' ');
                path.Append(((double)poly[i].Y/h).ToString("0.######",CultureInfo.InvariantCulture));}
            path.Append('Z');
            int minX=w,minY=h,maxX=0,maxY=0;foreach(var p in poly){minX=Math.Min(minX,p.X);minY=Math.Min(minY,p.Y);maxX=Math.Max(maxX,p.X);maxY=Math.Max(maxY,p.Y);}
            report.AppendFormat(CultureInfo.InvariantCulture,"Contour: area {0:0}, {1} simplified vertices, bounds ({2},{3})-({4},{5}).\n",Area(poly),poly.Count,minX,minY,maxX,maxY);
        }
        return new ForkliftGeometryResult{Path=path.ToString(),Report=report.ToString(),PointCount=pointCount,ContourCount=contours.Count};
    }
}
