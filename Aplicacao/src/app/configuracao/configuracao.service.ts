import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Alerta } from '../alerta/alerta';
import { Webservice } from '../helpers/webservice';
import { Usuario } from '../usuario/usuario';

@Injectable()
export class ConfiguracaoService {

    constructor(private webservice: Webservice, private router: Router) {}

    salvar(usuario: Usuario): Observable<Alerta> {
        return this.webservice.post('usuario/save', JSON.stringify(usuario))
            .map(() => new Alerta('Colaborador salvo com sucesso', 'sucesso'));
        
    }
    
}