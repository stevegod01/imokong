import LeadershipPage from '@/components/leadership-page';
import {executiveMembers} from '@/lib/leadership';

export const metadata = {
  title: 'Executive Management — About IMOKO',
  description: 'Meet IMOKO’s executive management team, leading operations, finance, sales, technology and business divisions. Explore each leader’s profile.',
};

export default function ExecutiveManagement() {
  return <LeadershipPage current="executive" members={executiveMembers}/>;
}
