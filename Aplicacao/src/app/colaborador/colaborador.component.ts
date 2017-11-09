import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alerta } from '../alerta/alerta'; 
import { Cargo } from '../cargo/cargo';
import { Usuario } from '../usuario/usuario';
import { Colaborador } from './colaborador';
import { CargoService } from '../cargo/cargo.service';
import { ColaboradorService } from './colaborador.service';
import { LoginService } from '../login/login.service';
import { TextMaskModule } from 'angular2-text-mask';
import { InputMask } from '../helpers/inputmask';

@Component({
    moduleId: module.id,
    selector: 'colaborador-cadastro',
    templateUrl: './colaborador.component.html'
})
export class ColaboradorComponent {
    colaboradorLogado: Colaborador;
    colaborador: Colaborador = new Colaborador();
    cargos: Cargo[] = [];
    alerta: Alerta = new Alerta('','');
    inputMask: InputMask = new InputMask();

    constructor(private service: ColaboradorService, 
                private serviceCargo: CargoService, 
                private route: ActivatedRoute, 
                private router: Router,
                private loginService: LoginService) {

        if(!this.loginService.isLogged()) return;
        this.loginService.permitAccess(true);
        
        this.loginService.getLogado().subscribe(logado => this.colaboradorLogado = logado);

        this.route.params.subscribe(params => {
            let codigo = params['codigo'];

            if(codigo) {
                service.buscar(codigo).subscribe(colaborador => {
                    this.colaborador = colaborador;
                    if(this.colaborador.cargo == null) {
                        this.colaborador.cargo = new Cargo();
                    }
                    this.loadCargos();
                });
                
            } else {
                this.loadCargos();
            }
        })

    }

    loadCargos() {
        this.serviceCargo.listar(true).subscribe(cargos => {
            this.cargos = cargos;
            if(this.colaborador.cargo.codigo != null && !this.colaborador.cargo.status) {
                this.cargos.push(this.colaborador.cargo);
            };
            this.cargos.sort((c1, c2) => (c1.codigo - c2.codigo));
        });
    }

    /*ngAfterViewInit() {
        $(function() {
            (<any>$('select')).selectize();
        });
    }*/
    
    salvar(event) {
        event.preventDefault();

        // Se for um NOVO cadastro
        if(!this.colaborador.codigo) {
            this.colaborador.empresa = this.colaboradorLogado.empresa;
        }

        this.service.salvar(this.colaborador)
            .subscribe(colaborador => {
                if(this.colaborador.codigo) {
                    this.alerta = new Alerta('Colaborador salvo com sucesso', 'sucesso');

                } else if(colaborador.codigo) {
                    this.colaborador = new Colaborador();
                    this.alerta = new Alerta('Colaborador salvo com sucesso', 'sucesso');
                
                } else {
                    this.alerta = new Alerta('Não foi possível salvar o colaborador', 'erro');
                }          
            }, erro => console.log(erro));
                
    }

    excluir(event) {
        event.preventDefault();

        if(confirm('Deseja excluir o colaborador: ' + this.colaborador.nome + '?')) {
            this.service
                .excluir(this.colaborador)
                .subscribe(colaborador => {
                    this.colaborador = colaborador;
                    if(colaborador.usuario.status == null) {
                        this.router.navigateByUrl('/cadastros/colaborador');
                    } else {
                        this.alerta = new Alerta('Não foi possível excluir o colaborador', 'erro');
                    }
                }, erro => console.log(erro));
        }
    }
}