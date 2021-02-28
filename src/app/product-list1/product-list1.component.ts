import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-list1',
  templateUrl: './product-list1.component.html',
  styleUrls: ['./product-list1.component.css']
})
export class ProductList1Component implements OnInit {
  products1: Product[];

  constructor() { 
    this.products1 = [];
    this.products1.push({
      name: 'ส้มโอ',
      price: 990
    });
    this.products1.push({
      name: 'แตงโม',
      price: 1000
    });
    this.products1.push({
      name: 'มะพร้าวน้ำหอม',
      price: 500
    });
  }

  ngOnInit(): void {
  }

  selectedProduct(product1: Product) {
    alert(`Product ${product1.name} selected`)
  }

}
