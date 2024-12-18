// app/home/page.tsx
"use client";

const HomePage = () => {
  return (
    <div className="bg-[#F1FAF6] text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold text-[#2D4F4F] mt-20">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl mt-6 text-[#4B6B6B]">
          Hello! I am Afnan Monzur, a passionate Computer Science student at
          Toronto Metropolitan University, specializing in Cybersecurity.
        </p>
        <div className="mt-10">
          <p className="text-lg text-[#4B6B6B]">
            Explore my journey, projects, and achievements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
