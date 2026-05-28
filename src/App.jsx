function App() {
return ( <div className="bg-gradient-to-b from-[#050816] via-[#0f172a] to-[#050816] text-white min-h-screen">

```
  {/* Navbar */}
  <nav className="border-b border-purple-900/40 sticky top-0 bg-[#050816]/90 backdrop-blur-md z-50">

    <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

      <h1 className="text-4xl font-bold text-purple-400">
        Portfolio
      </h1>

      <ul className="hidden md:flex gap-8 font-medium text-lg">

        <li>
          <a
            href="#home"
            className="hover:text-purple-400 transition duration-300"
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="#about"
            className="hover:text-purple-400 transition duration-300"
          >
            About
          </a>
        </li>

        <li>
          <a
            href="#skills"
            className="hover:text-purple-400 transition duration-300"
          >
            Skills
          </a>
        </li>

        <li>
          <a
            href="#projects"
            className="hover:text-purple-400 transition duration-300"
          >
            Projects
          </a>
        </li>

        <li>
          <a
            href="#education"
            className="hover:text-purple-400 transition duration-300"
          >
            Education
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className="hover:text-purple-400 transition duration-300"
          >
            Contact
          </a>
        </li>

      </ul>

    </div>

  </nav>

  {/* Hero */}
  <section
    id="home"
    className="min-h-screen flex flex-col justify-center items-center text-center px-6"
  >

    <h1 className="text-5xl md:text-7xl font-bold mb-6">

      Hi, I'm{" "}

      <span className="text-purple-400">
        Bhukya Jaswanth
      </span>

    </h1>

    <h2 className="text-2xl md:text-4xl font-semibold mb-8">
      Full Stack MERN Developer
    </h2>

    <p className="text-gray-400 max-w-3xl text-lg leading-relaxed mb-10">

      Passionate about building scalable web applications
      and solving real-world problems using modern web technologies.

    </p>

    <div className="flex gap-6 flex-wrap justify-center">

      <a
        href="https://github.com/jaswanthb509"
        target="_blank"
        rel="noreferrer"
        className="bg-purple-500 text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 hover:shadow-[0_0_25px_#a855f7] transition duration-300"
      >
        GitHub
      </a>

      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noreferrer"
        className="border border-purple-500 text-purple-400 px-8 py-3 rounded-xl font-semibold hover:bg-purple-500 hover:text-white hover:scale-105 hover:shadow-[0_0_25px_#a855f7] transition duration-300"
      >
        LinkedIn
      </a>

    </div>

  </section>

  {/* About */}
  <section
    id="about"
    className="py-24 px-6"
  >

    <div className="max-w-5xl mx-auto text-center">

      <h2 className="text-5xl font-bold text-purple-400 mb-8">
        About Me
      </h2>

      <p className="text-gray-400 text-lg md:text-xl leading-relaxed">

        I am a Computer Science student at IIIT Nagpur
        and a passionate Full Stack MERN Developer focused
        on building modern and scalable web applications.

        <br /><br />

        I enjoy solving real-world problems using frontend
        and backend technologies and continuously improving
        my development skills.

      </p>

    </div>

  </section>

  {/* Skills */}
  <section
    id="skills"
    className="py-24 px-6"
  >

    <div className="max-w-6xl mx-auto">

      <h2 className="text-5xl font-bold text-center text-purple-400 mb-4">
        Skills
      </h2>

      <p className="text-gray-400 text-center text-lg mb-16">
        Technologies and tools I use.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Frontend */}
        <div className="bg-[#100d25] border border-purple-500 rounded-3xl p-10">

          <h3 className="text-4xl font-bold text-center mb-10">
            Frontend
          </h3>

          <div className="flex flex-wrap justify-center gap-5">

            <div className="border border-gray-700 px-6 py-4 rounded-2xl hover:border-purple-400 hover:scale-[1.02] transition duration-300 cursor-pointer">
              ⚛️ React.js
            </div>

            <div className="border border-gray-700 px-6 py-4 rounded-2xl hover:border-purple-400 hover:scale-[1.02] transition duration-300 cursor-pointer">
              🟨 JavaScript
            </div>

            <div className="border border-gray-700 px-6 py-4 rounded-2xl hover:border-purple-400 hover:scale-[1.02] transition duration-300 cursor-pointer">
              🌐 HTML
            </div>

            <div className="border border-gray-700 px-6 py-4 rounded-2xl hover:border-purple-400 hover:scale-[1.02] transition duration-300 cursor-pointer">
              🎨 CSS
            </div>

            <div className="border border-gray-700 px-6 py-4 rounded-2xl hover:border-purple-400 hover:scale-[1.02] transition duration-300 cursor-pointer">
              💨 Tailwind CSS
            </div>

          </div>

        </div>

        {/* Backend */}
        <div className="bg-[#100d25] border border-purple-500 rounded-3xl p-10">

          <h3 className="text-4xl font-bold text-center mb-10">
            Backend
          </h3>

          <div className="flex flex-wrap justify-center gap-5">

            <div className="border border-gray-700 px-6 py-4 rounded-2xl hover:border-purple-400 hover:scale-[1.02] transition duration-300 cursor-pointer">
              🟩 Node.js
            </div>

            <div className="border border-gray-700 px-6 py-4 rounded-2xl hover:border-purple-400 hover:scale-[1.02] transition duration-300 cursor-pointer">
              ⚡ Express.js
            </div>

            <div className="border border-gray-700 px-6 py-4 rounded-2xl hover:border-purple-400 hover:scale-[1.02] transition duration-300 cursor-pointer">
              🍃 MongoDB
            </div>

          </div>

        </div>

        {/* Others */}
        <div className="md:col-span-2 bg-[#100d25] border border-purple-500 rounded-3xl p-10">

          <h3 className="text-4xl font-bold text-center mb-10">
            Others
          </h3>

          <div className="flex flex-wrap justify-center gap-5">

            <div className="border border-gray-700 px-6 py-4 rounded-2xl hover:border-purple-400 hover:scale-[1.02] transition duration-300 cursor-pointer">
              🔥 Git
            </div>

            <div className="border border-gray-700 px-6 py-4 rounded-2xl hover:border-purple-400 hover:scale-[1.02] transition duration-300 cursor-pointer">
              🐙 GitHub
            </div>

            <div className="border border-gray-700 px-6 py-4 rounded-2xl hover:border-purple-400 hover:scale-[1.02] transition duration-300 cursor-pointer">
              📮 Postman
            </div>

            <div className="border border-gray-700 px-6 py-4 rounded-2xl hover:border-purple-400 hover:scale-[1.02] transition duration-300 cursor-pointer">
              💻 VS Code
            </div>

          </div>

        </div>

      </div>

    </div>

  </section>

  {/* Projects */}
  <section
    id="projects"
    className="py-24 px-6"
  >

    <div className="max-w-6xl mx-auto">

      <h2 className="text-5xl font-bold text-center text-purple-400 mb-4">
        Projects
      </h2>

      <p className="text-gray-400 text-center mb-16">
        Some projects I have worked on.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        <div className="bg-[#100d25] border border-purple-500 rounded-3xl p-8 hover:border-purple-400 hover:scale-[1.02] transition duration-300">

          <h3 className="text-3xl font-bold mb-4">
            SpendWise Family
          </h3>

          <p className="text-gray-400 leading-relaxed mb-6">

            A MERN stack expense management application
            for tracking family expenses and budgets.

          </p>

          <button className="bg-purple-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-[0_0_25px_#a855f7] transition duration-300">
            View Project
          </button>

        </div>

        <div className="bg-[#100d25] border border-purple-500 rounded-3xl p-8 hover:border-purple-400 hover:scale-[1.02] transition duration-300">

          <h3 className="text-3xl font-bold mb-4">
            Portfolio Website
          </h3>

          <p className="text-gray-400 leading-relaxed mb-6">

            Personal portfolio website built using
            React and Tailwind CSS.

          </p>

          <button className="bg-purple-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-[0_0_25px_#a855f7] transition duration-300">
            View Project
          </button>

        </div>

      </div>

    </div>

  </section>

  {/* Education */}
  <section
    id="education"
    className="py-24 px-6"
  >

    <div className="max-w-5xl mx-auto">

      <h2 className="text-5xl font-bold text-center text-purple-400 mb-4">
        Education
      </h2>

      <p className="text-gray-400 text-center text-lg mb-16">
        My academic journey and qualifications.
      </p>

      <div className="space-y-16">

        <div className="bg-[#100d25] border border-purple-500 rounded-3xl p-10 hover:scale-[1.02] transition duration-300">

          <h3 className="text-3xl font-bold mb-4">
            Indian Institute of Information Technology, Nagpur
          </h3>

          <p className="text-purple-400 text-xl mb-3">
            B.Tech in Computer Science and Engineering
          </p>

          <p className="text-gray-400 text-lg mb-4">
            2023 - 2027
          </p>

          <p className="text-gray-400 leading-relaxed">
            Pursuing Computer Science Engineering with focus on
            Full Stack Development, Data Structures & Algorithms,
            DBMS, Operating Systems, and Web Technologies.
          </p>

        </div>

        <div className="bg-[#100d25] border border-purple-500 rounded-3xl p-10 hover:scale-[1.02] transition duration-300">

          <h3 className="text-3xl font-bold mb-4">
            Narayana Junior College, Patancheruvu
          </h3>

          <p className="text-purple-400 text-xl mb-3">
            MPC (XII)
          </p>

          <p className="text-gray-400 text-lg mb-4">
            2021 - 2023
          </p>

          <p className="text-gray-400 leading-relaxed">
            Completed Intermediate education with focus on
            Mathematics, Physics, and Chemistry.
          </p>

        </div>

        <div className="bg-[#100d25] border border-purple-500 rounded-3xl p-10 hover:scale-[1.02] transition duration-300">

          <h3 className="text-3xl font-bold mb-4">
            Vijetha Vidyalaya, Mothinagar
          </h3>

          <p className="text-purple-400 text-xl mb-3">
            CBSE (X)
          </p>

          <p className="text-gray-400 text-lg mb-4">
            2020 - 2021
          </p>

          <p className="text-gray-400 leading-relaxed">
            Completed schooling with strong academic performance
            and active participation in extracurricular activities.
          </p>

        </div>

      </div>

    </div>

  </section>

  {/* Contact */}
  <section
    id="contact"
    className="py-24 px-6"
  >

    <div className="max-w-4xl mx-auto text-center">

      <h2 className="text-5xl font-bold text-purple-400 mb-6">
        Contact
      </h2>

      <p className="text-gray-400 text-lg mb-10">

        Feel free to connect with me for collaborations,
        internships, or opportunities.

      </p>

      <div className="bg-[#100d25] border border-purple-500 rounded-2xl px-8 py-5 inline-block hover:shadow-[0_0_20px_#a855f7] transition duration-300">

  <p className="text-gray-400 text-lg mb-2">
    Email:
  </p>

  <p className="text-white text-xl font-semibold">
    bjaswanth6130@gmail.com
  </p>

</div>

    </div>

  </section>

  {/* Footer */}
  <footer className="border-t border-purple-900/40 py-8 text-center text-gray-500">

    <p>
      © Bhukya Jaswanth
    </p>

  </footer>

</div>


);
}

export default App;
