// app/page.tsx
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="text-center py-10">
      <h2 className="text-2xl font-semibold text-gray-800">Welcome to My Portfolio</h2>
      <p className="text-gray-600 mt-2">I am a passionate developer with a focus on creating clean, efficient code and solving real-world problems.</p>
      <Link href="/projects" className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-105">
        View Projects
      </Link>
    </div>
  );
};

export default HomePage;
