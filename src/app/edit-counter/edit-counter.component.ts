import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-edit-counter',
  templateUrl: './edit-counter.component.html',
  styleUrls: ['./edit-counter.component.sass']
})
export class EditCounterComponent implements OnInit {

  constructor(private counterService: CounterService) {

  }

  ngOnInit(): void {

  }

  incrementCounter() {
    this.counterService.updateCounter(10);
  }

}
