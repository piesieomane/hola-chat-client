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
  return (
    <div>
      <h1>Events in {pageName}</h1>
      <div>
        {data.map((ev) => {
          return (
            <Link key={ev.id} href={`/events/${ev.city}/${ev.id}`} passHref>
              <Image src={ev.image} alt={ev.title} width={300} height={300} />
              <h2>{ev.title}</h2>
              <p>{ev.description}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
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
