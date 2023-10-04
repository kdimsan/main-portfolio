export interface ImagesProps {
  image_src: string[];
  image_description: string[];
}

export interface FoodExplorerProps {
  title: string;
  description: string;
  online:boolean;
  link?: string;
  repository: string;
  admin: boolean;
  image: ImagesProps;
}

export const foodexplorer_images: ImagesProps = {
  image_src: 
  [
    "src/assets/FoodExplorerImages/foodexplorer-login.gif",
    "src/assets/FoodExplorerImages/foodexplorer-create.gif",
    "src/assets/FoodExplorerImages/foodexplorer-edit.gif"
  ],
  image_description: ["Login", "Create product", "Edit product"]
};

export const foodExplorerObject: FoodExplorerProps = {
  title: "Food Explorer",
  description: "Webpage created for the Rocketseat Discover course. This is the final project, wich the development of its own database, done with Knex.js, the back-end using Javascript, Express and SQLite. Frontend was developed with ReactJS and the connection to the API is done using Axios. The application features functionalities such as user registration, user login, validation token, product registration, and displaying products stored in the database by category.",
  online: true,
  link: "https://ricardoadamefoodexplorer.netlify.app",
  repository: "https://github.com/kdimsan/front-end-FoodExplorer",
  admin: true,
  image:foodexplorer_images
};