import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../Model/User';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private Http: HttpClient) { }

   addInformation(user: User): Observable<User>
   {
        return this.Http.post<User>(environment.url + '/v1/users', user);
   }
}
