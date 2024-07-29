import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { ListadoMedicosComponent } from './listado-medicos/listado-medicos.component';
import { LayoutComponent } from 'src/app/client/home/layout/layout.component';
import { FormularioEditComponent } from './Medicos-edit-new/formulario-edit.component';
import { UserNewEditComponent } from 'src/app/client/auth/user-new-edit/user-new-edit.component';
import { ListUserComponent } from 'src/app/client/auth/list-user/list-user.component';



const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children:[{
      path: 'medicos',
  component:ListadoMedicosComponent
    },
    {
      path:'formularioMedicos',
      component:FormularioEditComponent
    },
    {
      path:'formularioEdit/:id',
      component:FormularioEditComponent
    }
   ]
  }
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class RoutingModuleMedicos { }
