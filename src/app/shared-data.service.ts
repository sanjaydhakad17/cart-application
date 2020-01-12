import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from  "rxjs";


@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  shareData = new Subject<any>();

  //shareDataObservable = this.shareData.asObservable();

  endPointUrl : string = "https://api.myjson.com/bins/qzuzi";
  shopListData: [];
  constructor(private httpclient: HttpClient) { }

  public getShoppingList()  {
    return this.httpclient.get(this.endPointUrl);
    // return  [
    //   {"id":9090,"name":"Item1","price":200,"discount":10,"category":"fiction","img_url":"http://lorempixel.com/500/600/technics/"},
    //   {"id":9091,"name":"Item2","price":250,"discount":15,"category":"literature","img_url":"http://lorempixel.com/500/600/technics/"},
    //   {"id":9092,"name":"Item3","price":320,"discount":5,"category":"literature","img_url":"http://lorempixel.com/500/600/technics/"},
    //   {"id":9093,"name":"Item4","price":290,"discount":0,"category":"thriller","img_url":"http://lorempixel.com/500/600/technics/"},
    //   {"id":9094,"name":"Item1","price":500,"discount":25,"category":"thriller","img_url":"http://lorempixel.com/500/600/technics/"},
    //   {"id":9095,"name":"Item2","price":150,"discount":5,"category":"literature","img_url":"http://lorempixel.com/500/600/technics/"},
    //   {"id":9096,"name":"Item3","price":700,"discount":22,"category":"literature","img_url":"http://lorempixel.com/500/600/technics/"},
    //   {"id":9097,"name":"Item4","price":350,"discount":18,"category":"fiction","img_url":"http://lorempixel.com/500/600/technics/"}]
    
  }

  setShopListData(res) {
    this.shopListData = res;
  }
  getShopListData() {
    return this.shopListData;
  }
  
}
