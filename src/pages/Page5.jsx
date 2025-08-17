import React, { useState, useRef } from "react";
import { FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";

const Page5 = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPos({ x, y });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      id="contact-section"
      className="relative min-h-screen flex flex-col justify-center items-start px-8 md:px-32 text-white overflow-hidden"
      style={{
        background: "#0a0a0a",
      }}
    >
      {/* 🔷 Hexagonal Glowing Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='173' viewBox='0 0 200 173'%3E%3Cpolygon points='100,0 200,50 200,150 100,200 0,150 0,50' fill='none' stroke='rgba(0,255,255,0.3)' stroke-width='2'/%3E%3C/svg%3E")
          `,
          backgroundSize: "100px 86px",
          opacity: 0.3,
          filter: "drop-shadow(0 0 12px rgba(0,255,255,0.8))",
          animation: "moveHex 12s linear infinite",
        }}
      ></div>

      {/* ✨ Glow Following Cursor */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at ${pos.x}px ${pos.y}px,
            rgba(0, 255, 255, 0.4) 0%,
            rgba(0, 255, 255, 0.1) 25%,
            rgba(0, 0, 0, 0.95) 70%)
          `,
          mixBlendMode: "screen",
          transition: "background 0.02s linear",
        }}
      ></div>

      {/* ✅ Resume Button (Middle Right) */}
     <div className="absolute right-50 top-1/2 -translate-y-1/2 z-20 p-20">
  <a
    href="/port-resume.pdf" // Replace with your actual resume path
    download="Akshay-Girase-Resume.pdf"
    className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black font-light px-20 py-3 rounded-lg shadow-lg transition duration-300"
  >
    <FaDownload />
    Resume
  </a>
</div>


      {/* TEXT CONTENT */}
      <p className="text-cyan-400 mb-4 text-4xl">Hi, my name is</p>
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
        Akshay Girase<span className="text-cyan-400">.</span>
      </h1>
      <h2 className="text-3xl md:text-5xl font-bold text-gray-400 mb-6">
        I build things for the web.
      </h2>
      <p className="max-w-2xl text-gray-400 text-lg mb-8">
        I’m a web developer specializing in building exceptional digital experiences.
      </p>

      {/* ✅ Tech Meme in Text */}
      <div className="mt-6 max-w-md bg-gray-900/50 border border-cyan-400 rounded-xl p-4 shadow-lg">
        <p className="text-gray-300 text-center text-lg italic">
          “Recruiter: Can you center a div? <br /> Me: *I can center the universe with CSS Grid.*”
        </p>
      </div>

      {/* ✅ Social Links Section */}
      <div className="flex gap-6 mt-8 z-10">
        <a
          href="https://www.linkedin.com/in/akshay-girase-318136246/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 text-3xl hover:text-blue-500 transition duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=akshaygirase122003@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 text-3xl hover:text-green-400 transition duration-300"
        >
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
};

export default Page5;
