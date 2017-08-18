import { Injectable, ViewContainerRef } from '@angular/core';
import { ToastsManager, Toast } from 'ng2-toastr/ng2-toastr';

@Injectable()
export class ToastrService {
  constructor(private toastr: ToastsManager) { }

  success(message: string) {
    this.toastr.success(message)
      .then(this.getToastrDismissFunction());
  }

  error(message: string) {
    this.toastr.error(message)
      .then(this.getToastrDismissFunction());
  }

  setViewContainer(viewContainerRef: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(viewContainerRef);
  }

  private getToastrDismissFunction(): (toast: Toast) => void {
    return (toast: Toast) => {
      setTimeout(() => {
        this.toastr.dismissToast(toast);
      }, 2000);
    };
  }
}
