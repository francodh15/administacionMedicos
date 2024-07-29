import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

//Components
import { LayoutComponent } from './layout/layout.component';

//NgZorro
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { HomeRoutingModule } from './home.routing.module';



@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    NzLayoutModule,
    NzIconModule,
    NzBreadCrumbModule,
    HomeRoutingModule    
  ]
})
export class HomeModule { }
