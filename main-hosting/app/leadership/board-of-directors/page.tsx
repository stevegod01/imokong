import LeadershipPage from '@/components/leadership-page';
import {boardMembers} from '@/lib/leadership';

export const metadata = {
  title: 'Board of Directors — About IMOKO',
  description: 'Meet IMOKO’s board of directors, providing governance, strategic oversight and long-term direction. Explore each member’s profile.',
};

export default function BoardOfDirectors() {
  return <LeadershipPage current="board" members={boardMembers}/>;
}
