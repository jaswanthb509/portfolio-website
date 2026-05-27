function App() {
return ( <div className="min-h-screen bg-black text-white">

```
  {/* Navbar */}
  <nav className="w-full border-b border-gray-800">

    <div className="max-w-7xl mx-auto flex justify-between items-center px-10 py-6">

      {/* Logo */}
      <h1 className="text-3xl font-bold text-green-400 tracking-wide">
        Jaswanth
      </h1>

      {/* Navigation Links */}
      <div className="flex gap-10 text-gray-300 font-medium">

        <p className="hover:text-green-400 hover:scale-110 transition duration-300 cursor-pointer">
          Home
        </p>

        <p className="hover:text-green-400 hover:scale-110 transition duration-300 cursor-pointer">
          About
        </p>

        <p className="hover:text-green-400 hover:scale-110 transition duration-300 cursor-pointer">
          Skills
        </p>

        <p className="hover:text-green-400 hover:scale-110 transition duration-300 cursor-pointer">
          Projects
        </p>

        <p className="hover:text-green-400 hover:scale-110 transition duration-300 cursor-pointer">
          Contact
        </p>

      </div>

    </div>

  </nav>

  {/* Hero Section */}
  <section className="flex flex-col justify-center items-center text-center h-[90vh] px-6">

    <h1 className="text-6xl md:text-7xl font-extrabold leading-tight mb-6">

      Hi, I'm{" "}

      <span className="text-green-400">
        Jaswanth
      </span>

    </h1>

    <h2 className="text-2xl md:text-3xl text-gray-300 font-semibold mb-6">
      Full Stack MERN Developer
    </h2>

    <p className="max-w-3xl text-gray-400 text-lg leading-relaxed mb-10">

      Passionate about building scalable web applications,
      solving real-world problems, and continuously learning
      modern technologies to create impactful digital experiences.

    </p>

    {/* Buttons */}
    <div className="flex gap-6">

      <a
        href="https://github.com/jaswanthb509"
        target="_blank"
        rel="noreferrer"
        className="bg-green-500 text-black px-8 py-3 rounded-xl font-semibold hover:bg-green-400 hover:scale-105 transition duration-300 shadow-lg shadow-green-500/20"
      >
        GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/bhukya-jaswanth-0346bb28a/"
        target="_blank"
        rel="noreferrer"
        className="border border-green-500 text-green-400 px-8 py-3 rounded-xl font-semibold hover:bg-green-500 hover:text-black hover:scale-105 transition duration-300"
      >
        LinkedIn
      </a>

    </div>

  </section>

  {/* About Section */}
  <section className="bg-gray-950 py-24 px-6">

    <div className="max-w-5xl mx-auto">

      <h2 className="text-4xl font-bold text-green-400 mb-8">
        About Me
      </h2>

      <p className="text-gray-300 text-lg leading-relaxed">

        I am a Computer Science student at IIIT Nagpur and a passionate
        Full Stack MERN Developer focused on building modern, scalable,
        and user-friendly web applications. I enjoy solving real-world
        problems through technology and continuously improving my skills
        in React.js, Node.js, MongoDB, and Data Structures & Algorithms.

      </p>

    </div>

  </section>

  {/* Skills Section */}

<section className="bg-black py-24 px-6">

  <div className="max-w-6xl mx-auto">


<h2 className="text-4xl font-bold text-green-400 mb-14 text-center">
  Skills
</h2>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8">

  {/* Skill Card */}
  <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center hover:border-green-400 hover:scale-105 transition duration-300">

    <h3 className="text-2xl font-semibold text-white mb-3">
      React.js
    </h3>

    <p className="text-gray-400">
      Frontend Development
    </p>

  </div>

  {/* Skill Card */}
  <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center hover:border-green-400 hover:scale-105 transition duration-300">

    <h3 className="text-2xl font-semibold text-white mb-3">
      Node.js
    </h3>

    <p className="text-gray-400">
      Backend Development
    </p>

  </div>

  {/* Skill Card */}
  <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center hover:border-green-400 hover:scale-105 transition duration-300">

    <h3 className="text-2xl font-semibold text-white mb-3">
      MongoDB
    </h3>

    <p className="text-gray-400">
      Database Management
    </p>

  </div>

  {/* Skill Card */}
  <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center hover:border-green-400 hover:scale-105 transition duration-300">

    <h3 className="text-2xl font-semibold text-white mb-3">
      Tailwind CSS
    </h3>

    <p className="text-gray-400">
      Modern UI Styling
    </p>

  </div>

</div>

{/* Projects Section */}

<section className="bg-gray-950 py-24 px-6">

  <div className="max-w-6xl mx-auto">

```
<h2 className="text-4xl font-bold text-green-400 text-center mb-16">
  Projects
</h2>

<div className="grid md:grid-cols-2 gap-10">

  {/* Project Card */}
  <div className="bg-black border border-gray-800 rounded-2xl p-8 hover:border-green-400 hover:scale-[1.02] transition duration-300">

    <h3 className="text-3xl font-bold text-white mb-4">
      SpendWiseFamily
    </h3>

    <p className="text-gray-400 leading-relaxed mb-6">

      AI-powered family expense management platform that helps
      families track expenses, analyze spending habits, manage
      savings goals, and visualize financial insights using
      modern dashboards and analytics.

    </p>

    <div className="flex flex-wrap gap-3 mb-6">

      <span className="bg-green-500/20 text-green-400 px-4 py-1 rounded-full text-sm">
        React.js
      </span>

      <span className="bg-green-500/20 text-green-400 px-4 py-1 rounded-full text-sm">
        Node.js
      </span>

      <span className="bg-green-500/20 text-green-400 px-4 py-1 rounded-full text-sm">
        MongoDB
      </span>

      <span className="bg-green-500/20 text-green-400 px-4 py-1 rounded-full text-sm">
        Express.js
      </span>

    </div>

    <div className="flex gap-4">

      <a
        href="https://github.com/jaswanthb509/SpendWiseFamily"
        target="_blank"
        rel="noreferrer"
        className="bg-green-500 text-black px-5 py-2 rounded-lg font-semibold hover:bg-green-400 transition duration-300"
      >
        GitHub
      </a>

      <button className="border border-green-500 text-green-400 px-5 py-2 rounded-lg hover:bg-green-500 hover:text-black transition duration-300">
        Live Demo
      </button>

    </div>

  </div>

  {/* Portfolio Project */}
  <div className="bg-black border border-gray-800 rounded-2xl p-8 hover:border-green-400 hover:scale-[1.02] transition duration-300">

    <h3 className="text-3xl font-bold text-white mb-4">
      Portfolio Website
    </h3>

    <p className="text-gray-400 leading-relaxed mb-6">

      Personal developer portfolio website built using React.js
      and Tailwind CSS to showcase projects, skills, and
      development journey with modern UI design.

    </p>

    <div className="flex flex-wrap gap-3 mb-6">

      <span className="bg-green-500/20 text-green-400 px-4 py-1 rounded-full text-sm">
        React.js
      </span>

      <span className="bg-green-500/20 text-green-400 px-4 py-1 rounded-full text-sm">
        Tailwind CSS
      </span>

      <span className="bg-green-500/20 text-green-400 px-4 py-1 rounded-full text-sm">
        Vite
      </span>

    </div>

    <div className="flex gap-4">

      <a
        href="https://github.com/jaswanthb509"
        target="_blank"
        rel="noreferrer"
        className="bg-green-500 text-black px-5 py-2 rounded-lg font-semibold hover:bg-green-400 transition duration-300"
      >
        GitHub
      </a>

      <button className="border border-green-500 text-green-400 px-5 py-2 rounded-lg hover:bg-green-500 hover:text-black transition duration-300">
        Live Demo
      </button>

    </div>

  </div>

</div>
```

  </div>

</section>

{/* Contact Section */}

<section className="bg-black py-24 px-6">

  <div className="max-w-4xl mx-auto text-center">

```
<h2 className="text-4xl font-bold text-green-400 mb-8">
  Contact Me
</h2>

<p className="text-gray-400 text-lg mb-12">

  I’m currently open to internships, collaborations,
  and exciting development opportunities.

</p>

<div className="flex flex-col md:flex-row justify-center gap-6">

  {/* Email */}
  <a
    href="mailto:bjaswanth6130@gmail.com"
    className="bg-gray-900 border border-gray-800 px-8 py-4 rounded-2xl hover:border-green-400 hover:scale-105 transition duration-300"
  >

    <h3 className="text-xl font-semibold text-white mb-2">
      Email
    </h3>

    <p className="text-gray-400">
      bjaswanth6130@gmail.com
    </p>

  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/bhukya-jaswanth-0346bb28a/"
    target="_blank"
    rel="noreferrer"
    className="bg-gray-900 border border-gray-800 px-8 py-4 rounded-2xl hover:border-green-400 hover:scale-105 transition duration-300"
  >

    <h3 className="text-xl font-semibold text-white mb-2">
      LinkedIn
    </h3>

    <p className="text-gray-400">
      Connect Professionally
    </p>

  </a>

  {/* GitHub */}
  <a
    href="https://github.com/jaswanthb509"
    target="_blank"
    rel="noreferrer"
    className="bg-gray-900 border border-gray-800 px-8 py-4 rounded-2xl hover:border-green-400 hover:scale-105 transition duration-300"
  >

    <h3 className="text-xl font-semibold text-white mb-2">
      GitHub
    </h3>

    <p className="text-gray-400">
      View My Projects
    </p>

  </a>

</div>
```

  </div>

</section>


{/* Footer */}

<footer className="border-t border-gray-800 py-6 text-center text-gray-500">

  <p>
    © 2026 Jaswanth. Built with React.js & Tailwind CSS.
  </p>

</footer>



  </div>

</section>



</div>


);
}

export default App;
