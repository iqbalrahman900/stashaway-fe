import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PortfolioService } from '../services/portfolio.service';
import { Portfolio } from '../services/portfolio.service';

@Component({
  selector: 'app-portfolio-modal',
  templateUrl: './portfolio-modal.component.html',
  styleUrls: ['./portfolio-modal.component.scss']
})
export class PortfolioModalComponent {
  portfolioForm: FormGroup;

  @Output() portfolioCreated: EventEmitter<Portfolio> = new EventEmitter<Portfolio>();

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private portfolioService: PortfolioService
  ) {
    this.portfolioForm = this.formBuilder.group({
      name: ['', Validators.required], // Ensure required validator is added here
      balance: [{ value: 0, disabled: true }] // Keep the balance control disabled
    });
  }

  submitForm(): void {
    if (this.portfolioForm.valid) {
      const newPortfolio = this.portfolioForm.value;
      this.portfolioService.createPortfolio(newPortfolio).subscribe({
        next: (portfolio) => {
          this.portfolioCreated.emit(portfolio); // Emit the new portfolio
          this.activeModal.close(); // Close the modal
        },
        error: (error) => {
          console.error('Error creating portfolio:', error);
        }
      });
    } else {
      this.portfolioForm.markAllAsTouched(); // Show validation messages
    }
  }
  

  close(): void {
    this.activeModal.dismiss('Modal Closed');
  }
}
