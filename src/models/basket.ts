export interface IBasketItem {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: IBasketRating;
  title: string;
  quantity: number;
}
export interface IBasketRating {
  rate: number;
  count: number;
}
