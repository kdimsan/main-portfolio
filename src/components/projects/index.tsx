import { useState } from "react";
import FoodExplorerModal from "./FoodExplorer-Project/fooxplorerModal";
import { Container, Content, ProjectForm } from "./styles";

export function Projects() {

    const [modalStatus, setModalStatus] = useState(false);

    const handleModal = () => {
        setModalStatus(!modalStatus);
    };
    
    return (
        <Container id="projects">
            <h2>Projects</h2>
            <Content>
                <ul>
                    <li>
                        <ProjectForm onClick={ handleModal }>
                            <img src="src/docs/FoodExplorerImages/foodexplorer-login.gif" alt="Project preview" />
                            <span>Project FoodExplorer</span>
                        </ProjectForm>
                        <FoodExplorerModal isOpen={ modalStatus }/>
                    </li>
                    <li>
                        <ProjectForm>
                            <img src="src/docs/FoodExplorerImages/foodexplorer-login.gif" alt="Project preview" />
                            <span>Project FoodExplorer</span>
                        </ProjectForm>
                    </li>
                    <li>Project #3</li>
                </ul>
            </Content>
        </Container>
    )
}