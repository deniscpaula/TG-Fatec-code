import { Injectable } from '@angular/core';

@Injectable()
export class Helper {
    months = [
        'Janeiro', 'Fevereiro', 'Março',
        'Abril', 'Maio', 'Junho', 
        'Julho', 'Agosto', 'Setembro', 
        'Outubro', 'Novembro', 'Dezembro'];


    format(date: Date) {
        if(!date) return null;

        date = new Date(date);

        var day = ("0" + (date.getDate())).slice(-2);
        //var month = this.months[date.getMonth()];
        var month = ("0" + (date.getMonth() + 1)).slice(-2);
        var year = date.getFullYear();

        return day + '/' + month + '/' + year;
    }

    formatWithTime(date: Date) {
        if(!date) return null;
        
        date = new Date(date);

        var day = ("0" + date.getDate()).slice(-2);
        //var month = this.months[date.getMonth()];
        var month = ("0" + (date.getMonth() + 1)).slice(-2);
        var year = date.getFullYear();
        var hour = ("0" + date.getHours()).slice(-2);
        var minutes = ("0" + date.getMinutes()).slice(-2);
        var seconds = ("0" + date.getSeconds()).slice(-2);

        return day + '/' + month + '/' + year + " - " + hour + ":" + minutes + ":" + seconds;
    }

    toDate(data: string) {
        let dataArray = data.split('/');
        return new Date(dataArray[1] + '/' + dataArray[0] + '/' + dataArray[2]);
    }

    validarCPF() {

    }

    validarCNPJ() {
        
    }
}