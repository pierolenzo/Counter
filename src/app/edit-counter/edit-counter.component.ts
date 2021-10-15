import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-edit-counter',
  templateUrl: './edit-counter.component.html',
  styleUrls: ['./edit-counter.component.sass']
})
export class EditCounterComponent implements OnInit {

  counterField = new FormControl('1', Validators.min(0))

  constructor(public counter: CounterService) { }

  ngOnInit(): void {

  }



}
