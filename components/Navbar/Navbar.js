import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav>
        <menu>
          <Link href="/">Home</Link>

          <Link href="/contacto">Contacto</Link>
        </menu>
      </nav>
    </div>
  );
};

export default Navbar;
