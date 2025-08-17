import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import nike from "../assets/nike-work.png";
import biss from "../assets/biss.png";
import pwweb from "../assets/pw-gen.png";
import dev from "../assets/dev.png";

const projects = [
  {
    img: nike,
    title: "Nike Landing Page",
    desc: "A sleek landing page for Nike with modern design and animations.",
  },
  {
    img: biss,
    title: "Business Website",
    desc: "A modern business website showcasing services and portfolio.",
  },
  {
    img: pwweb,
    title: "Password Generator",
    desc: "A secure password generator with customizable options.",
  },
  {
    img: dev,
    title: "DevCard Generator",
    desc: "A developer card generator to create personalized cards with skills and projects.",
  },
];

const ProjectsCarousel = () => {
  return (
    <section className="py-20 bg-white text-black relative overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,170,0.08),transparent_70%)] animate-pulse"></div>

      <h2 className="text-9xl font-extrabold text-center mb-16 tracking-tight relative z-10">
        My W<span className="text-green-400">o</span>rk
      </h2>

      <div className="max-w-[1600px] mx-auto px-6 relative z-10">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={40}
          slidesPerView={2.2}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 1 },
            1024: { slidesPerView: 2.2 },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="group relative rounded-3xl overflow-hidden border border-white/20 shadow-xl hover:shadow-2xl bg-white/80 backdrop-blur-md"
                style={{
                  boxShadow: "0 0 20px rgba(0, 255, 170, 0.2)",
                }}
              >
                {/* Image */}
                <motion.img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-[450px] object-contain bg-white transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Text */}
                <div className="absolute bottom-0 p-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <motion.h3
                    initial={{ y: 40, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="text-3xl font-bold mb-3"
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    initial={{ y: 40, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-lg text-gray-200"
                  >
                    {project.desc}
                  </motion.p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectsCarousel;
