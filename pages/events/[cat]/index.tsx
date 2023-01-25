import CatEvent from '@/components/events/catEvent';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  data: Array<{
    id: string;
    title: string;
    description: string;
    image: string;
    city: string;
  }>;
  pageName: string;
}

const EventsCatPage: NextPage<Props> = ({ data, pageName }) => {
  return <CatEvent data={data} pageName={pageName} />;
};

export default EventsCatPage;

interface ev {
  ev: Array<{
    id: string;
    title: string;
    description: string;
    image: string;
  }>;
}

export async function getStaticPaths() {
  const { events_categories } = await import('/data/data.json');
  const paths = events_categories.map((ev: any) => ({
    params: { cat: ev.id.toString() },
  }));
  //console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { allEvents } = await import('/data/data.json');
  const cat = allEvents.filter((ev) => ev.city === context.params.cat);
  console.log(cat);
  return {
    props: {
      data: cat,
      pageName: context?.params?.cat,
    },
  };
}
