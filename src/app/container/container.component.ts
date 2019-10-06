import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { flatMap, map, tap, take, retry, reduce, switchMap } from 'rxjs/operators';
import { User, Address, Geo, Company, UserFactory } from './user.model';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  private baseUrl: string;

  users$: Observable<User[]>;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.baseUrl = 'http://localhost:3000';

    //mapping json data to objects
    this.users$ = this.getUsers();
  }


  public addUser(value: User) {
    this.http.post<User>(`${this.baseUrl}/users`, value).pipe(
    ).subscribe(response => {
      //how do i update my table when i get a success repsonse
      // Do i have to make a call which will get all the data again ?
      // this.users$ = this.getUsers() --> this works but i have to dload all 
      //the data i have + the newly added
      // any alternatives ??
    })
  }

  //will be moved to a service
  public getUsers() {
    return this.http.get<User[]>(`${this.baseUrl}/users`).pipe(
      flatMap(asIs => asIs),
      map(user => UserFactory.create(user)),
      reduce((acc: User[], user: User) => [...acc, user], [])
    )
  }
}
