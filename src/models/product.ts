export interface IProductItem {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: IProductRating;
  title: string;
}
export interface IProductRating {
  rate: number;
  count: number;
}
