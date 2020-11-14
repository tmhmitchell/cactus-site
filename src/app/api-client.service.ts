import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


class Hydration {
    hydration: number
}

@Injectable({
    providedIn: 'root'
})
export class ApiClientService {
    private apiRoot: string = environment.api;

    constructor(private http: HttpClient) { }

    getHydration() {
        return this.http.get<Hydration>(this.apiRoot + '/1/hydration')
    }
}

