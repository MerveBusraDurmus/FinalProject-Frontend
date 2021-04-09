import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductResponseModel } from '../models/productResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl="https://localhost:44384/api/products/getall"

  constructor(private httpClient:HttpClient) { } //constructor'ın amacı productcomponenti bellekte oluşturmaktır.Yani instance'ını oluşturmaktır.yani newlemek.
  //httpclient kullanabilmek için injection yapılması gerekir.
  getProducts():Observable<ProductResponseModel>{  //observable yazmamızın sebebi subscribe olunabilmesidir. subscribe componentler tarafından yapılır.
    return this.httpClient.get<ProductResponseModel>(this.apiUrl) //gelen datayı productresponsemodel'e map edeceksin demek.Parse yapıyoruz. Datayı productResponseModel'e çeviriyoruz.
   
  }
  
}
