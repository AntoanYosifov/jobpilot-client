import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {JobPage} from "./job.model";

@Injectable({
    providedIn: 'root'
})
export class JobService {

    private baseUrl = 'http://localhost:8080/api/jobs'

    constructor(private http: HttpClient) {
    }

    getJobsPage(): Observable<JobPage> {
        const url = `${this.baseUrl}`;
        return this.http.get<JobPage>(url);
    }
}
