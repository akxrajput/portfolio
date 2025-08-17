import React, { useState } from "react";
import mng from "../assets/mango.png";

const skills = [
  { img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", title: "React.js", desc: "Building dynamic and fast UIs with component-driven architecture.", color: "#61DAFB" },
  { img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg", title: "Node.js", desc: "Server-side JavaScript for scalable backend systems.", color: "#68A063" },
  { img: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png", title: "Express.js", desc: "Minimal & fast backend framework for APIs and services.", color: "#000000" },
  { img: "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png", title: "Docker", desc: "Containerizing apps for consistent deployment anywhere.", color: "#2496ED" },
  { img: mng, title: "MongoDB", desc: "NoSQL database for flexible and scalable data handling.", color: "#4DB33D" },
  { img: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg", title: "PostgreSQL", desc: "Advanced SQL database with powerful query features.", color: "#336791" },
  { img: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png", title: "SQL", desc: "Structured Query Language for relational databases.", color: "#F29111" },
  { img: "https://voyager.postman.com/logo/postman-logo-icon-orange.svg", title: "Postman", desc: "API testing & automation made simple.", color: "#FF6C37" },
  { img: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg", title: "Git", desc: "Version control for efficient code management.", color: "#F05032" },
  { img: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg", title: "GitHub", desc: "Collaboration & repository hosting for projects.", color: "#181717" },
  { img: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg", title: "HTML5", desc: "The backbone structure of every web page.", color: "#E34F26" },
  { img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", title: "Tailwind CSS", desc: "Utility-first CSS framework for modern UIs.", color: "#38B2AC" }
];

const Page3 = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="py-16  bg-cyan-950 text-white">
      <h1 className="text-9xl font-extrabold text-center ml-8 mb-16 tracking-wide">
  My Sk
  <span className="relative inline-block">
    <span className="relative">
      <span className="inline-block">I</span>
      <span className="absolute left-0 -top-12 animate-dot text-8xl text-green-400 leading-none">•</span>
    </span>
  </span>
  lls
</h1>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-7xl mx-auto px-6">
        {skills.map((skill, idx) => (
  <div
  key={idx}
  onClick={() => setSelected(skill)}
  className="relative rounded-2xl cursor-pointer transform transition-all duration-500 hover:scale-110 hover:-translate-y-2"
  style={{
    width: "280px",
    height: "280px",
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(15px)",
    WebkitBackdropFilter: "blur(15px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    boxShadow: `0 0 20px ${skill.color}40`,
  }}
  onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 0 35px ${skill.color}99`)}
  onMouseLeave={(e) => (e.currentTarget.style.boxShadow = `0 0 20px ${skill.color}40`)}
>
  {/* Icon */}
  <img
    src={skill.img}
    alt={skill.title}
    className="w-32 h-32 object-contain mx-auto mt-8 drop-shadow-lg animate-none"
  />

  {/* Title */}
  <h3
    className="text-3xl font-extrabold text-center mt-6"
    style={{
      textShadow: `0 0 10px ${skill.color}99`,
    }}
  >
    {skill.title}
  </h3>
</div>

        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-6">
          <div className="bg-gray-800 p-8 rounded-xl max-w-md w-full text-center relative">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 text-white text-2xl"
            >
              ✖
            </button>
            <img src={selected.img} alt={selected.title} className="w-28 h-28 object-contain mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">{selected.title}</h2>
            <p className="text-lg text-gray-300">{selected.desc}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page3;
