import {Article} from "./Article";
import {Comment} from "./Comment";

export interface User {
  idUser: number,
  firstname: string,
  lastname: string,
  email: string,
  articles: Article[],
  comments: Comment[]
}
