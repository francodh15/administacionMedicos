import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { clients } from 'src/app/interface/clients';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-new-edit',
  templateUrl: './user-new-edit.component.html',
  styleUrls: ['./user-new-edit.component.css']
})
export class UserNewEditComponent implements OnInit {

  cliente!:clients;
  form!:FormGroup;
  title!:string;

  constructor(
    private clienteService: UserService,
    private ActivatedRoute :ActivatedRoute,
    private router:Router,
    private formBuilder:FormBuilder
  ) { }

   private createForm () {
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      telefono: ['', Validators.required],
     dni: ['', Validators.required],
      observaciones: ['', Validators.required],
    })

   }
  ngOnInit(): void {
    this.createForm();
    this.ActivatedRoute.params.subscribe((params) => {
      var id = params["id"];
      if (id) {
        this.title = 'Editar Cliete';
        this.clienteService.get(id).subscribe((data: any) => {
          this.cliente = data;
          this.form.addControl('id', this.formBuilder.control(data.id));
          this.form.patchValue(data);
        });
      }
      else{
        this.title = 'Nuevo Cliente';
      }
    });
    
  }

  submitForm (){
    const datosMedicos = this.form.value;
    if (datosMedicos.id) {
      this.clienteService.updateClients(datosMedicos).subscribe(
        resp => this.router.navigate(['/user/Users']),
        
      );
    } else {
      this.clienteService.addClients(datosMedicos).subscribe(
        resp => this.router.navigate(['/user/Users'])
      );
    }
    console.log(this.form.value)
  }

}
