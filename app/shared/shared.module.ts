import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ToastModule, ToastsManager } from 'ng2-toastr/ng2-toastr';

import { LoadingIconComponent } from './loading-icon/loading-icon.component';
import { ToastrService } from './toastr.service';

@NgModule({
  declarations: [
    LoadingIconComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ToastModule,
    LoadingIconComponent
  ],
  providers: [
    ToastsManager,
    ToastrService
  ]
})
export default class SharedModule { }
