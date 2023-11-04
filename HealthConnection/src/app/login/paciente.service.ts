import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paciente } from './paciente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private url:string= "http://localhost:8080/health/api/v1/paciente";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

  constructor(private http:HttpClient) { }

  
  getCredenciales(paciente:Paciente):Observable<Paciente>{
     return this.http.get<Paciente>(this.url,this.httpOptions);
  }

  create(paciente:Paciente):Observable<Paciente>{
    return this.http.post<Paciente>(this.url,paciente);
  }

}
