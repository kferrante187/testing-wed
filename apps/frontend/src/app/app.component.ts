import { Component } from '@angular/core';
import { Result } from '@adt/shared';
import { ButtoneGroupItem } from '@adt/ui';
@Component({
  selector: 'adt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontend';
  thing!: Result<string>;

  buttonToShow: ButtoneGroupItem[] = [
    {
      label: 'Taco',
      value: 'taco',
    },
  ];
}
