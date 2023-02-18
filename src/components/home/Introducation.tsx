import Link from "next/link";

import ownerPortrait from "@/images/photographer-1.jpg";
import Thumbnail from "@/components/shared/Thumbnail";

function Introduction() {
  return (
    <section className="mt-8 space-y-8 md:-mt-32 md:space-y-0 md:flex">
      <div className="md:flex-1 md:flex md:flex-col md:justify-center">
        <div className="px-4 md:px-12">
          <h1 className="text-3xl font-display sm:text-4xl sm:leading-normal md:text-5xl xl:leading-loose">
            Oumaima Hoummir
          </h1>
          <p className="mt-4 text-xl text-gray-500 font-body xl:mt-0 md:text-2xl">
            Outdoor Photographer based out of Marrakech, Morocco.
          </p>
          <Link href="/contact">
            <a className="inline-block w-64 px-6 py-3 mt-6 text-center text-white transition-colors rounded-md font-display bg-secondary hover:bg-gray-800 hover:text-gray-200 focus:outline-none focus:bg-gray-800 focus:text-gray-200">
              Book a Session
            </a>
          </Link>
        </div>
      </div>
      <div className="md:flex-1">
        <Thumbnail
          src={ownerPortrait}
          alt="Oumaima Hoummir"
          layout="responsive"
          width="1920"
          height="2560"
          placeholder="blur"
          overlay
        />
      </div>
    </section>
  );
}

export default Introduction;
