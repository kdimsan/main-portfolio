import { Container, ModalContent, ModalText, ModalImage } from "./styles";
import  { FaGithub }  from "react-icons/fa";

export interface ModalProps {
  isOpen: boolean;
  setModalClose: React.MouseEventHandler;
}

export default function FoodExplorerModal({ isOpen, setModalClose }: ModalProps) {

  if(isOpen) {
    return (
      <Container>
        <ModalContent>
          <div>
            <ModalImage>
              <img src="src/docs/FoodExplorerImages/foodexplorer-login.gif" alt="Project Image" />
              <img src="src/docs/FoodExplorerImages/foodexplorer-create.gif" alt="Project Image" />
              <img src="src/docs/FoodExplorerImages/foodexplorer-edit.gif" alt="Project Image" />
            </ModalImage>
            <ModalText>
              <h2>Food Explorer Project</h2>
              <p>
                Webpage created for the Rocketseat Discover course. This is the final project, wich the development
                of its own database, done with Knex.js, the back-end using Javascript, Express and SQLite. Frontend
                was developed with ReactJS and the connection to the API is done using Axios. The application features functionalities 
                such as user registration, user login, validation token, product registration, and displaying products stored in the database by category.
              </p>
              <span>
                This webpage is online <a href="https://ricardoadamefoodexplorer.netlify.app"> here</a>
              </span>
              <span>
                Fell free to create an account using
                a fake email address or using admin account, email: admin@email.com / password: 123 . 
                If the application does not show any common
                product, please wait and refresh the page.
              </span>
              <span><FaGithub /><a href="https://github.com/kdimsan/front-end-FoodExplorer">Repository</a></span>
              
            </ModalText>
            <button onClick={setModalClose}>Fechar</button>
          </div>
        </ModalContent>
      </Container>
    )
  }

  return null;
}
