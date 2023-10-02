import { useState, useEffect } from "react";

import { Container, MobileHeader, DesktopHeader } from "./styles";

import { FiMenu } from "react-icons/fi";
import { VscChromeClose } from "react-icons/vsc";

export function Header() {
    const [desktopSize, setDesktopSize] = useState(false);
    const [sidebarStatus, setSidebarStatus] = useState(false);
    const [sidebarOpener, setSidebarOpener] = useState("");

    const handleSidebar = () => {
        setSidebarStatus(!sidebarStatus);
        if(sidebarStatus) {
            setSidebarOpener("sidebar-open");
        }
    };

    useEffect(() => {
        const handleWindowSize = () => {
            if(window.innerWidth >= 1024) { 
                setDesktopSize(true);
            } else {
                setDesktopSize(false);
            }
        }
        handleWindowSize();

        window.addEventListener("resize", handleWindowSize);

    },[]);
    
    return(
        <Container>

            {!desktopSize &&
            <MobileHeader>
                <h1>Header</h1>
                <button onClick={ handleSidebar }>
                    <FiMenu />
                </button>
                {sidebarStatus &&
                    <div className={`sidebar ${sidebarOpener}`}
                    
                    >
                        <button onClick={ handleSidebar }>
                            <VscChromeClose />
                        </button>
                        <ul>
                            <li>About</li>
                            <li>Projects</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                }
            </MobileHeader>
            }
            
            {desktopSize && 
                <DesktopHeader>
                    <h1>Ricardo Adame Sant'Ana</h1>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </DesktopHeader>
            }
            
        </Container>
    )
}