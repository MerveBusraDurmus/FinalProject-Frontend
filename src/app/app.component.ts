import { Component } from '@angular/core'; //c# kısmında yaptığımız using işlemi gibi.

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], //array şeklinde olmasının nedeni birden fazla css dosyası olmasıdır.
})
export class AppComponent {
  title: string = 'northwind'; //javascriptte veri tipi vermemize gerek yok. Karşısında ne veriyorsak veri tipi odur.
  //typescriptte yukarıdaki gibi veri tipini verip tip güvenli hale getirebiliriz.çift veya tek tırnak kullanmamız farketmez.
  user: string = 'Engin Demiroğ';
  product1: any = {
    productId: 1,
    productName: 'Bardak',
    categoryId: 1,
    unitPrice: 5,
  }; //any varsa her veri tipi olabilir demektir.
  product2: any = {
    productId: 2,
    productName: 'Laptop',
    categoryId: 1,
    unitPrice: 5,
  };
  product3: any = {
    productId: 3,
    productName: 'Mouse',
    categoryId: 1,
    unitPrice: 5,
  };
  product4: any = {
    productId: 4,
    productName: 'Keyboard',
    categoryId: 1,
    unitPrice: 5,
  };
  product5: any = {
    productId: 5,
    productName: 'Camera',
    categoryId: 1,
    unitPrice: 5,
  };

  products = [
    this.product1,
    this.product2,
    this.product3,
    this.product4,
    this.product5,
  ];
}
