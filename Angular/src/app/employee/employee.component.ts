import { Component, OnInit } from '@angular/core';
import { registerDto } from '../register/registerDto.model';
import { EmpService } from '../services/employeeService.component';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  emps: registerDto[] = [];

  constructor(private empService: EmpService) { }


  ngOnInit() {

    this.empService.emps().subscribe((data) => {
      this.emps = data;
    },
      err => {
        alert("Employee not found !");
      },
      () => { console.log('Method Executed') }
    );
  }

  }


