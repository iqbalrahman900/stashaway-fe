import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';
import { DepositPlanListComponent } from './deposit-plan-list/deposit-plan-list.component';
import { CreateDepositPlanComponent } from './create-deposit-plan/create-deposit-plan.component';
import { DepositListComponent } from './deposit-list/deposit-list.component';
import { CreateDepositComponent } from './create-deposit/create-deposit.component';
import { AllocationResultComponent } from './allocation-result/allocation-result.component';
import { PortfolioModalComponent } from './portfolio-modal/portfolio-modal.component';
import { FormsModule } from '@angular/forms'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PortfolioListComponent,
    DepositPlanListComponent,
    CreateDepositPlanComponent,
    DepositListComponent,
    CreateDepositComponent,
    AllocationResultComponent,
    PortfolioModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }