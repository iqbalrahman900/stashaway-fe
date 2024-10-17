import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';
import { DepositPlanListComponent } from './deposit-plan-list/deposit-plan-list.component';
import { CreateDepositPlanComponent } from './create-deposit-plan/create-deposit-plan.component';
import { DepositListComponent } from './deposit-list/deposit-list.component';
import { CreateDepositComponent } from './create-deposit/create-deposit.component';
import { AllocationResultComponent } from './allocation-result/allocation-result.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'portfolios', component: PortfolioListComponent },
  { path: 'deposit-plans', component: DepositPlanListComponent },
  { path: 'create-deposit-plan', component: CreateDepositPlanComponent },
  { path: 'deposits', component: DepositListComponent },
  { path: 'create-deposit', component: CreateDepositComponent },
  { path: 'allocation-result', component: AllocationResultComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }