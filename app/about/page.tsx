// app/about/page.tsx
'use client'

export default function AboutPage() {
    return (
        <div className="bg-teal-800 text-white p-8">
            <h2 className="text-3xl font-semibold mb-4">About Afnan Monzur</h2>
            <p className="mb-2">Afnan Monzur</p>
            <p className="mb-2">647-967-9715 | afnanm.0505@gmail.com</p>

            <h3 className="mt-4 text-2xl font-semibold">Education</h3>
            <p>Toronto Metropolitan University, Toronto, ON</p>
            <p>Bachelor of Science in Computer Science | Minor in Cyber-security</p>

            <h3 className="mt-4 text-2xl font-semibold">Technical Skills</h3>
            <p>Languages: Python, Java, Smalltalk, C</p>
            <p>Developer Tools: Github, ReactJS, Matplotlib, OpenWeatherMap API</p>

            <h3 className="mt-4 text-2xl font-semibold">Experience</h3>
            <p>Provincial Elections Canada - Information Assistant (Jun 2022)</p>
            <ul>
                <li>Greeted voters and provided customer satisfaction.</li>
                <li>Informed voters about any shortcomings and limitations.</li>
                <li>Guided voters to appropriate locations and answered inquiries.</li>
            </ul>

            <p>SAWRO - Computer Literacy Instructor (Jun 2017 - Jan 2018)</p>
            <ul>
                <li>Managed and supported clients in achieving computer literacy.</li>
                <li>Monitored clients and provided assistance towards growth.</li>
                <li>Reported findings to administration regarding performance.</li>
            </ul>
        </div>
    );
}
