import { Container } from "./styles";

import { Header } from "../../components/header";
import { About } from "../../components/about";
import { Contact } from "../../components/contact";
import { Projects } from "../../components/projects";

export function Home() {
    return(
        <Container>
            <Header />
            <main>
                <About />
                <Projects />
                <Contact />
            </main>
        </Container>
    )
}