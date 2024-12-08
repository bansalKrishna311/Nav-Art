"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";

interface Product {
  thumbnail: string;
  name: string; // Add this property
}

interface HeroParallaxProps {
  products: Product[];
}

export const HeroParallax: React.FC<HeroParallaxProps> = ({ products }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 500]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -500]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [10, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.3, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [10, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-400, 0]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[250vh] py-40 overflow-hidden relative flex flex-col items-center [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <Row products={firstRow} translate={translateX} reverse />
        <Row products={secondRow} translate={translateXReverse} />
        <Row products={thirdRow} translate={translateX} reverse />
      </motion.div>
    </div>
  );
};

export const Header: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto pt-20 md:py-40 px-4 w-full text-center">
      <h1 className="text-2xl md:text-6xl font-bold dark:text-white">
        My Art <br /> Gallery 🎨
      </h1>
    </div>
  );
};

interface ProductCardProps {
  product: Product;
  translate: MotionValue<number>;
}
const ProductCard: React.FC<ProductCardProps> = ({ product, translate }) => {
  return (
    <motion.div
      style={{ x: translate }}
      whileHover={{ y: -10 }}
      className="group h-80 w-[20rem] relative flex-shrink-0"
    >
      <Image
        src={product.thumbnail}
        height={500}
        width={500}
        className="object-cover absolute h-full w-full"
        alt={product.name} // Use the product name as the alt text
      />
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
      {/* Name Display */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-xl font-bold">
        {product.name}
      </div>
    </motion.div>
  );
};


interface RowProps {
  products: Product[];
  translate: MotionValue<number>;
  reverse?: boolean;
}

const Row: React.FC<RowProps> = ({ products, translate, reverse = false }) => {
  return (
    <motion.div
      className={`flex ${reverse ? "flex-row-reverse space-x-reverse" : "flex-row"} space-x-8 mb-12`}
    >
      {products.map((product) => (
        <ProductCard product={product} translate={translate} key={product.thumbnail} />
      ))}
    </motion.div>
  );
};
