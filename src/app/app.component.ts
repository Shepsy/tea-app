import { Component } from '@angular/core';
import { TeaService } from './services/tea.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tea-app';

  constructor(
    public teaService: TeaService
  ) {}
}
