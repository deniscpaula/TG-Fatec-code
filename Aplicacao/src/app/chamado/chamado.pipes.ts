import { Pipe, PipeTransform } from '@angular/core';
import { Chamado } from './chamado';
import { Helper } from '../helpers/helper';

@Pipe({
    name: 'filtroChamado'
})
export class FiltroChamado implements PipeTransform {
    constructor(private helper: Helper) {}
    
    transform(chamados: Chamado[], busca) {
        busca = busca.toLowerCase().split(',').map(busca => busca.trim());
        
        var chamadosFiltrado = chamados.filter(chamado => {
            var include = true;

            busca.forEach(b => {
                if(b.charAt(0) == '-' && b.substr(1,(b.length-1)).trim()) {
                    let excluir = b.substr(1,(b.length-1)).trim();
                    
                    //
                    if((chamado.codigoInterno == excluir) ||
                        (chamado.prazo && this.helper.format(chamado.prazo).includes(excluir)) || 
                        (chamado.produto && chamado.produto.nome.toLowerCase().includes(excluir)) || 
                        (chamado.assunto.toLowerCase().includes(excluir)) || 
                        (chamado.cliente && chamado.cliente.nomeFantasia.toLowerCase().includes(excluir)) || 
                        (chamado.prioridade && chamado.prioridade.nome.toLowerCase().includes(excluir)) || 
                        (chamado.processo && chamado.processo.nome.toLowerCase().includes(excluir)) || 
                        (chamado.tipo && chamado.tipo.nome.toLowerCase().includes(excluir))) {

                        include = false;
                    }

                } else if(b.substr(1,(b.length-1)).trim()) {
                    
                    // Se não tiver nenhum atributo ou se eles não possuirem a palavra buscada
                    // não irá incluir o chamado na lista
                    if((chamado.codigoInterno != b) &&
                        (!chamado.prazo || !this.helper.format(chamado.prazo).includes(b)) && 
                        (!chamado.produto || !chamado.produto.nome.toLowerCase().includes(b)) && 
                        (!chamado.assunto.toLowerCase().includes(b)) && 
                        (!chamado.cliente || !chamado.cliente.nomeFantasia.toLowerCase().includes(b)) && 
                        (!chamado.prioridade || !chamado.prioridade.nome.toLowerCase().includes(b)) && 
                        (!chamado.processo || !chamado.processo.nome.toLowerCase().includes(b)) && 
                        (!chamado.tipo || !chamado.tipo.nome.toLowerCase().includes(b))) {
                        
                        include = false;
                    }
                }
            });

            if(include) return chamado;
        });
        return chamadosFiltrado;
    }
}