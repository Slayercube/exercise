import React from "react";
import mapsImg from "@/images/images.jpeg";
import Image from "next/image";

const url = 'https://www.course-api.com/images/tours/tour-1.jpeg';

function page({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1 className="text-4xl"> ID: {params.id}</h1>
      <section className="flex gap-x-4 mt-4">
        {/* local image */}
        <div>
          <Image src={mapsImg} alt="maps" className="w-48 h-48 object-cover rounded " priority />
          local image
        </div>
        {/* remote image */}
        <div>
            <Image src={url} alt="tour"
            width={200}
            height={200}
            className="w-48 h-48 object-cover rounded " priority />
            <h2>remotre img</h2>
        </div>
      </section>
    </div>
  );
}

export default page;
