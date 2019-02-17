import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  _url='http://localhost:3000/order';
  constructor(private _http: HttpClient) { }

  order(user: User){
    return this._http.post<any>(this._url, user);
  }
}
