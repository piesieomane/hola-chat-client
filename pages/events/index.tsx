import AllEvents from '@/components/events/events-page';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  data: Array<{
    id: string;
    title: string;
    description: string;
    image: string;
  }>;
}

const EventsPage: NextPage<Props> = ({ data }) => {
  return <AllEvents data={data} />;
};

export default EventsPage;

export async function getStaticProps() {
  const { events_categories } = await import('/data/data.json');
  return {
    props: {
      data: events_categories,
    },
  };
}
