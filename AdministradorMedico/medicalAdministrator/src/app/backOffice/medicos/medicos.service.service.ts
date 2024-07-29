import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Person } from 'src/app/interface/person';


@Injectable({
  providedIn: 'root'
})
export class MedicosService {

  private url = 'http://localhost:3000/medicos'

  constructor (private HttpClient : HttpClient) {
  }

//Metodo para agregar todos a la lista
  getMedicos () : Observable<Person[]> {
    return this.HttpClient.get<Person[]>(this.url)
  }
//Metodo para Editar
  updateMedicos (medicos:Person){
    return this.HttpClient.put(this.url + "/" + medicos.id,medicos)
  }
//Metodo acceder a la lista
  get(id:string): Observable<Person>{
    return this.HttpClient.get<Person>(this.url + "/" + id)
  }
//Metodo para un nuevo Medico a la lista
 addMedico(medico:any) {
  return this.HttpClient.post(this.url,medico)
 }
 //Delete
 deleteMedico(id:string){
  return this.HttpClient.delete(this.url + "/" + id)
}

}

