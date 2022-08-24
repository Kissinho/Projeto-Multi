import { Component, OnInit } from '@angular/core';
import { MoedasService } from './moedas.service';

@Component({
  selector: 'app-conversor-moedas',
  templateUrl: './conversor-moedas.component.html',
  styleUrls: ['./conversor-moedas.component.sass']
})
export class ConversorMoedasComponent implements OnInit {
  ApiUrl = 'https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL'
  valorDolar!:any
  valorEuro!:any
  exibeDolar: any = 0
  exibeEuro: any = 0
  respostaApi = [] as any[]
  dolaresReais: any
  eurosReais: any
  constructor(private moedaService: MoedasService) { }

  

  ngOnInit(): void {
    this.pegarApi()
 
  }
  dolarReal(dolares: any){
    this.dolaresReais = dolares * this.valorDolar.high
  }
  euroReal(euros: any){
    this.eurosReais = euros * this.valorEuro.high
  }

  pegarApi(){
    this.moedaService.getMoedas().subscribe(recebeApi =>{
      this.valorDolar = recebeApi.USDBRL
      this.valorEuro = recebeApi.EURBRL
    
      console.log(this.valorDolar)
      console.log(this.valorEuro)
    })
  }

}
