import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';

@NgModule({
  declarations: [
  //bir module'ün bir componenti kullanabilmesi için o modulde declerasyonlarda componentlerin tanımlı olması lazım.
  //bunlarıda burada kullanabilmek için yukarıda import etmek gerekli.
  //kendi yazdığımız module'leri buraya ekliyoruz.
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NaviComponent
  ],
  imports: [
    //kendi yazmadığımız dışarıdan aldığımızı module'leri buraya ekliyoruz.
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
