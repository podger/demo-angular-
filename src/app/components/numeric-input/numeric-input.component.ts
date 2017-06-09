import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MathService } from "../../services/math.service";

@Component({
  selector: 'app-numeric-input',
  templateUrl: './numeric-input.component.html',
  styleUrls: ['./numeric-input.component.css'],
  providers: [MathService]
})
export class NumericInputComponent implements OnInit {
  @Input()
  label: string;
  @Input()
  value: number;
  @Output()
  valueChange: EventEmitter<number> = new EventEmitter<number>();
  @Output()
  pow: EventEmitter<number> = new EventEmitter<number>();

  constructor(private mathService: MathService) { }

  ngOnInit() {
    
  }

  updateValue(newValue: number) {
    this.valueChange.emit(newValue);
    let pow2 = this.mathService.pow(+newValue, 2);
    this.pow.emit(pow2);
  }

}
