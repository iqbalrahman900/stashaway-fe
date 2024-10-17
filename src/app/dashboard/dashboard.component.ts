import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { PortfolioService, Portfolio } from '../services/portfolio.service';
import { DepositPlanService, DepositPlan } from '../services/deposit-plan.service';
import { DepositService, Deposit } from '../services/deposit.service';
import { Chart, registerables } from 'chart.js';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PortfolioModalComponent } from '../portfolio-modal/portfolio-modal.component';

Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  portfolios: Portfolio[] = [];
  activePlans: DepositPlan[] = [];
  deposits: Deposit[] = [];
  totalBalance: number = 0;

  chart: any;
  @ViewChild('portfolioChart', { static: true }) portfolioChart!: ElementRef;

  constructor(
    private modalService: NgbModal,
    private portfolioService: PortfolioService,
    private depositPlanService: DepositPlanService,
    private depositService: DepositService
  ) {}

  ngOnInit(): void {
    this.loadDashboardData();
  }

  ngAfterViewInit(): void {
    if (this.portfolios.length) {
      this.createChart();
    }
  }

  loadDashboardData(): void {
    forkJoin({
      portfolios: this.portfolioService.getPortfolios(),
      activePlans: this.depositPlanService.getActivePlans(),
      deposits: this.depositService.getDeposits()
    }).subscribe({
      next: (result) => {
        this.portfolios = result.portfolios;
        this.activePlans = result.activePlans;
        this.deposits = result.deposits;
        this.totalBalance = this.calculateTotalBalance();
        this.updateChart();
      },
      error: (error) => {
        console.error('Error loading dashboard data:', error);
      }
    });
  }

  calculateTotalBalance(): number {
    return this.portfolios.reduce((sum, portfolio) => sum + portfolio.balance, 0);
  }

  createChart(): void {
    const labels = this.portfolios.map((p) => p.name);
    const data = this.portfolios.map((p) => p.balance);

    this.chart = new Chart(this.portfolioChart.nativeElement, {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [
          {
            data: data,
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          }
        }
      }
    });
  }

  updateChart(): void {
    if (this.chart) {
      this.chart.data.labels = this.portfolios.map((p) => p.name);
      this.chart.data.datasets[0].data = this.portfolios.map((p) => p.balance);
      this.chart.update();
    } else {
      this.createChart();
    }
  }

  createPortfolio() {
    console.log('Current Portfolios:', this.portfolios); // Check the portfolios before opening the modal
    const modalRef = this.modalService.open(PortfolioModalComponent);
    modalRef.componentInstance.portfolioCreated.subscribe((newPortfolio: Portfolio) => {
      console.log('Portfolio Created from Modal:', newPortfolio);
      this.portfolios.push(newPortfolio);
      this.updateChart();
    });
  }
  
  
}
