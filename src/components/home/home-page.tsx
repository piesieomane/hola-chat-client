import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HomePage = ({ data }: any) => {
  return (
    <div className="home_body">
      {data.map((ev) => (
        <div className="card">
          <Link key={ev.id} href={`/events/${ev.id}`}>
            <div className="image">
              <Image width={600} height={400} alt={ev.title} src={ev.image} />{' '}
            </div>
            <div className="content">
              <h2> {ev.title} </h2>
              <p> {ev.description} </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
