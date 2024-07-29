import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { clients } from 'src/app/interface/clients';
import { conexionClientes } from 'src/app/ApiConnection/connectionClientes';
import { ResponseAPI } from 'src/app/interface/respuesta';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject(HttpClient);
  private apiUrl:string = conexionClientes.apiUrl + "Clientes"

  constructor () {
  }



//Metodo para agregar todos a la lista
  getClients () : Observable<clients[]> {
    return this.http.get<clients[]>(this.apiUrl)
  }
//Metodo para Editar
  updateClients (clients:clients){
    return this.http.put<ResponseAPI>(this.apiUrl,clients);
  }
//Metodo acceder a la lista
  get(id:number): Observable<clients>{
    return this.http.get<clients>(`${this.apiUrl}/${id}`);
  }
//Metodo para un nuevo Medico a la lista
 addClients(clients:any) {
  return this.http.post<ResponseAPI>(this.apiUrl,clients);
 }
 //Delete
 deleteClients(id:string){
  return this.http.delete<ResponseAPI>(`${this.apiUrl}/${id}`);
 }
 
}
