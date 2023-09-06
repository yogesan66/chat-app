import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent implements OnInit{
  ngOnInit(): void {
    this.contactNames = this.data.map((element:any)=>element.name)
    this.contactsWithBadge = this.contactList.map((item:any) => ({ name: item, badge: item.charAt(0).toUpperCase() }));
    console.log(this.contactNames,'names')
    console.log(this.contactsWithBadge ,'badge')
  }
  selectedValue:string ='';
  filteredData!:any;
  query:string = '';
  data =[{name:'ram'},{name:'ramesh'},{name:'vignesh'}];
  contactNames:any;
  contactList:any;
  contactsWithBadge:any;
  filterData(event: any) {
    this.query = event.query.toLowerCase();
    this.filteredData = this.contactNames.filter((item:any) => item.toLowerCase().includes(this.query))
    debugger
    if(this.contactNames.includes(this.query) && !this.contactList.includes(this.query)){
      this.contactList.push(this.query)
    }
  }
}
//filter(item => item.toLowerCase().includes(this.query));
