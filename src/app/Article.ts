import {User} from "./User";
import {Rate} from "./Rate";
import {Comment} from "./Comment";

export interface Article {
  idArticle: number,
  title: string,
  text?: string,
  creationTime?: string,
  author?: User,
  comments?: Comment[],
  articleRates?: Rate[]
}
