import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUserComponent } from './list-user/list-user.component';
import { UserNewEditComponent } from './user-new-edit/user-new-edit.component';
import { userRoutingModule } from './user.module.routing';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { userSearchPipe } from '../user.search.pipe';


//NgZorro

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
  declarations: [
    ListUserComponent,
    UserNewEditComponent,
    userSearchPipe
  ],
  imports: [
    CommonModule,
    userRoutingModule,
    RouterModule,
    NzTableModule,
    NzButtonModule,
    NzSelectModule,
    NzModalModule,
    NzFormModule,
    NzInputModule,
    NzIconModule,
    NzPopconfirmModule,
    NzDropDownModule,
    NzPaginationModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class userModule { }
