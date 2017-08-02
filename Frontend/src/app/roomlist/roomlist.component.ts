import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roomlist',
  templateUrl: './roomlist.component.html',
  styleUrls: ['./roomlist.component.css']
})
export class RoomlistComponent implements OnInit {

  public roomList: Object[] = [
    {'Unit_ID' : '1', 'Unit_Name' : 'Mawar', 'Unit_Area' : '75', 'Availability' : '0', 'Unit_Price' : '750', 'Unit_img' : 'path'},
    {'Unit_ID' : '2', 'Unit_Name' : 'Anggrek', 'Unit_Area' : '50', 'Availability' : '1', 'Unit_Price' : '500', 'Unit_img' : 'path'},
    {'Unit_ID' : '3', 'Unit_Name' : 'Kemenyan', 'Unit_Area' : '55', 'Availability' : '0', 'Unit_Price' : '550', 'Unit_img' : 'path'},
    {'Unit_ID' : '4', 'Unit_Name' : 'Semerbak', 'Unit_Area' : '65', 'Availability' : '0', 'Unit_Price' : '650', 'Unit_img' : 'path'},
    {'Unit_ID' : '5', 'Unit_Name' : 'Sewangi', 'Unit_Area' : '70', 'Availability' : '1', 'Unit_Price' : '700', 'Unit_img' : 'path'},
  ];

  bookUnit() {
    // Fungsi button
  }

  constructor() { }

  ngOnInit() {
  }

}
