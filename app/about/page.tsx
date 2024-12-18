// app/about/page.tsx
"use client";

const AboutPage = () => {
  return (
    <div className="text-center bg-[#F1FAF6]">
      <h2 className="text-4xl font-bold text-[#2D4F4F] mt-16">About Me</h2>
      <div className="max-w-3xl mx-auto text-left mt-8 px-6">
        <p className="text-lg text-[#4B6B6B]">
          I am Afnan Monzur, currently pursuing a Bachelor of Science in
          Computer Science with a Minor in Cybersecurity at Toronto
          Metropolitan University. I'm passionate about solving real-world
          problems with technology.
        </p>
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-[#2D4F4F]">Education</h3>
          <p className="text-lg text-[#4B6B6B] mt-2">
            <strong>Toronto Metropolitan University</strong>
            <br />
            Bachelor of Science in Computer Science | Minor in Cyber-security
            (Expected June 2025)
          </p>
        </div>
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-[#2D4F4F]">Experience</h3>
          <p className="text-lg text-[#4B6B6B] mt-2">
            <strong>Provincial Elections Canada - Information Assistant</strong>
            <br />
            June 2022
            <ul className="list-disc ml-6 mt-2">
              <li>Provided excellent customer service to voters</li>
              <li>Assisted voters with inquiries and directions</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
