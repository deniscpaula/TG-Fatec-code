import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Prioridade } from './prioridade';
import { Webservice } from '../helpers/webservice';

@Injectable()
export class PrioridadeService {
    
    constructor(private webservice: Webservice) {}

    listar(): Observable<Prioridade[]>  {
        return this.webservice.get('prioridade/list/1').map(res => res.json());
    }
}