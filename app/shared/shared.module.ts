import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoadingIconComponent } from './loading-icon/loading-icon.component';
import { ToastrService } from './toastr.service';

@NgModule({
  declarations: [
    LoadingIconComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ToastModule.forRoot()
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpModule,
    LoadingIconComponent,
    BrowserAnimationsModule
  ],
  providers: [
    ToastrService
  ]
})
export default class SharedModule { }
