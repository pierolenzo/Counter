import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private counter: number = 0;

  constructor() { }

  public get value() : number {
    return this.counter;
  }

  public increase(input: number = 1) : number {
    return this.counter += input;
  }

  public decrease(input: number = 1) : number {
    return this.counter -= input;
  }

}
