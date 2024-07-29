
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: 'backOffice',
    loadChildren: () => import('./backOffice/back-office.module').then(m => m.BackOfficeModule),
  },
  {
    path:'user',
    loadChildren: () => import ('./client/auth/user.module').then(m=> m.userModule)
  },
  {
    path:'**',
    redirectTo:'backOffice'
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
