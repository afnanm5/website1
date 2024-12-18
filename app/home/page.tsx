// app/home/page.tsx
const HomePage = () => {
  return (
    <div className="relative h-screen bg-teal-light flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-teal-500 opacity-50"></div>
      <div className="relative text-center text-white px-6 sm:px-12 md:px-20">
        <h1 className="text-5xl font-extrabold leading-tight mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl mb-6">
          I’m Afnan Monzur, a Computer Science student passionate about building real-world solutions. Explore my projects, skills, and experiences in the world of technology and innovation.
        </p>
        <a
          href="#about"
          className="inline-block px-6 py-3 bg-teal-700 text-white text-lg font-semibold rounded-lg hover:bg-teal-600 transition-all"
        >
          Learn More About Me
        </a>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <a href="#about" className="animate-bounce text-white text-4xl">
          ↓
        </a>
      </div>
    </div>
  );
};

export default HomePage;
