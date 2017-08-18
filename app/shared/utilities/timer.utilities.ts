import { Observable } from 'rxjs';

export class TimerUtilities {
  static showPerformance(func: Function, args: any[], thisArg: any): any {
    console.log(func);

    let startTime: Date = new Date();
    let result = func.apply(thisArg, args);

    let finishTime: Date = new Date();

    let timeTaken = finishTime.getTime() - startTime.getTime();
    console.log(`function ${func.name} took ${timeTaken / 1000} seconds`);

    return result;
  }

  static showPerformanceOfObservable(func: Function, args: any[], thisArg: any): Observable<any> {
    return TimerUtilities.showPerformance(func, args, thisArg);
  }
}
