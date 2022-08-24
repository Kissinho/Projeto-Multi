import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ConversorMoedasComponent } from './conversor-moedas/conversor-moedas.component';
import { ImcComponent } from './imc/imc.component';
import { ListaComponent } from './lista/lista.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {
    path:'calculadora', component: CalculadoraComponent
  },
  {
    path:'', component: MenuComponent
  },
  {
    path:'imc', component: ImcComponent
  },
  {
    path:'conversor', component: ConversorMoedasComponent
  },
  {
    path: 'lista', component: ListaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
