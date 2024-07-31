// components/Navbar.js

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          <Link href="/makanan">ListFood</Link>
        </div>
        <div className="text-white">
          <Link href="/create">Buat Makanan</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
