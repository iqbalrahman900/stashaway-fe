import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export interface DepositPlan {
  id: number;
  type: 'one-time' | 'monthly';
  executionDate: Date | null;
  isActive: boolean;
  allocations: any[]; // You might want to define a more specific type for allocations
}

interface ApiResponse<T> {
  success: boolean;
  plans: T;
}

@Injectable({
  providedIn: 'root'
})
export class DepositPlanService {
  private apiUrl = 'http://localhost:3000/deposits';

  constructor(private http: HttpClient) { }

  getActivePlans(): Observable<DepositPlan[]> {
    return this.http.get<ApiResponse<DepositPlan[]>>(`${this.apiUrl}/active-plans`).pipe(
      map((response: ApiResponse<DepositPlan[]>) => response.plans)
    );
  }
}