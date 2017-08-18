import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { LoggingService } from '../logging/logging.service';

@Injectable()
export class LoggingErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    console.error(error);
    (<Observable<void>>this.injector.get(LoggingService).logError('Global Error Handler',
      error.stack)).subscribe(
        null,
        () => {
          // do nothing since logging service is unavailable
          console.error(`unable to connect to logging service!`);
        }
      );
  }

  constructor(private injector: Injector) { }
}
