import Link from "next/link";
import { useState } from "react";
import { Divide as Hamburger } from "hamburger-react";

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <header className="wrapper mt-9">
      <div className="flex">
        <div>
          <Link href="/">
            <a>
              <img src="/momento.svg" alt="" />
            </a>
          </Link>
        </div>
        <div className="text-rose-50 grow hidden md:flex">
          <ul className="flex items-center ml-auto">
            <li>
              <a href="#" className="nav-links">
                About
              </a>
            </li>
            <li>
              <a href="#" className="nav-links">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="nav-links">
                Price
              </a>
            </li>
          </ul>
          <button className="ml-auto text-xl btn-contact">Contact</button>
        </div>
        <div className="md:hidden ml-auto">
          <Hamburger
            rounded
            toggled={menu}
            toggle={setMenu}
            distance="sm"
            size={36}
            color="#f7f7f7"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
