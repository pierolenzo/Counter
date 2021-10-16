import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-show-counter',
  templateUrl: './show-counter.component.html',
  styleUrls: ['./show-counter.component.sass'],
})
export class ShowCounterComponent implements OnInit, OnDestroy {
  public counter!: number;
  subscription!: Subscription;

  constructor(private counterService: CounterService) {}

  ngOnInit(): void {
    this.subscription = this.counterService.counter$
    .subscribe((data) => (this.counter = data));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
