//@angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RoutingModuleMedicos } from './routing.module.medicos';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

//Components
import { FormularioEditComponent } from './Medicos-edit-new/formulario-edit.component';
import { ListadoMedicosComponent } from './listado-medicos/listado-medicos.component';
import { SearchPipe } from './search.pipe';

//Ng Zorro
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';



@NgModule({
  declarations: [ListadoMedicosComponent,FormularioEditComponent, SearchPipe],
  imports: [

    RoutingModuleMedicos,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    NzTableModule,
    NzButtonModule,
    NzSelectModule,
    NzModalModule,
    NzFormModule,
    NzIconModule,
    NzPopconfirmModule,
    NzDropDownModule,
    NzInputModule,
    NzPaginationModule
  ]
})
export class MedicosModule { }
