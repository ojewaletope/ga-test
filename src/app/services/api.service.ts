import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getWeatherDetails(): Observable<any> {
    return this.http
      .get<any>(
        `${environment.apiUrl}/find?lat=6.60&lon=3.35&cnt=3&units=metric&appid=${environment.apiKey}`
      )
      .pipe(
        tap((data) => console.log(data.list)),
        map((res) => {
          return res.list;
        })
      );
  }
}
