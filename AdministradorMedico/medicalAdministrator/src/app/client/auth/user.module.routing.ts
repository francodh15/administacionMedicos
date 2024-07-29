import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../home/layout/layout.component';
import { ListUserComponent } from './list-user/list-user.component';
import { UserNewEditComponent } from './user-new-edit/user-new-edit.component';



const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children:[{
      path: 'Users',
  component:ListUserComponent
    },
    {
      path:'newUser',
      component:UserNewEditComponent
    },
    {
      path:'editUser/:id',
      component:UserNewEditComponent
    }]
  }
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class userRoutingModule { }
