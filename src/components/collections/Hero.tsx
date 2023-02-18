import type { VFC } from "react";
import { motion } from "framer-motion";

import type { CollectionImage } from "@/lib/sanity/schemaTypes";
import { fadeInDown, staggerLonger } from "@/lib/animate";
import IconChevronDown from "@/components/icons/ChevronDown";
import SanityImage from "@/components/shared/SanityImage";

interface Props {
  name: string;
  description?: string;
  image: CollectionImage;
}

const Hero: VFC<Props> = ({ name, description, image }) => {
  return (
    <motion.section variants={staggerLonger} className="h-screen">
      <div className="relative flex flex-col justify-center h-2/5">
        <motion.h1
          id="collection-name"
          className="text-3xl font-medium text-center capitalize font-display sm:text-5xl md:text-6xl"
          variants={fadeInDown}
        >
          {name}
        </motion.h1>
        {description && (
          <motion.p
            className="px-4 mx-auto my-4 text-center text-gray-500 sm:text-xl sm:w-2/3"
            variants={fadeInDown}
          >
            {description}
          </motion.p>
        )}
        <motion.div
          className="absolute -translate-x-1/2 left-1/2 bottom-4 animate-pulse"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <IconChevronDown />
        </motion.div>
      </div>

      <motion.div
        className="relative w-full h-3/5"
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <SanityImage image={image} layout="fill" objectFit="cover" />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
