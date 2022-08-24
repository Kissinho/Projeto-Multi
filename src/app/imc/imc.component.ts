import { Component, OnInit } from '@angular/core';
import { mergeScan } from 'rxjs';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.sass']
})
export class ImcComponent implements OnInit {
  imc:any= 'IMC'
  msg: any=''
  valorImc:number=0
  constructor() { }

  ngOnInit(): void {
  }
  calcularImc(peso:any, altura:any){
    peso = parseFloat(peso)
    altura = parseFloat(altura)
    this.valorImc=parseFloat((peso/( altura*altura)*10000).toFixed(2))
    this.imc = "O seu IMC é "+(peso/( altura*altura)*10000).toFixed(2)
    if(this.valorImc<=18.5){
      this.msg= "IMC abaixo do normal"
      console.log(this.msg)
    }else if(this.valorImc>=18.6 && this.valorImc<=24.9){
      this.msg="O seu IMC indica que está normal"
    }
    else if(this.valorImc>=25 && this.valorImc<=29.9){
      this.msg="O seu IMC está indicando sobrepeso"
    }else if(this.valorImc>=30 && this.valorImc<=34.9){
      this.msg="O seu IMC está indicando obesidade grau 1"
    }else if(this.valorImc>=35 && this.valorImc<=39.9){
      this.msg="O seu IMC está indicando obesidade grau 2"
    }else if(this.valorImc>40){
      this.msg="O seu IMC está indicando obesidade grau 3"
    }
  }
}
