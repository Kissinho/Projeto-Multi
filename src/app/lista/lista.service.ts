import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILista } from './i-lista';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  apiURL = "http://localhost:3000/lista"

  constructor(private http: HttpClient) { }


  getLista(): Observable<ILista[]>{
    return this.http.get<ILista[]>(this.apiURL)
  }
  getListaID(id: number): Observable<ILista[]>{
    return this.http.get<ILista[]>(`${this.apiURL}/${id}`)
  }
  postLista(lista: ILista): Observable<ILista[]>{
    if(lista.id){
      return this.http.put<ILista[]>(`${this.apiURL}/${lista.id}`, lista)
    }else{
      return this.http.post<ILista[]>(`${this.apiURL}`, lista)
    }
  }
  deleteLista(id: number): Observable<ILista[]>{
    return this.http.delete<ILista[]>(`${this.apiURL}/${id}`)
  }
 
}
