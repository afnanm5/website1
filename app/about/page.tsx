// app/about/page.tsx
const AboutPage = () => {
  return (
    <div id="about" className="text-center py-10 px-4 bg-teal-light">
      <h2 className="text-3xl font-semibold text-teal-dark">About Me</h2>
      <div className="text-left mt-8 mx-auto max-w-3xl">
        <p className="text-lg text-teal-muted">
          Hello! I am Afnan Monzur, a Computer Science student at Toronto Metropolitan University with a minor in Cyber-security. I have developed several projects using Python, Java, and other technologies, and I’m passionate about building solutions to real-world problems. Here’s a brief overview of my background:
        </p>
        <div className="mt-6">
          <h3 className="font-semibold text-xl text-teal-dark">Education</h3>
          <p className="text-teal-muted mt-2">
            <strong>Toronto Metropolitan University, Toronto, ON</strong><br />
            Bachelor of Science in Computer Science | Minor in Cyber-security (Expected June 2025)
          </p>
        </div>
        <div className="mt-6">
          <h3 className="font-semibold text-xl text-teal-dark">Experience</h3>
          <p className="text-teal-muted mt-2">
            <strong>Provincial Elections Canada - Information Assistant</strong><br />
            June 2022
            <ul className="list-disc ml-6 mt-2">
              <li>Greeted voters and maintained a positive attitude to provide customer satisfaction.</li>
              <li>Informed voters about any shortcomings and limitations when necessary.</li>
              <li>Guided voters to appropriate locations and addressed inquiries.</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
