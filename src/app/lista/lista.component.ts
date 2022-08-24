import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ILista } from './i-lista';
import { ListaService } from './lista.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.sass']
})
export class ListaComponent implements OnInit {


 
  formulario!: any
  constructor(private service: ListaService) {


   
   }

   getForm(dado: any){
    this.service.postLista(dado).subscribe(()=>{
      this.getLista()
    })
   }
   lista= [] as ILista[]
   

  ngOnInit(): void {
    this.getLista()
    this.formulario = {}
  }
  getLista(){
    this.service.getLista().subscribe(recebe =>{
      this.lista = recebe
  })

  }
  salvaLista(lista: FormGroup){
    this.service.postLista(this.formulario).subscribe(() =>{
      
     
      this.getLista()
    })
  
  }
  apagaLista(id: number){
    this.service.deleteLista(id).subscribe( resultado =>{
      console.log(this.lista)
      this.getLista()
    })
  }
}

