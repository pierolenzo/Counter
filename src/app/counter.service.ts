import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private COUNTER_KEY: string = 'counter';
  private counterSubject!: BehaviorSubject<number>;

  public counter$!: Observable<number>;

  constructor() {
    this.counterSubject = new BehaviorSubject<number>(
      localStorage.getItem(this.COUNTER_KEY)
        ? Number(localStorage.getItem(this.COUNTER_KEY))
        : 1
    );
    this.counter$ = this.counterSubject.asObservable();
  }

  public cacheCounter(num: number): void {
    localStorage.setItem(this.COUNTER_KEY, String(num));
  }

  public increase(input: number = 1): void {
    this.counterSubject.next(this.counterSubject.value + input);
    this.cacheCounter(this.counterSubject.value);
  }

  public decrease(input: number = 1): void {
    this.counterSubject.next(this.counterSubject.value - input);
    this.cacheCounter(this.counterSubject.value);
  }
}
