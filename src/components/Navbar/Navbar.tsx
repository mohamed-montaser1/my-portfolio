import { useRef, useState } from "react";
import "../../scss/navbar/navbar.scss";
function Navbar() {
  const [showSmNavbar, setShowSmNavbar] = useState<boolean>(false);
  const smNavbarNav = useRef<null | HTMLDivElement>(null);
  // const linkRef = useRef<null | Array<HTMLLinkElement>>(null);

  // function handleToggleSmNavbar(current: boolean) {
  function handleOpenSmNavbar(current: boolean) {
    if (current) {
      smNavbarNav.current?.classList.remove("hidden");
      smNavbarNav.current?.classList.add("flex");
      setTimeout(() => {
        smNavbarNav.current?.classList.add("min-[860px]:opacity-1");
        smNavbarNav.current?.classList.remove("opacity-0");
      }, 300);
    }
    // else {
    //   smNavbarNav.current?.classList.remove("min-[860px]:opacity-1");
    //   smNavbarNav.current?.classList.remove("flex");
    //   smNavbarNav.current?.classList.add("hidden");
    // }

    setShowSmNavbar(!current);
  }

  const handleCloseSmNavbar = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    let target = e.target as Element;
    let condition = !(target.classList[0] === "flex");
    if (condition) {
      smNavbarNav.current?.classList.remove("min-[860px]:opacity-1");
      smNavbarNav.current?.classList.add("opacity-0");
      setTimeout(() => {
        smNavbarNav.current?.classList.remove("flex");
        smNavbarNav.current?.classList.add("hidden");
      }, 300);
      setShowSmNavbar(false);
    } else {
      return;
    }
  };

  return (
    <>
      <nav className="navbar mx-16 mt-8 bg-[#19376D] max-[614px]:mx-7 max-[436px]:px-10 py-5 px-16 rounded-3xl flex justify-between items-center">
        <h1 className="navbar__logo">
          <a
            href="#"
            className="text-slate-200 text-2xl font-medium max-[480px]:text-xl"
          >
            Mohamed Montaser.
          </a>
        </h1>
        <button
          className="bergur-menu hidden max-[860px]:block"
          onClick={() => handleOpenSmNavbar(!showSmNavbar)}
        >
          <svg width={"30px"} height={"22px"}>
            <line x1={0} x2={30} y1={1} y2={1} stroke="#fff" strokeWidth={1} />
            <line
              x1={0}
              x2={30}
              y1={10}
              y2={10}
              stroke="#fff"
              strokeWidth={1}
            />
            <line
              x1={0}
              x2={30}
              y1={20}
              y2={20}
              stroke="#fff"
              strokeWidth={1}
            />
          </svg>
        </button>
        <ul className="navbar__nav flex justify-center items-center gap-5 max-[860px]:hidden">
          <li className="navbar__nav__link text-[#aebfff] ease-linear duration-300 hover:text-[#96adff]">
            <a href="#">Home</a>
          </li>
          <li className="navbar__nav__link text-[#aebfff] ease-linear duration-300 hover:text-[#96adff]">
            <a href="#about">About</a>
          </li>
          <li className="navbar__nav__link text-[#aebfff] ease-linear duration-300 hover:text-[#96adff]">
            <a href="#skills">Skills</a>
          </li>
          <li className="navbar__nav__link text-[#aebfff] ease-linear duration-300 hover:text-[#96adff]">
            <a href="#work">Work</a>
          </li>
          <li className="navbar__nav__link text-[#aebfff] ease-linear duration-300 hover:text-[#96adff]">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div
          className="min-navbar__nav opacity-0 hidden fixed top-1/2 left-1/2 -translate-x-1/2 duration-200 ease-linear flex-col gap-y-5 -translate-y-1/2 backdrop-blur-3xl  w-full h-screen justify-center items-center"
          ref={smNavbarNav}
          onClick={(e) => handleCloseSmNavbar(e)}
        >
          <ul className="flex gap-y-5 flex-col">
            <li className="navbar__nav__link text-[#aebfff] ease-linear duration-300 hover:text-[#96adff] text-2xl">
              <a href="#" className="navbar__nav__link">
                Home
              </a>
            </li>
            <li className="navbar__nav__link text-[#aebfff] ease-linear duration-300 hover:text-[#96adff] text-2xl">
              <a href="#about" className="navbar__nav__link">
                About
              </a>
            </li>
            <li className="navbar__nav__link text-[#aebfff] ease-linear duration-300 hover:text-[#96adff] text-2xl">
              <a href="#skills" className="navbar__nav__link">
                Skills
              </a>
            </li>
            <li className="navbar__nav__link text-[#aebfff] ease-linear duration-300 hover:text-[#96adff] text-2xl">
              <a href="#work" className="navbar__nav__link">
                Work
              </a>
            </li>
            <li className="navbar__nav__link text-[#aebfff] ease-linear duration-300 hover:text-[#96adff] text-2xl">
              <a href="#contact" className="navbar__nav__link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
