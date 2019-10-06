import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { PresenterService } from 'src/app/container/presenter/presenter.service';
import { User } from '../user.model';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
  viewProviders: [PresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PresentationComponent implements OnInit {

  private _users: any[];

  @Input()
  public set users(value) {
    if (value) {
      this._users = value;
    }
  }

  public get users() {
    return this._users;
  }

  @Output()
  addUserEmitter: EventEmitter<User>;

  constructor(private presenter: PresenterService) {
    this.addUserEmitter = new EventEmitter<User>();
  }

  ngOnInit() {
    this.presenter.addUserSubject$.subscribe(user => {
      this.addUserEmitter.emit(user);
    })
  }


  public addUser() {
    this.presenter.addUser();
  }

}
