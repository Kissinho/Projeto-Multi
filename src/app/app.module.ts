import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { MenuComponent } from './menu/menu.component';
import { ImcComponent } from './imc/imc.component';
import { ConversorMoedasComponent } from './conversor-moedas/conversor-moedas.component';
import {HttpClientModule} from '@angular/common/http'
import { MoedasService } from './conversor-moedas/moedas.service';
import { ListaComponent } from './lista/lista.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    MenuComponent,
    ImcComponent,
    ConversorMoedasComponent,
    ListaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [MoedasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
