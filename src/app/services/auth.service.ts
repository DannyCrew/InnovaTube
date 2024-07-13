import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'YOUR_API_ENDPOINT_HERE'; // Reemplaza con tu endpoint de API

  constructor(private http: HttpClient) {}

  login(credentials: { username: string; password: string }): Observable<boolean> {
    return this.http.post<any>(this.loginUrl, credentials).pipe(
      map(response => {
        // Guarda los datos del usuario y el token si es necesario
        return true;
      }),
      catchError(error => {
        return of(false);
      })
    );
  }
}
