import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-item1',
  templateUrl: './product-item1.component.html',
  styleUrls: ['./product-item1.component.css']
})
export class ProductItem1Component implements OnInit {
  @Input()
  product1: Product;

  @Output()
  OnSelected: EventEmitter<Product> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  select() {
    this.OnSelected.emit(this.product1);
  }

}
