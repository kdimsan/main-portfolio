import { useState, useEffect } from "react";
import { Container, DesktopHeader } from "./styles";
import { FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa";

interface HeaderProps {
  activeSection: string | null;
}

export function Header({ activeSection }: HeaderProps) {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const handleWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowWidth);
    return () => {
      window.removeEventListener("resize", handleWindowWidth);
    };
  });

  console.log(windowWidth);

  return (
    <Container>
      <DesktopHeader>
        <div className="apresentation">
          <span>Hello, I'm</span>
          <h1>Ricardo Adame Sant'Ana</h1>
          <h2>Front-end Developer.</h2>
        </div>
        {windowWidth >= 1024 && (
          <nav>
            <ul>
              <li>
                <a href="#about">
                  <span
                    className={`underline ${
                      activeSection === "about" ? "active" : ""
                    }`}
                  >
                    About
                  </span>
                </a>
              </li>
              <li>
                <a href="#projects">
                  <span
                    className={`underline ${
                      activeSection === "projects" ? "active" : ""
                    }`}
                  >
                    Projects
                  </span>
                </a>
              </li>
              <li>
                <a href="#contact">
                  <span
                    className={`underline ${
                      activeSection === "contact" ? "active" : ""
                    }`}
                  >
                    Contact
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        )}

        <div className="links">
          <ul>
            <li>
              {" "}
              <a href="">
                {" "}
                <FaGithub />{" "}
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="">
                {" "}
                <FaLinkedin />{" "}
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="">
                {" "}
                <FaRegEnvelope />
              </a>{" "}
            </li>
          </ul>
        </div>
      </DesktopHeader>
    </Container>
  );
}
