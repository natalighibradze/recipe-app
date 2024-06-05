import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PexelsService {
  private apiKey = 'oOVrKGXNxLLnmqLvxVfOWKMr7n8jii0uYrbt4hoXPJCNq82KHUxYbLI6';
  private apiUrl = 'https://api.pexels.com/v1/search';

  constructor(private http: HttpClient) { }

  getFoodImages(): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', this.apiKey);
    const params = { query: 'food', per_page: '10' };
    return this.http.get(this.apiUrl, { headers, params });
  }
}
