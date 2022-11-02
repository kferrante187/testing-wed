import { Component } from '@angular/core';
import { Result } from '@adt/shared';
@Component({
  selector: 'adt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontend';
  thing!: Result<string>;
}
