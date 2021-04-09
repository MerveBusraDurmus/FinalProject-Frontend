import { Product } from "./product";
import { ResponseModel } from "./responseModel";

export interface ProductResponseModel extends ResponseModel{ //bana gelecek olan datayı karşılayacak bir model oluşturuyoruz.
    data:Product[]  //geri dönen veriyi olduğu gibi yazmamız gerekli.  
}