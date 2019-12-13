import { Injectable } from '@angular/core';
import { Event } from '../interfaces/event.interface';

@Injectable({
  providedIn: 'root'
})
export class TrackingService {

  constructor() { }

  /**
   * Log an event.
   *
   * This method will most likely be a wrapper around a third party service like GA.
   */
  logEvent(eventData: Event): void {

  }
}
