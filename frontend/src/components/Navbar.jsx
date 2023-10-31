import Upload from './Upload';
// import About from './About';

function Navbar() {
  return (
    <div className="bg-[#282828] p-40 py-4 md:p-4">
      <div className="navbar container mx-auto max-w-7xl flex justify-between items-center">
        <a
          href="/"
          className="font-aquatico tracking-wider text-3xl font-bold text-white"
        >
          <span className="font-anurati text-5xl">A</span>idio
        </a>
        <ul className="flex space-x-4">
          <li>
            <a href="" className="text-white">
              About
            </a>
          </li>
          <li>
            <a href="#how" className="text-white">
              How this works?
            </a>
          </li>
        </ul>
      </div>
      {/* Upload Component */}
      <Upload />
      {/* <About /> */}
    </div>
  );
}

export default Navbar;
