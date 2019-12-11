import { Component } from '@angular/core';
import { TeaService } from './services/tea.service';
import { Person } from './interfaces/person.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nameInput = '';
  selectedPerson: Person;

  constructor(
    public teaService: TeaService
  ) {}

  /**
   * Add the inputed name to the list of names.
   */
  nameSubmit() {
    // We only want to add to the list if the name has a value. We'll
    // reset the nameInput value to an empty string only if the name was
    // successfully added to the list.
    if (this.nameInput !== '' && this.teaService.addPerson(this.nameInput)) {
      this.nameInput = '';
    }
  }

  choosePerson() {
    this.selectedPerson = this.teaService.choosePerson();
  }
}
