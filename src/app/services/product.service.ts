import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/models/interfaces/iproduct';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private inter: IProduct[];
  constructor() {
    this.inter = [
      {
        id: 4,
        name: 'samsung',
        price: 5000,
        img: 'https://dummyimage.com/250x70/c4c2c4/ff006f&text=profile+pic',
        qantity: 6,
        categoryID: 2,
      },
      {
        id: 5,
        name: 'hd1',
        price: 5000,
        img: 'https://dummyimage.com/250x70/c4c2c4/ff006f&text=profile+pic',
        qantity: 1,
        categoryID: 3,
      },
      {
        id: 6,
        name: 'oppo',
        price: 4000,
        img: 'https://dummyimage.com/250x70/c4c2c4/ff006f&text=profile+pic',
        qantity: 0,
        categoryID: 2,
      },
      {
        id: 8,
        name: 'lenovo 2',
        price: 6000,
        img: 'https://dummyimage.com/250x70/c4c2c4/ff006f&text=profile+pic',
        qantity: 6,
        categoryID: 3,
      },
      {
        id: 9,
        name: 'lenovo1',
        price: 8000,
        img: 'https://dummyimage.com/250x70/c4c2c4/ff006f&text=profile+pic',
        qantity: 6,
        categoryID: 1,
      },
      {
        id: 1,
        name: 'dell3',
        price: 9000,
        img: 'https://dummyimage.com/250x70/c4c2c4/ff006f&text=profile+pic',
        qantity: 6,
        categoryID: 3,
      },
    ];
  }
  getAllProducts(): IProduct[] {
    return this.inter;
  }
  getProductsByCatID(selectedCatID): IProduct[] {
    return this.inter.filter((data) => {
      return data.categoryID == selectedCatID;
    });
  }
  getProductByID(pid): IProduct {
    return this.inter.find((data) => data.id == pid);
  }
}
