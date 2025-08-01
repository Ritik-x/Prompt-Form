import { LuLinkedin } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="py-5 border-t border-white/15">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8">
          <div className="flex gap-2 items-center">
            <div className="font-medium">Prompt Form</div>
          </div>
          <nav className="flex flex-col lg:flex-row gap-5 lg:gap-7 lg:flex-1 lg:justify-center">
            <a href="#" className="text-white/70 hover:text-white text-xs">
              Features
            </a>
            <a href="#" className="text-white/70 hover:text-white text-xs">
              Product
            </a>
            <a href="#" className="text-white/70 hover:text-white text-xs">
              Action
            </a>
            <a href="#" className="text-white/70 hover:text-white text-xs">
              Pricing
            </a>
          </nav>
          <div className="flex gap-5 lg:flex-1 lg:justify-end">
            <a
              href="https://www.linkedin.com/in/ritik-garg-604979282/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LuLinkedin />
            </a>
            <a
              href="https://github.com/Ritik-x"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
