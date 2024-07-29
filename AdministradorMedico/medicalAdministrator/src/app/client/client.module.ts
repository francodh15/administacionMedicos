import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { ClientRoutingModule } from './client.routing.module';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    ClientRoutingModule,
    
  ]
})
export class ClientModule { }
