import {Component} from '@angular/core';
import {JobList} from "./features/job-list/job-list";

@Component({
  selector: 'app-root',
  imports: [JobList],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css'
})
export class App {
  protected title = 'jobpilot-client';
}
