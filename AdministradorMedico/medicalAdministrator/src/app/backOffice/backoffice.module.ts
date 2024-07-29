import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { LayoutComponent } from './layout/layout.component';
import { BackofficeRoutingModule } from './backoffice.routing-module';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzLayoutModule,
    BackofficeRoutingModule,
    NzIconModule
  ],
})
export class BackofficeModule {}
