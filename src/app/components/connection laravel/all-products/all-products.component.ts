import { Component, OnInit } from '@angular/core';
import { IProd } from 'src/app/models/interfaces/iprod';
import { ProdService } from 'src/app/services/Api/prod.service';


@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  products: IProd[];
  constructor(private _ApiPrdServ: ProdService) { }

  ngOnInit(): void {
    this._ApiPrdServ.getAllProducts().subscribe((data) => {
      // console.log(data);
      this.products = data;
      // console.log(this.products);

    })
  }

}
