import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeaService {
  people$: BehaviorSubject<string[]> = new BehaviorSubject([]);
  people = [
    'Matt',
    'Piers',
    'Lindsay',
    'Dave'
  ];


  constructor() {
    this.getPersons();
  }

  /**
   * Gets people in the team.
   *
   * This could look at local storage or reach out to a data provider via HTTP.
   */
  private getPersons() {
    this.people$.next(this.people);
  }

  /**
   * Adds a new person to the persons list.
   *
   * @return boolean
   *   Return false if the name alreasy exists in the list, else return true
   *   after adding the user.
   */
  public addPerson(name: string): boolean {
    // For now, we're not going to allow two people of the same name, so let's
    // check for the name in the list.
    if (this.people.indexOf(name) > -1) {
      return false;
    }

    this.people.push(name);
    this.people$.next(this.people);
    return true;
  }

  /**
   * Removes a person from the person list.
   *
   * For now we're simply matching by string.
   */
  public removePerson(name: string) {

  }
}
