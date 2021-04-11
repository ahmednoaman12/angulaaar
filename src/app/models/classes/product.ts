import { ICategory } from './../interfaces/icategory';
import { IProduct } from './../interfaces/iproduct';
export class Product {
  constructor(
    public StoreName: string,
    public StoreLogo: string,
    public ProductList: IProduct[],
    public CategoryList: ICategory[],
    public IsPurshased: boolean
  ) {}
}
