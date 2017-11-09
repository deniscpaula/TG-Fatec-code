import { RouterModule, Routes } from '@angular/router';

import { Alerta } from './alerta/alerta';

import { Erro404Component } from './erro404/erro404.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ConfiguracaoComponent } from './configuracao/configuracao.component';

import { ChamadoComponent } from './chamado/chamado.component';
import { DetalheChamadoComponent } from './chamado/detalhe-chamado.component';
import { HistoricoComponent } from './historico/historico.component';
import { ListaChamadoComponent } from './chamado/lista-chamado.component';

import { CadastrosComponent } from './cadastros/cadastros.component';

import { ProcessoComponent } from './processo/processo.component';
import { ListaProcessoComponent } from './processo/lista-processo.component';

import { TipoChamadoComponent } from './tipo-chamado/tipo-chamado.component';
import { ListaTipoChamadoComponent } from './tipo-chamado/lista-tipo-chamado.component';

import { ColaboradorComponent } from './colaborador/colaborador.component';
import { ListaColaboradorComponent } from './colaborador/lista-colaborador.component';

import { ClienteComponent } from './cliente/cliente.component';
import { ListaClienteComponent } from './cliente/lista-cliente.component';

import { ProdutoComponent } from './produto/produto.component';
import { ListaProdutoComponent } from './produto/lista-produto.component';

import { CargoComponent } from './cargo/cargo.component';
import { ListaCargoComponent } from './cargo/lista-cargo.component';

const appRoutes: Routes = [

    { path: '', component: LoginComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'cadastros', component: CadastrosComponent },
    { path: 'chamados', component: ListaChamadoComponent },
    { path: 'configuracao', component: ConfiguracaoComponent },

    { path: 'chamados/adicionar', component: ChamadoComponent },
    { path: 'chamados/editar/:codigo', component: ChamadoComponent },
    { path: 'chamados/detalhar/:codigo', component: DetalheChamadoComponent },
    { path: 'chamados/historico/:codigo', component: HistoricoComponent },
    
    { path: 'cadastros/cargo', component: ListaCargoComponent },
    { path: 'cadastros/cargo/adicionar', component: CargoComponent },
    { path: 'cadastros/cargo/editar/:codigo', component: CargoComponent },

    { path: 'cadastros/cliente', component: ListaClienteComponent },
    { path: 'cadastros/cliente/adicionar', component: ClienteComponent },
    { path: 'cadastros/cliente/editar/:codigo', component: ClienteComponent },

    { path: 'cadastros/produto', component: ListaProdutoComponent },
    { path: 'cadastros/produto/adicionar', component: ProdutoComponent },
    { path: 'cadastros/produto/editar/:codigo', component: ProdutoComponent },

    { path: 'cadastros/colaborador', component: ListaColaboradorComponent },
    { path: 'cadastros/colaborador/adicionar', component: ColaboradorComponent },
    { path: 'cadastros/colaborador/editar/:codigo', component: ColaboradorComponent },

    { path: 'cadastros/tipo-chamado', component: ListaTipoChamadoComponent },
    { path: 'cadastros/tipo-chamado/adicionar', component: TipoChamadoComponent },
    { path: 'cadastros/tipo-chamado/editar/:codigo', component: TipoChamadoComponent },

    { path: 'cadastros/processo', component: ListaProcessoComponent },
    { path: 'cadastros/processo/adicionar', component: ProcessoComponent },
    { path: 'cadastros/processo/editar/:codigo', component: ProcessoComponent },

    { path: '**', component: Erro404Component }
];

export const routing = RouterModule.forRoot(appRoutes);