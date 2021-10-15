import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-show-counter',
  templateUrl: './show-counter.component.html',
  styleUrls: ['./show-counter.component.sass'],
})
export class ShowCounterComponent implements OnInit {
  public counter$!: Observable<number>;

  constructor(private counterService: CounterService) {}

  ngOnInit(): void {
    this.counter$ = this.counterService.counter$;
  }



}
