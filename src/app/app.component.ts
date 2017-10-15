import { Component } from '@angular/core';
import { GithubService } from './services/github.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `
  <nav class="navbar navbar-expand-md navbar-default">
    <a class="navbar-brand" href="#">Github Search</a>


    <div class="collapse navbar-collapse" id="navbarsExampleDefault">
      <ul class="navbar-nav mr-auto">

      </ul>

    </div>
  </nav>
  <div class="container">
    <profile></profile>
  </div>
  `,
  styleUrls: ['./app.component.css'],
  providers: [GithubService]
})
export class AppComponent { }
