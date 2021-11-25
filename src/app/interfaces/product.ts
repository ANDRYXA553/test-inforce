import {IComment} from "./Comment";

export interface Product {
  id: number
  imageUrl: string,
  name: string,
  count: number,
  size: {
    width: string,
    height: string
  },
  weight: string,
  comments:  IComment[]
}
