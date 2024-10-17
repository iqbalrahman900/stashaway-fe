
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export interface Portfolio {
  id: number;
  name: string;
  balance: number;
}

interface ApiResponse<T> {
  success: boolean;
  portfolios: T;
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private apiUrl = 'http://localhost:3000/deposits'

  constructor(private http: HttpClient) { }

  getPortfolios(): Observable<Portfolio[]> {
    return this.http.get<ApiResponse<Portfolio[]>>(`${this.apiUrl}/portfolios`).pipe(
      map((response: ApiResponse<Portfolio[]>) => response.portfolios || [])
    );
  }

  createPortfolio(portfolio: Partial<Portfolio>): Observable<Portfolio> {
    return this.http.post<Portfolio>(`${this.apiUrl}/create-portfolio`, portfolio);
  }
}