// app/about/page.tsx
const AboutPage = () => {
  return (
    <div className="text-center py-10">
      <h2 className="text-3xl font-semibold text-gray-800">About Me</h2>
      <div className="text-left mt-4 mx-auto max-w-2xl">
        <p className="text-lg text-gray-600">
          Hello! I am Afnan Monzur, a Computer Science student at Toronto Metropolitan University with a minor in Cyber-security. I have developed several projects using Python, Java, and other technologies, and I’m passionate about building solutions to real-world problems. Here’s a brief overview of my background:
        </p>
        <div className="mt-6">
          <h3 className="font-semibold text-lg text-gray-800">Education</h3>
          <p className="text-gray-600 mt-2">
            <strong>Toronto Metropolitan University, Toronto, ON</strong><br />
            Bachelor of Science in Computer Science | Minor in Cyber-security (Expected June 2025)
          </p>
        </div>
        <div className="mt-6">
          <h3 className="font-semibold text-lg text-gray-800">Experience</h3>
          <p className="text-gray-600 mt-2">
            <strong>Provincial Elections Canada - Information Assistant</strong><br />
            June 2022
            <ul className="list-disc ml-6 mt-2">
              <li>Greeted voters and maintained a positive attitude to provide customer satisfaction</li>
              <li>Informed voters about any shortcomings and limitations when necessary</li>
              <li>Guided voters to appropriate locations and addressed inquiries</li>
            </ul>
          </p>
          <p className="text-gray-600 mt-6">
            <strong>SAWRO - Computer Literacy Instructor</strong><br />
            June 2017 - January 2018
            <ul className="list-disc ml-6 mt-2">
              <li>Managed and supported clients to achieve proficiency in computer literacy</li>
              <li>Monitored customer progress and provided assistance as needed</li>
              <li>Reported findings to administration regarding performance meeting daily goals</li>
            </ul>
          </p>
        </div>
        <div className="mt-6">
          <h3 className="font-semibold text-lg text-gray-800">Technical Skills</h3>
          <p className="text-gray-600 mt-2">
            <strong>Languages:</strong> Python, Java, Smalltalk, C<br />
            <strong>Developer Tools:</strong> GitHub, ReactJS, Matplotlib, OpenWeatherMap API
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
