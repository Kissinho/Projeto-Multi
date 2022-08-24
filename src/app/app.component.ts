import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'Multi';
  dataAtual = new Date()
  horario = this.dataAtual.getHours()
  minutos = this.dataAtual.getMinutes()
  segundos = 0
  ngOnInit() {
    this.atualizarSegundos()
  }
  atualizarSegundos(){

      setInterval(()=>{
        this.dataAtual = new Date()
        this.segundos = this.dataAtual.getSeconds()
        this.horario = this.dataAtual.getHours()
        this.minutos = this.dataAtual.getMinutes()
        console.log(this.segundos)
      },1000)
  
  }
  
  

}
