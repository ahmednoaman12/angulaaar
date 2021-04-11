import { IProduct } from './../../models/interfaces/iproduct';
import { ICategory } from './../../models/interfaces/icategory';
import { Product } from './../../models/classes/product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  StoreName: string;
  prod: Product[];
  prd: ICategory[];
  inter: IProduct[];
  testBind: string;
  constructor(private _prdServ: ProductService) {
    this.testBind = 'Ahmed Noaman';
    this.inter = this._prdServ.getAllProducts();

    // this.prd = [
    //   // {StoreName : 'car4' ,StoreLogo : 'https://dummyimage.com/250x100/c4c2c4/ff006f&text=profile+pic' , ProductList :[id:1,'lenovo',5,3000,'https://dummyimage.com/250x100/c4c2c4/ff006f&text=profile+pic'],CategoryList:[1,'laptops'],IsPurshased:true}
    //   { id: 2, name: 'category 1' },
    // ];
    // this.inter = [
    //   {
    //     id: 4,
    //     name: 'dell',
    //     price: 5000,
    //     img: 'https://dummyimage.com/250x70/c4c2c4/ff006f&text=profile+pic',
    //     qantity: 6,
    //   },
    //   {
    //     id: 5,
    //     name: 'hd1',
    //     price: 5000,
    //     img: 'https://dummyimage.com/250x70/c4c2c4/ff006f&text=profile+pic',
    //     qantity: 1,
    //   },
    //   {
    //     id: 6,
    //     name: 'hd2',
    //     price: 4000,
    //     img: 'https://dummyimage.com/250x70/c4c2c4/ff006f&text=profile+pic',
    //     qantity: 0,
    //   },
    //   {
    //     id: 8,
    //     name: 'lenovo 2',
    //     price: 6000,
    //     img: 'https://dummyimage.com/250x70/c4c2c4/ff006f&text=profile+pic',
    //     qantity: 6,
    //   },
    //   {
    //     id: 9,
    //     name: 'lenovo1',
    //     price: 8000,
    //     img: 'https://dummyimage.com/250x70/c4c2c4/ff006f&text=profile+pic',
    //     qantity: 6,
    //   },
    //   {
    //     id: 1,
    //     name: 'dell3',
    //     price: 9000,
    //     img: 'https://dummyimage.com/250x70/c4c2c4/ff006f&text=profile+pic',
    //     qantity: 6,
    //   },
    // ];
  }

  ngOnInit(): void {}
}
