import { Injectable, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';
import {registerDto} from '../register/registerDto.model';
import {ServerResponse} from '../server/serverResponse';
import { inventoryDto } from '../inventory/inventoryDto.model';

@Injectable()

export class EmpService {
  url: string;
  emp:registerDto;
  empArray:registerDto[];
  stock:inventoryDto;
  stockArray:inventoryDto[];

  constructor(private nativeHttp: HttpClient) {

  }

  //after calling the server side, the response is taken in observable and sent over as a response
  saveEmp(emp: registerDto): Observable<ServerResponse> {
    //adding new employees to the portal
    this.url="http://localhost:3000/saveEmpData";
     //return this.nativeHttp.post(this.url,emp).map(res => res.json());
     return this.nativeHttp.post<ServerResponse>(this.url,emp);
  }

    //listing all available employees
  emps():Observable<registerDto[]> {
    this.url="http://localhost:3000/saveEmpData";
     //return this.nativeHttp.get(this.url).map(res => res.json());
     return this.nativeHttp.get<registerDto[]>(this.url);
  }

  inventory():Observable<inventoryDto[]>{
    this.url="http://localhost:3000/inventory";
    return this.nativeHttp.get<inventoryDto[]>(this.url);

  }

}
