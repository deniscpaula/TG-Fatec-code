import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Webservice } from '../helpers/webservice';
import { Colaborador } from '../colaborador/colaborador';

@Injectable()
export class CadastroService {

    constructor(private webservice: Webservice, private router: Router) {}

    
}