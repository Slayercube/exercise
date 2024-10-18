import Link from "next/link";
import React from "react";

const url = "https://www.course-api.com/react-tours-project";

type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};

const featchTours = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await fetch(url);
  const data: Tour[] = await res.json();
  return data;
}


async function TourPage() {
const data = await featchTours();

  return (
    <section>
      <h1 className="text-3xl mb-4 ">Tours</h1>
      {data.map((tour) => {
        return ( 
        <Link href={`/tours/${tour.id}`} key={tour.id} className="hover:text-blue-500 ">
        <h2 key={tour.id}>{tour.name}</h2>
        </Link>
        );
        })}
    </section>
  );
}

export default TourPage;
