import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface AllocationResult {
  [portfolioName: string]: number;
}

@Injectable({
  providedIn: 'root'
})
export class AllocationService {
  private apiUrl = 'http://localhost:3000/deposits';

  constructor(private http: HttpClient) { }

  allocateDeposits(deposits: { amount: number; referenceCode: string }[]): Observable<AllocationResult> {
    return this.http.post<AllocationResult>(`${this.apiUrl}/allocate`, { deposits });
  }

  rollbackDeposit(referenceCode: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/rollback/${referenceCode}`, {});
  }
}