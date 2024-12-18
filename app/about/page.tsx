// app/about/page.tsx
"use client";  // This makes sure that this page is rendered on the client side
import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-teal-50 text-center py-20 px-10">
      <h2 className="text-4xl font-semibold text-teal-700 mb-8">About Me</h2>
      <div className="text-left mx-auto max-w-3xl">
        <p className="text-xl text-teal-600">
          Hello! I am Afnan Monzur, currently pursuing a Bachelor of Science in Computer Science with a Minor in Cybersecurity at Toronto Metropolitan University. I&apos;m passionate about solving real-world problems with technology and developing innovative solutions. Here&apos;s a bit about me:
        </p>
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-teal-800">Education</h3>
          <p className="text-teal-600 mt-2">
            <strong>Toronto Metropolitan University, Toronto, ON</strong><br />
            Bachelor of Science in Computer Science | Minor in Cybersecurity (Expected June 2025)
          </p>
        </div>
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-teal-800">Experience</h3>
          <p className="text-teal-600 mt-2">
            <strong>Provincial Elections Canada - Information Assistant</strong><br />
            June 2022
            <ul className="list-disc ml-6 mt-2">
              <li>Greeted voters and maintained a positive attitude to provide customer satisfaction</li>
              <li>Informed voters about any shortcomings and limitations when necessary</li>
              <li>Guided voters to appropriate locations and addressed inquiries</li>
            </ul>
          </p>
          <p className="text-teal-600 mt-6">
            <strong>SAWRO - Computer Literacy Instructor</strong><br />
            June 2017 - January 2018
            <ul className="list-disc ml-6 mt-2">
              <li>Managed and supported clients to achieve proficiency in computer literacy</li>
              <li>Monitored customer progress and provided assistance as needed</li>
              <li>Reported findings to administration regarding performance meeting daily goals</li>
            </ul>
          </p>
        </div>
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-teal-800">Technical Skills</h3>
          <p className="text-teal-600 mt-2">
            <strong>Languages:</strong> Python, Java, Smalltalk, C<br />
            <strong>Developer Tools:</strong> GitHub, ReactJS, Matplotlib, OpenWeatherMap API
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
