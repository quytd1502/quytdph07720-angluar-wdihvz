import { Component, OnInit } from '@angular/core';
import{ProductService} from '../product.service';
import {Product} from '../Product'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService) {
    
   }

  ngOnInit(): void {
    this.getProducts();
  }

  products : Product[];

  selected : Product;

  // changeStatus(){
  //   // this.product.status = false;
  // }
  // changeTitle(e){
  // //  this.product = e.target.value;
  // }

  removeItem(id){
    this.products = this.products.filter(product => product.id != id);
  }

  getProducts(){
    this.products = this.productService.getProducts();
  }

  showDetail(product){
    this.selected = product;
  }
}