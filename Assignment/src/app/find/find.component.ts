import { Component, OnInit } from '@angular/core';
import { RestServiceService } from '../rest-service.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

 cities=[];
 citySelected='';
 lists:any=[];
 totalRecords:Number;
 page:Number=1;
 itemsPerPage=20;
 searchText;


  constructor(private restService :RestServiceService) { }

  ngOnInit(): void {
    this.cities=['select city','HYDERABAD','BANGALORE','MUMBAI','PUNE','CHENNAI'];
   this.citySelected='select city';
  }
  onCitySelected(value){
    this.getBanks(value);
  }

  getBanks(value){
    this.restService.get(value).subscribe((response)=>{
      console.log(response);
      this.lists=response;
    })
  }
 
}
