import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product.service";
import {Product} from "../product";

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {

  constructor(private productService: ProductService) { }


  ngOnInit(): void {
    this.getProducts();
  }
  products : Product[];

  getProducts(){
    this.products = this.productService.getProducts();
  }
  removeItem(id){
    this.products = this.productService.removeProduct(id);
  }

}