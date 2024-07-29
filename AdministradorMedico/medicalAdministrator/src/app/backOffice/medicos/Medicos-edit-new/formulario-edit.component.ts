import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MedicosService } from '../medicos.service.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Person } from 'src/app/interface/person';

@Component({
  selector: 'app-formulario-edit',
  templateUrl: './formulario-edit.component.html',
  styleUrls: ['./formulario-edit.component.css']
})
export class FormularioEditComponent implements OnInit {

  medicos!:Person;
  form!:FormGroup;
  title!:string;

  constructor(
    private medicosService: MedicosService,
    private ActivatedRoute :ActivatedRoute,
    private router:Router,
    private formBuilder:FormBuilder
  ) { }

   private createForm () {
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      telefono: ['', Validators.required],
      matricula: ['', Validators.required],
      estado: ['', Validators.required],
      especialidad: ['', Validators.required]
    })

   }
  ngOnInit(): void {
    this.createForm();
    this.ActivatedRoute.params.subscribe((params) => {
      var id = params["id"];
      if (id) {
        this.title = 'Editar Medico';
        this.medicosService.get(id).subscribe((data: any) => {
          this.medicos = data;
          this.form.addControl('id', this.formBuilder.control(data.id));
          this.form.patchValue(data);
        });
      }
      else{
        this.title = 'Nuevo Medico';
      }
    });

  }

  submitForm (){
    const datosMedicos = this.form.value;
    if (datosMedicos.id) {
      this.medicosService.updateMedicos(datosMedicos).subscribe(
        resp => this.router.navigate(['/backOffice/medicos'])
      );
    } else {
      this.medicosService.addMedico(datosMedicos).subscribe(
        resp => this.router.navigate(['/backOffice/medicos'])
      );
    }
  }
}
