import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { User, Address, Geo, Company } from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class PresenterService {

  private addUserSubject: Subject<User>;
  public addUserSubject$: Observable<User>;
  constructor() {
    this.addUserSubject = new Subject<User>();
    this.addUserSubject$ = this.addUserSubject.asObservable();
  }

  public addUser() {
    this.addUserSubject.next(new User('Noorali Khoja', 'noor_123', 'nuralikhoja@gmail.com', new Address('1', '2', '3', 396165, new Geo(1, 2)), '+91-7066399254',
      'https://nooralikhoja.io', new Company('1Rivet', 'Quality Fastest', '??')));
  }
}
