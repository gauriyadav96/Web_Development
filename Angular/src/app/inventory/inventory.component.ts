import { Component, OnInit } from '@angular/core';
import { EmpService } from '../services/employeeService.component';
import { inventoryDto } from './inventoryDto.model';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  stock: inventoryDto[] = [];

  constructor(private empService: EmpService) { }

  ngOnInit() {

    this.empService.inventory().subscribe((data) => {
      this.stock = data;
    },
      err => {
        alert("Product not found !");
      },
      () => { console.log('Method Executed') }
    );

  }

}
