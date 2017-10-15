import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { githubKeys } from './github.keys';

@Injectable()
export class GithubService {
  private username:string;
  private client_id = githubKeys.client_id;
  private client_secret = githubKeys.client_secret;

  constructor(private _http: Http) {
    console.log('GH Service Ready...');
    this.username = 'SiamKing';
  }

  getUser() {
    return this._http.get('https://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
      .map(res => res.json());
  }

  getRepos() {
    return this._http.get('https://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
      .map(res => res.json());
  }
}
