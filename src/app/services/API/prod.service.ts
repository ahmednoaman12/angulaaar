import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IProd } from 'src/app/models/interfaces/iprod';



@Injectable({
  providedIn: 'root'
})
export class ProdService {
  constructor(private _http: HttpClient) { }

  getAllProducts(): Observable<IProd[]> {
    return this._http.get<IProd[]>(`${environment.ApiUrl}/products`);
  }

  getProductByID(id): Observable<IProd> {
    return this._http.get<IProd>(`${environment.ApiUrl}/product/${id}`)
  }

  insertProduct(prd: IProd): Observable<IProd> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': ' */*'
        // ,'Authorization': 'my-auth-token'
      })
    };

    return this._http.post<IProd>(`${environment.ApiUrl}/product`, prd, httpOptions)
  }
}
