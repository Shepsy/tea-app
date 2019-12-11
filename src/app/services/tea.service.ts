import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Person } from '../interfaces/person.interface';
import { fadeInItems } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class TeaService {
  people$: BehaviorSubject<Person[]> = new BehaviorSubject([]);
  people: Person[] = [
    {
      name: 'Matt',
      totalDrinks: 0,
      sessionDrinks: 0,
    },
    {
      name: 'Lindsay',
      totalDrinks: 0,
      sessionDrinks: 0,
    },
    {
      name: 'Piers',
      totalDrinks: 0,
      sessionDrinks: 0,
    },
    {
      name: 'Dave',
      totalDrinks: 0,
      sessionDrinks: 0,
    }
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
    if (this.people.findIndex(person => person.name === name) > -1) {
      return false;
    }

    const newPerson: Person = {
      name,
      sessionDrinks: 0,
      totalDrinks: 0,
    };

    this.people.push(newPerson);
    this.people$.next(this.people);
    // The new person was added successfully.
    return true;
  }

  /**
   * Removes a person from the person list.
   *
   * For now we're simply matching by string.
   */
  public removePerson(name: string) {
    const index = this.people.findIndex(person => person.name === name);
    if (index > -1) {
      this.people.splice(index, 1);
      this.people$.next(this.people);
    }
  }

  /**
   * Selects a person to make drinks.
   *
   * There are many methods of choosing a person, but fairness is our priority. To be fair,
   * we'll find the person who as made the least number of drinks in the current session. If
   * multiple people are found, then we'll choose randomly between them.
   */
  public choosePerson(): Person {
    // @note: We use the spread operator (...) as Math.min does not accept an array, but takes
    // multiple arguments.
    const lowestSessionValue = Math.min(...this.people.map(person => person.sessionDrinks));

    // Now that we know the lowest value, lets find the people who have that value.
    const lowestSessionPeople = this.people.filter(person => person.sessionDrinks === lowestSessionValue);

    // If we have one person, then get him/her, else we'll pick randomly from the people.
    let lowestPerson: Person;
    if (lowestSessionPeople.length === 1) {
      lowestPerson = lowestSessionPeople[0];
    } else {
      lowestPerson = lowestSessionPeople[Math.floor(Math.random() * lowestSessionPeople.length)];
    }
    this.incrementDrinks(lowestPerson);
    return lowestPerson;
  }

  /**
   * Resets all sessionDrinks values to zero.
   */
  public resetSession() {
    this.people.forEach(person => person.sessionDrinks = 0);
  }

  /**
   * Increments the session and total drinks of a person.
   */
  private incrementDrinks(person: Person): void {
    person.sessionDrinks++;
    person.totalDrinks++;
  }
}
