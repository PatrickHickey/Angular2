import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username = 'PatrickHickey';
  private client_id = '2a4187d4129a07406270';
  private client_secret = 'b8c54e437818e3c83d7a4d62d10e8d51a6bf7069';

  constructor(private _http:Http) {
    console.log('Github Service Init...');
  }

  getUser() {
    return this._http.get('https://api.github.com/users/'+this.username)
      .map(res => res.json());
  }

  getRepos() {
    return this._http.get('https://api.github.com/users/'+this.username+'/repos')
      .map(res => res.json());
  }

  updateUsername(username:string) {
    this.username = username;
  }
}
