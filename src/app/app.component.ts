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
  
}
