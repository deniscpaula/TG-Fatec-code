import { Component, OnChanges } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

import { Colaborador } from '../colaborador/colaborador';
import { LoginService } from '../login/login.service';

@Component({
    moduleId: module.id,
    selector: 'app-header',
    templateUrl: './app-header.component.html'
})
export class AppHeaderComponent implements OnChanges {
    url: string = "";
    chamado: boolean;
    login: boolean;
    colaborador: Colaborador;

    constructor(private router: Router, private loginService: LoginService) {
        this.router.events
            .subscribe((e: NavigationStart) => {
                this.url = e.url;
                this.loginService.getLogado()
                    .subscribe(colaborador => {
                        this.colaborador = colaborador;
                        this.showItensMenu();
                        this.loadMenu();
                }, erro => console.log(erro));
        });
    }
    
    ngOnChanges() {
        this.showItensMenu();
        this.loadMenu();
    }

    showItensMenu() {
        this.login = false;
        this.chamado = false;
        if(this.url.includes('chamados')) {
            this.chamado = true;

        } else {
            if(this.url === '/' || this.url === '/cadastro') {
                this.login = true;
            }
        }
    }

    urlAtiva(url: string): boolean {
        return (this.url && this.url.includes(url));
    }

    showMenuOptions() {
        $('.menu-options').show();
        $('.menu-icon').show();
        $('.menu-icon-border').show();
    }
    hideMenuOptions() {
        $('.menu-options').hide();
        $('.menu-icon').hide();
        $('.menu-icon-border').hide();
    }

    loadMenu() {
        $(document).ready(() => {
            $('.burger').off("click").on( "click", function() {
                $(".collapsed").animate({
                    height: 'toggle'
                });

                $(window).resize(function() {
                    if($(window).width() > 640) {
                        $(".collapsed").hide();
                    }
                    event.stopPropagation();
                });
            });

            $('#user-dropdown')
                .hover(() => {
                    this.showMenuOptions()
                    $('html').click(() => this.hideMenuOptions());

                    event.stopPropagation();
                })
                .click(() => {
                    this.showMenuOptions();
                    $('html').click(() => this.hideMenuOptions());

                    event.stopPropagation();
                });
            
            $('.menu-options').mouseleave(() => this.hideMenuOptions());
        });
    }

    logout() {
        sessionStorage.removeItem('colaborador');
        this.router.navigateByUrl('/');
    }
}