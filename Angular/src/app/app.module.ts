import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app.routing';
import { LoginService} from './services/login.service';
import { AuthDashService} from './services/authDashboard.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';
import { PricingComponent } from './pricing/pricing.component';
import { InventoryComponent } from './inventory/inventory.component';
import { EmpService } from './services/employeeService.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    EmployeeComponent,
    PricingComponent,
    InventoryComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule,HttpClientModule],
  providers: [LoginService, AuthDashService, EmpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
