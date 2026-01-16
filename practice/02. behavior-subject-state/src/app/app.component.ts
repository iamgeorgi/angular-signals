import { CommonModule } from '@angular/common';
import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnChanges {
  readonly counter$ = interval(1000);
  someCoolValue = 50;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Change detection has been invoked!', changes);
  }

  doNothing() {
    // console.log('change has been spotted!');
    return 42;
  }
}
