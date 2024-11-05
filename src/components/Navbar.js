import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-lg font-bold">My Portfolio</div>
        <div>
          <Link href="/" className="mr-4 hover:text-gray-300 transition">
            Home
          </Link>
          <Link href="/projects" className="mr-4 hover:text-gray-300 transition">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-gray-300 transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;