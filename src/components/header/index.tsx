import { Container, DesktopHeader } from "./styles";
import { FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa";

export function Header() {  
    return(
        <Container> 
            <DesktopHeader>
                <div className="apresentation">
                    <span>Hello, I'm</span>
                    <h1>Ricardo Adame Sant'Ana</h1>
                    <h2>Front-end Developer.</h2>
                </div>
                <nav>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <div className="links">
                    <ul>
                        <li> <a href=""> <FaGithub /> </a> </li>
                        <li> <a href=""> <FaLinkedin /> </a> </li>
                        <li> <a href=""> <FaRegEnvelope /></a> </li>
                    </ul>    
                </div>
            </DesktopHeader>   
        </Container>
    )
}