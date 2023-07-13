import { link, linkedin, github } from "../assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-main rounded bg-[#131921] text-white">
      <div className="grid grid-flow-col gap-4">
        <Link to="/contact" className="link link-hover">
          Contact
        </Link>
        <Link to="/blogs" className="link link-hover">
          Blogs
        </Link>
        <Link to="/store" className="link link-hover">
          Store
        </Link>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://yasser-portfolio.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={link} alt="link" className="w-9" />
          </a>
          <a
            href="https://www.linkedin.com/in/yasser-tarek-32b257242/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="linkedin" className="w-9" />
          </a>
          <a
            href="https://github.com/Yasser-Tarek-1 "
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} alt="github" className="w-9" />
          </a>
        </div>
      </div>
      <div>
        <p>Copyright © 2023 - All right reserved by Yasser. Industries Ltd</p>
      </div>
    </footer>
  );
};

export default Footer;
