import { Component } from '@angular/core';

import { GithubService } from '../services/github.service';

@Component({
  moduleId: module.id,
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['../../app/app.component.css']
})
export class ProfileComponent {
  constructor(private _githubService: GithubService) {
    this._githubService.getUser().subscribe(user => this.user = user)
    this._githubService.getRepos().subscribe(repos => this.repos = repos)
  }

  user: any[];
  repos: any[];
}
