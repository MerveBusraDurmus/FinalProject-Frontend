import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl="https://localhost:44384/api/products/getall"

  constructor(private httpClient:HttpClient) { } //constructor'ın amacı productcomponenti bellekte oluşturmaktır.Yani instance'ını oluşturmaktır.yani newlemek.
  //httpclient kullanabilmek için injection yapılması gerekir.
  getProducts():Observable<ListResponseModel<Product>>{  //observable yazmamızın sebebi subscribe olunabilmesidir.Subscribe olunabilir bir ProductResponseModel dönecek.subscribe componentler tarafından yapılır.
    return this.httpClient.get<ListResponseModel<Product>>(this.apiUrl) //gelen datayı productresponsemodel'e map edeceksin demek.Parse yapıyoruz. Datayı productResponseModel'e çeviriyoruz.
   
  }
  
}
