import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-edit-counter',
  templateUrl: './edit-counter.component.html',
  styleUrls: ['./edit-counter.component.sass'],
})
export class EditCounterComponent implements OnInit {
  public counter!: number;
  public subscription!: Subscription;
  public counterField: FormControl;

  constructor(public counterService: CounterService) {
    this.counterField = new FormControl('1', Validators.min(0));
  }

  public incrementCounter(input: number) {
    this.counterService.increase(input);
  }

  public decrementCounter(input: number) {
    this.counterService.decrease(input);
  }

  ngOnInit(): void {
    this.subscription = this.counterService.counter$
    .subscribe((data) => (this.counter = data));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
