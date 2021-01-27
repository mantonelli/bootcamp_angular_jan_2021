import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { PoModule } from '@po-ui/ng-components';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PoModule,
    PoTemplatesModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    PoModule,
    PoTemplatesModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
