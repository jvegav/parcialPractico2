import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Receta } from './receta';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {


  private apiUrl:string = environment.baseUrl ;

constructor(private http:HttpClient) { }


getRecetas(): Observable<Receta[]> {
  return this.http.get<Receta[]>(this.apiUrl);
}
}
