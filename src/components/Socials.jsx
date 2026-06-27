function Socials() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">

      <a
        href="#hero"
        className="bg-cyan-500 p-3 rounded-full hover:scale-110 transition duration-300 text-white"
      >
        🏠
      </a>

      <a
        href="#projects"
        className="bg-cyan-500 p-3 rounded-full hover:scale-110 transition duration-300 text-white"
      >
        🚀
      </a>

      <a
        href="#contact"
        className="bg-cyan-500 p-3 rounded-full hover:scale-110 transition duration-300 text-white"
      >
        ✉️
      </a>

    </div>
  );
}

export default Socials;