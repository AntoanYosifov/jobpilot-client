import {AfterViewInit, Component, OnInit} from '@angular/core';
import {map, Observable} from "rxjs";
import {Job} from "../../services/job.model";
import {JobService} from "../../services/job.service";
import {AsyncPipe} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-job-list',
    imports: [
        AsyncPipe,
        RouterLink,
    ],
  templateUrl: './job-list.html',
  standalone: true,
  styleUrl: './job-list.css'
})
export class JobList implements OnInit{
    jobs$!: Observable<Job[]>

    constructor(private jobService: JobService) {
    }

    ngOnInit() {
      this.jobs$ = this.jobService.getJobsPage().pipe(
          map((pageObj) => pageObj.content)
      );
    }
}
