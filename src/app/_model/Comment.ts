import {User} from "./User";
import {Article} from "./Article";
import {Rate} from "./Rate";

export interface Comment {
  idComment: number,
  text?: string,
  creationTime?: string,
  author?: User,
  article?: Article,
  commentRates?: Rate[]
}
