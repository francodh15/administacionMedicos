import { Injectable } from '@angular/core';
import { Person } from './person';



@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  
  private clientes: Person[] = [];

  constructor (){}

  addCliente(cliente: Person): void {
    this.clientes.push(cliente);
  }

  getClientes(): Person[] {
    return this.clientes;
  }


}
