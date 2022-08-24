import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoedasService {
  ApiUrl = 'https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL'
  constructor(private clienteHttp: HttpClient) { }

  getMoedas(): Observable<any>{
    return this.clienteHttp.get<any>(this.ApiUrl)
  }

}
