
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constant } from '../../core/constant';


@Injectable()
export class PedidosService {

    constructor(
        private http: HttpClient,
        ) { }

    buscarPedidos() {
       return this.http.get(Constant.apiEndpoint + 'PedidoFacade/GetPedidoPendente');
    }
    
}