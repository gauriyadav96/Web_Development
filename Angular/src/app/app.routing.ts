
import { NgModule } from '@angular/core';
import { Routes, RouterModule,CanActivate } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthDashService } from './services/authDashboard.service';
import { EmployeeComponent } from './employee/employee.component';
import { PricingComponent } from './pricing/pricing.component';
import { InventoryComponent } from './inventory/inventory.component';
import { RejectComponent } from './reject/reject.component';



const routes: Routes = [
    
    { path:'',component:HomeComponent },
    { path:'login',component:LoginComponent },
    { path:'register',component:RegisterComponent },
    { path:'dashboard', component:DashboardComponent, canActivate: [AuthDashService]},
    {path:'*', component:HomeComponent},
    { path:'employee', component:EmployeeComponent },
    { path:'pricing', component:PricingComponent },
    { path:'inventory', component:InventoryComponent },
    { path:'reject', component:RejectComponent }
    
 ];
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule { }


