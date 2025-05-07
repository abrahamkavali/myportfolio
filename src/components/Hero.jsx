import React from "react";

function Hero() {
  return (
    <section className="bg-gray-100 py-12 px-6 text-gray-900">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-6 text-lg leading-relaxed">

          <h2 className="text-2xl font-semibold text-indigo-700 underline decoration-indigo-400 underline-offset-4 mb-2">
            💼 Professional Summary
          </h2>
          <p>
            As a current Computer Science graduate student and experienced Software Analyst with 2.5 years at
            HCL Technologies Pvt. Ltd., I have developed strong troubleshooting, technical support, and issue
            resolution skills across various software platforms. Effective communication and strong task
            management skills were essential in my previous role, where I successfully handled similar
            responsibilities, which gives me confidence in my ability to transition seamlessly into this position and
            make immediate contributions.
          </p>
          <p>
            My experience includes maintaining SLAs, coordinating with cross-functional teams, and delivering
            efficient solutions, making me well-prepared for this role. Moreover, I am deeply passionate about
            people management and project oversight, making me genuinely excited about the opportunity to step
            into this role and contribute meaningfully.
          </p>

          <div>
            <h2 className="text-2xl font-semibold text-indigo-700 underline decoration-indigo-400 underline-offset-4 mb-2">
              🎓 Education
            </h2>
            <ul className="list-disc pl-6">
              <li>Auburn University at Montgomery – Pursuing MS in Computer Science</li>
              <li>Vikrama Simhapuri University – Graduate in MBA</li>
              <li>JNTU Anantapur University – Undergrad in Electrical and Electronics Engineering</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-indigo-700 underline decoration-indigo-400 underline-offset-4 mb-2">
              🧑‍💻 Experience
            </h2>
            <p className="font-medium">HCL Technologies Pvt. Ltd (Software Analyst)</p>
            <ul className="list-disc pl-6 mt-1">
              <li>Troubleshot and resolved issues under SLAs while maintaining confidentiality.</li>
              <li>Configured and supported Microsoft products (Windows OS, Office Suite).</li>
              <li>Delivered solutions across platforms for various software issues.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-indigo-700 underline decoration-indigo-400 underline-offset-4 mb-2">
              🛠️ Skills
            </h2>
            <ul className="list-disc pl-6">
              <li>Microsoft Office Suite: Word, Excel, PowerPoint</li>
              <li>Google Workspace: Google Docs, Works, Gmail</li>
              <li>Front-End: HTML, CSS, JavaScript, React</li>
              <li>Back-End: Node.js, Express.js, REST APIs</li>
              <li>Programming: Python, C++</li>
              <li>Data Structures & Algorithms</li>
              <li>IT Support: Technical support for software platforms and prompt issue resolution</li>
              <li>Languages: English, Telugu</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-indigo-700 underline decoration-indigo-400 underline-offset-4 mb-2">
              🏆 Achievements & Awards
            </h2>
            <p>
              Received a trophy for an outstanding presentation at the state-level tech fest, recognizing the
              exceptional quality and impact of the project.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-indigo-700 underline decoration-indigo-400 underline-offset-4 mb-2">
              🌱 Interests
            </h2>
            <ul className="list-disc pl-6">
              <li>Mentoring and Voluntary works</li>
              <li>Exploring Places and meeting new people</li>
              <li>Sports and Gardening</li>
              <li>Photoshoot and Broadcasting</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-indigo-700 underline decoration-indigo-400 underline-offset-4 mb-2">
              🏕️ Activities / Clubs
            </h2>
            <ul className="list-disc pl-6">
              <li>Computer Science Club</li>
              <li>Outdoor Adventures Club</li>
              <li>Guitar Club</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
