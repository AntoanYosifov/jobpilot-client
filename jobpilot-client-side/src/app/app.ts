import {Component} from '@angular/core';
import {JobList} from "./features/job-list/job-list";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink ,JobList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'jobpilot-client';
}
