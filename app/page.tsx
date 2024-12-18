const HomePage = () => {
  return (
    <div id="home" className="bg-gradient-to-r from-[#81E6D9] to-[#C6F6D5] text-[#2D3748] text-center py-24">
      <h1 className="text-5xl font-extrabold mb-4">Afnan Monzur</h1>
      <p className="text-xl mb-8">
        Passionate about Computer Science, Cyber Security, and Web Development
      </p>
      <a
        href="#projects"
        className="bg-[#4FD1C5] px-6 py-3 rounded-full text-xl font-medium text-white hover:bg-[#38B2AC] transition-all"
      >
        View My Projects
      </a>
    </div>
  );
};

export default HomePage;
