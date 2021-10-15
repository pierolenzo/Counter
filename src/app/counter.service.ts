import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private COUNTER_KEY: string = 'counter';

  // per gestire lo stato tra i componenti
  private counterSubject!: BehaviorSubject<number>;
  //
  public counter$!: Observable<number>;

  constructor() {
    this.counterSubject = new BehaviorSubject<number>(
      localStorage.getItem(this.COUNTER_KEY)
      ? Number(localStorage.getItem(this.COUNTER_KEY))
      : 1);

    // per accedere in lettura
    this.counter$ = this.counterSubject.asObservable();
  }

  public updateCounter(num: number) {
    this.counterSubject.next(num);
    // cache
    localStorage.setItem(this.COUNTER_KEY, String(num));
  }



  // public get value() : number {
  //   return this.counter;
  // }

  // public increase(input: number = 1) {
  //   this.counter.next(input);
  // }

  // public decrease(input: number = 1) : number {
  //   return this.counter -= input;
  // }

}
