import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public shopData: any;
  isSearchEnable: boolean = false;
  constructor(private shareDataService: SharedDataService) { }

  ngOnInit() {
  }

  searchItem(searchTerm) {

    if (searchTerm.value != undefined && searchTerm.value != '') {
      this.shopData = this.shareDataService.getShopListData().filter(
        (item: any) => item.category.search(new RegExp(searchTerm.value, 'i')) > -1);
      this.shareDataService.shareData.next(this.shopData);

    } else {
      this.shopData = this.shareDataService.getShopListData();
      this.shareDataService.shareData.next(this.shopData);
    }

  }

  toggleSearch() {
    if (!this.isSearchEnable) {
      this.isSearchEnable = true;
    } else {
      this.isSearchEnable = false;
    }
  }
  
}
