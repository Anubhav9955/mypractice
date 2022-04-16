import { Component } from '@angular/core';
// import { type } from 'os';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'anubhav';
  // getName() {
  //   alert('hello u just clicked me');
  // }
  //   getData(val: string) {
  //     console.warn(val);
  //   }
  // displayVal = '';
  // getValue(val: string) {
  //   console.warn(val);
  //   this.displayVal = val;
  // }
  count = 0;
  counter(type: string) {
    type === 'add' ? this.count++ : this.count--;
  }
}
