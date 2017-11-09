import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { routing }  from './app.routes';
import 'rxjs/add/operator/map';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';

import { TituloModule } from './titulo/titulo.module';
import { ColorPaletteModule } from './color-palette/color-palette.module';
import { BreadcrumbModule } from './breadcrumb/breadcrumb.module';

import { CadastroModule } from './cadastro/cadastro.module';
import { ConfiguracaoModule } from './configuracao/configuracao.module';
import { ChamadoModule } from './chamado/chamado.module';
import { CargoModule } from './cargo/cargo.module';
import { ClienteModule } from './cliente/cliente.module';
import { ProcessoModule } from './processo/processo.module';
import { ColaboradorModule } from './colaborador/colaborador.module';
import { TipoChamadoModule } from './tipo-chamado/tipo-chamado.modulo';
import { ProdutoModule } from './produto/produto.module';
import { HistoricoModule } from './historico/historico.module';
import { PrioridadeModule } from './prioridade/prioridade.module';
import { LoginModule } from './login/login.module';
import { AlertaModule } from './alerta/alerta.module';
import { Erro404Module } from './erro404/erro404.module';

import { AppComponent }  from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { CadastrosModule } from './cadastros/cadastros.module';

@NgModule({
  imports: [ 
      BrowserModule, 
      HttpModule, 
      routing,
      FormsModule, 
      ReactiveFormsModule,
      NgbModule.forRoot(),

      ColorPaletteModule,
      TituloModule,
      BreadcrumbModule,
      
      Erro404Module,
      CadastroModule,
      ConfiguracaoModule,
      ChamadoModule,
      HistoricoModule,
      ProcessoModule,
      CargoModule,
      ClienteModule,
      ColaboradorModule,
      TipoChamadoModule,
      ProdutoModule,
      PrioridadeModule,
      CadastrosModule,
      LoginModule,
      AlertaModule
    ],
  declarations: [ 
      AppComponent,
      AppHeaderComponent,
      AppFooterComponent
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
