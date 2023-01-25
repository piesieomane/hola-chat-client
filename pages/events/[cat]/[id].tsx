import React from 'react';
import { NextPage } from 'next';
import SingleEvent from '@/components/events/single-events';

interface Props {
  data: Array<{
    id: string;
    title: string;
    description: string;
    image: string;
    city: string;
  }>;
}

const EventsPage: NextPage<Props> = ({ data }) => {
  return <SingleEvent data={data} />;
};

export default EventsPage;

export async function getStaticPaths() {
  const { allEvents } = await import('/data/data.json');
  const paths = allEvents.map((ev) => ({
    params: {
      id: ev.id.toString(),
      cat: ev.city.toString(),
    },
  }));
  //console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  console.log(context);
  const { allEvents } = await import('/data/data.json');
  const event = allEvents.find((ev) => ev.id === context.params.id);
  console.log(event);
  return {
    props: {
      data: event,
    },
  };
}
