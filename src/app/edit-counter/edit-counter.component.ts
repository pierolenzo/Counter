import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-edit-counter',
  templateUrl: './edit-counter.component.html',
  styleUrls: ['./edit-counter.component.sass']
})
export class EditCounterComponent implements OnInit {

  constructor(public counter: CounterService) { }

  ngOnInit(): void {

  }

}
