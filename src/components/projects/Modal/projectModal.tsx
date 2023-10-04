import { Container, ModalContent, ModalText, ModalImage } from "./styles";
import  { FaGithub }  from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";

import { FoodExplorerProps } from "../../../docs/foodExplorer";
import { ImagesHandler } from "../../imagesHandler";

export interface ModalProps {
  isOpen: boolean;
  setModalClose: React.MouseEventHandler;
  data: FoodExplorerProps;
}

export default function ProjectModal({ isOpen, setModalClose, data }: ModalProps) {

  if(isOpen) {
    return (
      <Container>
        <ModalContent>
          <div>
            <ModalImage>
                <ImagesHandler data={data}/>
            </ModalImage>
            <ModalText>
              <h2>{ data.title }</h2>
              <p>
                { data.description }
              </p>
                {
                  data.online &&
                    <p>
                        This webpage is online <a href={ data.link }> here</a>
                    </p>
                  }
                  {
                    !data.online &&
                    <p>
                      This page is not available online, but fell free to git clone it. All you need to do 
                      after is run the commands "npm install" and "npm run dev".
                    </p>
                  }
                  {
                    data.admin && 
                    <span>
                    Fell free to create an account using
                    a fake email address or using admin account, 
                    email: admin@email.com / password: 123 . 
                    If the application does not show any 
                    product, please wait and refresh the page.
                    </span>
                  }
              
              <span><FaGithub /><a href={ data.repository }>Repository</a></span>
              
            </ModalText>
          </div>
          <button onClick={setModalClose}><AiOutlineCloseCircle /></button>
        </ModalContent>
      </Container>
    )
  }

  return null;
}
