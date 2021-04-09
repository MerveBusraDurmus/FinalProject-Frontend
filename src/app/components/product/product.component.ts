import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  products:Product[] = [];
  dataLoaded = false;
  

  constructor(private productService:ProductService) { } //servisi kullanabilmek için servisi enjekte et.

  ngOnInit(): void {  //yukarıda productcomponent OnInit'ten implement ediliyor ve component ilk açıldığında çalışacak olan kodları buraya yazıyoruz.
  this.getProducts();
}

  getProducts(){
    this.productService.getProducts().subscribe(response=>{  //asenkron çalışır.
      this.products=response.data  //gelen cevap products'a eşittir.
      this.dataLoaded=true;
    })
  }
} 
