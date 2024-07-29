import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { conexionMedicos } from 'src/app/ApiConnection/connectionMedicos';
import { Person } from 'src/app/interface/person';
import { ResponseAPI } from 'src/app/interface/respuesta';


@Injectable({
  providedIn: 'root'
})
export class MedicosService {

   private http = inject(HttpClient);
  private apiUrl:string = conexionMedicos.apiUrl + "Medicos"

  constructor () {
  }

//Metodo para agregar todos a la lista
  getMedicos () : Observable<Person[]> {
    return this.http.get<Person[]>(this.apiUrl)
  }
//Metodo para Editar
  updateMedicos (medicos:Person){
    return this.http.put<ResponseAPI>(this.apiUrl,medicos)
  }
//Metodo acceder a la lista
  get(id:number): Observable<Person>{
    return this.http.get<Person>(`${this.apiUrl}/${id}`);
  }
//Metodo para un nuevo Medico a la lista
 addMedico(medico:any) {
  return this.http.post<ResponseAPI>(this.apiUrl,medico);
 }
 //Delete
 deleteMedico(id:string){
  return this.http.delete<ResponseAPI>(`${this.apiUrl}/${id}`);
}

}

