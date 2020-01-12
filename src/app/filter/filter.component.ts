import { Component, TemplateRef, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SharedDataService } from '../shared-data.service';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  public currentValue:any;
  public modalRef: BsModalRef;
  public shopData: any;
  public minValue: number = 100;
  public maxValue: number = 10000;
  public isFilterTrue: boolean = false;
  public options: Options = {
    floor: 100,
    ceil: 10000
  };

  constructor(private modalService: BsModalService, private shareDataService: SharedDataService) {} // {2}
  
  public openModal(template: TemplateRef<any>) {
    
    this.modalRef = this.modalService.show(
      template,
      {
        class: 'modal-sm modal-dialog-centered',
        backdrop: 'static'
      }
    );
   
  }

  ngOnInit() {
 
  }

  applyFilter(filterFlag) {
   
      this.shareDataService.getShoppingList().subscribe( response => {  
        this.shareDataService.setShopListData(response);
        this.shopData = this.shareDataService.getShopListData().filter( (el:any) => {
        return el.price >= this.minValue && el.price <= this.maxValue;
     });
 
        this.shareDataService.setShopListData(this.shopData);
        this.shareDataService.shareData.next(this.shopData); 
        if(filterFlag) {
          this.modalService.hide(1);
        }
        
     });
    
  }
}
