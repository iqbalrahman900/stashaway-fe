
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export interface Deposit {
  id: number;
  amount: number;
  referenceCode: string;
  timestamp: Date;
}

interface ApiResponse<T> {
  success: boolean;
  deposits: T;
}

@Injectable({
  providedIn: 'root'
})
export class DepositService {
  private apiUrl = 'http://localhost:3000/deposits';

  constructor(private http: HttpClient) { }

  getDeposits(): Observable<Deposit[]> {
    return this.http.get<ApiResponse<Deposit[]>>(`${this.apiUrl}`).pipe(
      map((response: ApiResponse<Deposit[]>) => response.deposits)
    );
  }


  createDeposit(deposit: Partial<Deposit>): Observable<Deposit> {
    return this.http.post<Deposit>(`${this.apiUrl}/create-deposit`, deposit);
  }
}