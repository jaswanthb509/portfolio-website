function App() {
return ( <div className="bg-black text-white min-h-screen">

```
  {/* Navbar */}
  <nav className="fixed top-0 left-0 w-full bg-black border-b border-gray-800 z-50">

    <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

      <h1 className="text-3xl font-bold text-green-400">
        Jaswanth
      </h1>

      <ul className="hidden md:flex gap-10 text-lg font-medium">

        <li>
          <a href="#home" className="hover:text-green-400">
            Home
          </a>
        </li>

        <li>
          <a href="#about" className="hover:text-green-400">
            About
          </a>
        </li>

        <li>
          <a href="#skills" className="hover:text-green-400">
            Skills
          </a>
        </li>

        <li>
          <a href="#projects" className="hover:text-green-400">
            Projects
          </a>
        </li>

        <li>
          <a href="#contact" className="hover:text-green-400">
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

      <span className="text-green-400">
        Jaswanth
      </span>

    </h1>

    <h2 className="text-2xl md:text-4xl font-semibold mb-8">
      Full Stack MERN Developer
    </h2>

    <p className="text-gray-400 max-w-3xl text-lg leading-relaxed mb-10">

      Passionate about building scalable web applications
      and solving real-world problems using modern technologies.

    </p>

    <div className="flex gap-6">

      <a
        href="https://github.com/jaswanthb509"
        className="bg-green-400 text-black px-8 py-3 rounded-xl font-semibold"
      >
        GitHub
      </a>

      <a
        href="https://linkedin.com"
        className="border border-green-400 text-green-400 px-8 py-3 rounded-xl font-semibold"
      >
        LinkedIn
      </a>

    </div>

  </section>

  {/* About */}
  <section
    id="about"
    className="py-24 px-6 bg-gray-950"
  >

    <div className="max-w-5xl mx-auto text-center">

      <h2 className="text-4xl font-bold text-green-400 mb-10">
        About Me
      </h2>

      <p className="text-gray-400 text-lg leading-relaxed">

        I am a Computer Science student at IIIT Nagpur and
        a passionate Full Stack MERN Developer focused on
        building modern web applications.

      </p>

    </div>

  </section>

  {/* Skills */}
  <section
    id="skills"
    className="bg-black py-24 px-6"
  >

    <div className="max-w-6xl mx-auto">

      <h2 className="text-4xl font-bold text-center text-green-400 mb-16">
        Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Frontend */}
        <div className="bg-gray-950 border border-green-400 rounded-3xl p-8">

          <h3 className="text-3xl font-bold text-center mb-8">
            Frontend
          </h3>

          <div className="flex flex-wrap justify-center gap-4">

            <div className="border border-gray-700 px-5 py-3 rounded-xl">
              React.js
            </div>

            <div className="border border-gray-700 px-5 py-3 rounded-xl">
              JavaScript
            </div>

            <div className="border border-gray-700 px-5 py-3 rounded-xl">
              HTML
            </div>

            <div className="border border-gray-700 px-5 py-3 rounded-xl">
              CSS
            </div>

            <div className="border border-gray-700 px-5 py-3 rounded-xl">
              Tailwind CSS
            </div>

          </div>

        </div>

        {/* Backend */}
        <div className="bg-gray-950 border border-green-400 rounded-3xl p-8">

          <h3 className="text-3xl font-bold text-center mb-8">
            Backend
          </h3>

          <div className="flex flex-wrap justify-center gap-4">

            <div className="border border-gray-700 px-5 py-3 rounded-xl">
              Node.js
            </div>

            <div className="border border-gray-700 px-5 py-3 rounded-xl">
              Express.js
            </div>

            <div className="border border-gray-700 px-5 py-3 rounded-xl">
              MongoDB
            </div>

          </div>

        </div>

        {/* Others */}
        <div className="md:col-span-2 bg-gray-950 border border-green-400 rounded-3xl p-8">

          <h3 className="text-3xl font-bold text-center mb-8">
            Others
          </h3>

          <div className="flex flex-wrap justify-center gap-4">

            <div className="border border-gray-700 px-5 py-3 rounded-xl">
              Git
            </div>

            <div className="border border-gray-700 px-5 py-3 rounded-xl">
              GitHub
            </div>

            <div className="border border-gray-700 px-5 py-3 rounded-xl">
              Postman
            </div>

            <div className="border border-gray-700 px-5 py-3 rounded-xl">
              VS Code
            </div>

          </div>

        </div>

      </div>

    </div>

  </section>

  {/* Projects */}
  <section
    id="projects"
    className="bg-gray-950 py-24 px-6"
  >

    <div className="max-w-6xl mx-auto">

      <h2 className="text-4xl font-bold text-center text-green-400 mb-16">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        <div className="bg-black border border-gray-800 rounded-3xl p-8">

          <h3 className="text-2xl font-bold mb-4">
            SpendWise Family
          </h3>

          <p className="text-gray-400 mb-6">

            MERN stack expense management application.

          </p>

        </div>

        <div className="bg-black border border-gray-800 rounded-3xl p-8">

          <h3 className="text-2xl font-bold mb-4">
            Portfolio Website
          </h3>

          <p className="text-gray-400 mb-6">

            Personal portfolio built using React and Tailwind CSS.

          </p>

        </div>

      </div>

    </div>

  </section>

  {/* Contact */}
  <section
    id="contact"
    className="bg-black py-24 px-6"
  >

    <div className="max-w-4xl mx-auto text-center">

      <h2 className="text-4xl font-bold text-green-400 mb-8">
        Contact
      </h2>

      <p className="text-gray-400 text-lg mb-12">

        Feel free to connect with me.

      </p>

      <div className="flex justify-center gap-6">

        <a
          href="mailto:yourmail@gmail.com"
          className="bg-green-400 text-black px-8 py-4 rounded-xl font-semibold"
        >
          Email Me
        </a>

        <a
          href="https://linkedin.com"
          className="border border-green-400 text-green-400 px-8 py-4 rounded-xl font-semibold"
        >
          LinkedIn
        </a>

      </div>

    </div>

  </section>

</div>


);
}

export default App;
