import {data} from './mock'
import {Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class ProductService{
    product = data;
    constructor(){}

    getProducts(){
        return this.product;
    }
      removeProduct(id){
    return this.product.filter(product => product.id != id);
    }

}

