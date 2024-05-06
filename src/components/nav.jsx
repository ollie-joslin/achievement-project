import {
  Link,
  useMatch,
  useResolvedPath,
} from "react-router-dom";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        {/* Link Tags replace anchor tags, they are apart of React Router and don't reload the entire page upon being interacted with */}
        <Link to="/">
          <img
            src={headerLogo}
            alt="Logo"
            width={130}
            height={29}
          />
        </Link>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <CustomLink key={item.label}>
              <Link
                to={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </Link>
            </CustomLink>
          ))}
        </ul>
        {/* This Div tag hides and unhides the hamburger menu icon */}
        <div className="hidden max-lg:block">
          <img
            src={hamburger}
            alt="Hamburger"
            width={25}
            height={25}
          />
        </div>
      </nav>
    </header>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({
    // Passing in an object containing the path URL and A boolean value, ensuring the entire path matches
    path: resolvedPath.pathname,
    end: true,
  });
  return (
    // Below is an if statement which adds the CSS class active when the URL of the Link Matches the Current URL
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default nav;
