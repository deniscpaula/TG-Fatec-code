import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class Webservice {
    _http: Http;
    _headers: Headers;
    _url: string = 'http://192.168.1.38:8080/devops/';

    constructor(http: Http) {
        this._http = http;
        this._headers = new Headers();
        this._headers.append('Content-Type', 'application/json');
    }

    getWebserviceUrl() {
        return this._url;
    }

    post(url: string, obj: string): Observable<Response> {
        return this._http
            .post(this._url + url, obj, { headers: this._headers });
    }

    get(url: string): Observable<Response> {
        return this._http.get(this._url + url);
    }

    put(url: string, obj: string): Observable<Response> {
        return this._http
            .post(this._url + url, obj, { headers: this._headers });
    }

    delete(url: string): Observable<Response> {
        return this._http
            .delete(this._url + url);
    }

    none(): Observable<Response> {
        return this._http.get('');
    }
}