import { FoodExplorerProps, ImagesProps } from "./foodExplorer"

const images: ImagesProps = {
  image_src: ["src/assets/MovieSelectorImages/filmSelector_gif.gif"],
  image_description: ["Functionality"]
};

export const movieTipObject:FoodExplorerProps = {
  title: "Movie Tips",
  description: "This is a page that will present a random movie, doing a search on the 'themoviedb' API. The application was made with React and TypeScript, and the API connection with Axios.",
  admin: false,
  online: false,
  repository: "https://github.com/kdimsan/FilmSelector",
  image: images
};