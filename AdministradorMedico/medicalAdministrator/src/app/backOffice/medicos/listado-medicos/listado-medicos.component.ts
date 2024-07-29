
import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/interface/person';
import { MedicosService } from '../medicos.service.service';
@Component({
  selector: 'app-listado-medicos',
  templateUrl: './listado-medicos.component.html',
  styleUrls: ['./listado-medicos.component.css']
})
export class ListadoMedicosComponent implements OnInit {


  constructor(public servicioMedicos : MedicosService) { }
  listOfData: Person[] = [ ];
  filterNombre=''


  ngOnInit(): void {
    this.servicioMedicos.getMedicos().subscribe((data:any[]) => {
      this.listOfData=data;
    });
  }


  delete(id:any){
    this.servicioMedicos.deleteMedico(id).subscribe((resp) => {
      this.servicioMedicos.getMedicos().subscribe((data:any[]) => {
        this.listOfData=data;
        })
    })
  }

}
