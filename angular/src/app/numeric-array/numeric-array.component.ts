import {Component} from '@angular/core';

@Component({
  selector: 'app-numeric-array',
  templateUrl: './numeric-array.component.html',
  styleUrls: ['./numeric-array.component.scss']
})
export class NumericArrayComponent {
  inputValue: string;
  outputArray: number[];

  constructor() {
    this.inputValue = '';
    this.outputArray = [];
  }

  addNumber() {
    if (this.inputValue.trim() !== '') {
      this.inputValue += ', ';
    }
  }

  calculate() {
    const numbers = this.inputValue.split(',').map(num => parseInt(num.trim(), 10));
    this.outputArray = this.calculateNumericArray(numbers);
  }

  calculateNumericArray(nums: number[]): number[] {
    let product = 1;
    for (const num of nums) {
      product *= num;
    }

    return nums.map(num => product / num);
  }

  clear() {
    this.inputValue = '';
    this.outputArray = [];
  }
}
