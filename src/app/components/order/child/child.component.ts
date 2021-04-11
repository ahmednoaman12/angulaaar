import { Product } from './../../../models/classes/product';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/app/models/interfaces/iproduct';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit, OnChanges {
  inter: IProduct[];

  @Input() selectedCatID: number;
  @Output() TotalPriceChangedEvent: EventEmitter<number>;
  total: number;

  constructor(private _prdServ: ProductService) {
    this.TotalPriceChangedEvent = new EventEmitter<number>();
    this.total = 0;
    this.inter = this._prdServ.getAllProducts();

  }
  ngOnChanges(): void {
    console.log(`ngOnChanges  ${this.selectedCatID}`);
    // console.log(this.getProductsByCatID());
  }
  ngOnInit(): void {}

  getProductsByCatID(): IProduct[] {
    return this._prdServ.getProductsByCatID(this.selectedCatID);
  }

  TotalPrice(price, count) {
    this.total += price * count;
    this.TotalPriceChangedEvent.emit(this.total);
    console.log(this.total);
  }
  // More(id) {
  //   this._router.navigate(['/Product', id])
  // }
}
