import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { clients } from 'src/app/interface/clients';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'http://localhost:3000/clientes'

  constructor (private HttpClient : HttpClient) {
  }

//Metodo para agregar todos a la lista
  getClients () : Observable<clients[]> {
    return this.HttpClient.get<clients[]>(this.url)
  }
//Metodo para Editar
  updateClients (clients:clients){
    return this.HttpClient.put(this.url + "/" + clients.id,clients)
  }
//Metodo acceder a la lista
  get(id:string): Observable<clients>{
    return this.HttpClient.get<clients>(this.url + "/" + id)
  }
//Metodo para un nuevo Medico a la lista
 addClients(clients:any) {
  return this.HttpClient.post(this.url,clients)
 }
 //Delete
 deleteClients(id:string){
  return this.HttpClient.delete(this.url + "/" + id)
 }
 
}
