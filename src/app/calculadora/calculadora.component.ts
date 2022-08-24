import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.sass']
})
export class CalculadoraComponent implements OnInit {
  display=0
  valor1=0
  valor2=0
  operando=0
  operacao = 0
  cont=0
 
  constructor() { }
  
  ngOnInit(): void {
  }

  botao1(){
   this.display = 1


   if(this.valor1 == null || this.valor1 == 0){
    this.valor1 =this.display

   }else{
    this.valor2 = this.display

   }
  }
  botao2(){
    this.display = 2
    if(this.valor1 == null || this.valor1 == 0){
     this.valor1 = this.display

    }else{
     this.valor2 = this.display
    }
  }
  botao3(){
    this.display = 3
    if(this.valor1 == null || this.valor1 == 0){
     this.valor1 = this.display
    

    }else{
     this.valor2 = this.display
    }
  }
  botao4(){
    this.display = 4
    if(this.valor1 == null || this.valor1 == 0){
     this.valor1 = this.display

    }else{
     this.valor2 = this.display
    }
  }
  botao5(){
    this.display = 5
    if(this.valor1 == null || this.valor1 == 0){
     this.valor1 = this.display

    }else{
     this.valor2 = this.display
    }
  }
  botao6(){
    this.display = 6
    if(this.valor1 == null || this.valor1 == 0){
     this.valor1 = this.display

    }else{
     this.valor2 = this.display
    }
  }
  botao7(){
    this.display = 7
    if(this.valor1 == null || this.valor1 == 0){
     this.valor1 = this.display

    }else{
     this.valor2 = this.display
    }
  }
  botao8(){
    this.display = 8
    if(this.valor1 == null || this.valor1 == 0){
     this.valor1 = this.display

    }else{
     this.valor2 = this.display
    }
  }
  botao9(){
    this.display = 9
    if(this.valor1 == null || this.valor1 == 0){
     this.valor1 = this.display

    }else{
     this.valor2 = this.display
    }
  }
  botao0(){
    this.display = 0
    if(this.valor1 == null || this.valor1 == 0){
     this.valor1 = this.display

    }else{
     this.valor2 = this.display
    }
  }
  botaoSoma(){
    this.operacao = 1

  }
  botaoSubtracao(){
    this.operacao = 2

  }
  botaoDivisao(){
    this.operacao = 3

  }
  botaoMultiplicacao(){
    this.operacao=4
  }

  botaoIgual(){
    switch (this.operacao){
      case 1: this.display = this.valor1+ this.valor2
      setTimeout(()=>{
        this.display = 0
        this.valor1=0
        this.valor2=0
      },3000)
      break
    case 2: this.display = this.valor1 - this.valor2
    setTimeout(()=>{
      this.display = 0
      this.valor1=0
      this.valor2=0
    },3000)
    break
    case 3: this.display = this.valor1 / this.valor2
    setTimeout(()=>{
      this.display = 0
      this.valor1=0
      this.valor2=0
    },3000)
    break
    case 4: this.display = this.valor1 * this.valor2
    setTimeout(()=>{
      this.display = 0
      this.valor1=0
      this.valor2=0
    },3000)
    break
      
    
    }
    

    }
  
  botaoC(){
    this.display=0
    this.valor1 = 0
    this.valor2=0
    this.operando=0
  }



}
