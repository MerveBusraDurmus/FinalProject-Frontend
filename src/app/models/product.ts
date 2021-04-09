export interface Product{
    productId:number;
    categoryId:number;
    productName:string;
    unitsInStock:number;
    unitPrice:number;
    //modelimizde nelerin olması gerektiğini yazıyoruz.API'den gelecek veriyi karşılamak için gereklidir.
}