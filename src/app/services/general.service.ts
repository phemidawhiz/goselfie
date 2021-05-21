import { BadRequestError } from './../common/bad-request-error';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';

@Injectable()
export class GeneralService {
  constructor(private url: string, private http: HttpClient) { }

  //Unauthenticated call to get all selfie tasks info
  getAllTasks() {
    return this.http.get(this.url)
    .pipe(retry(1),
    catchError(this.handleError)
    );
  }

  getSelfiesByTaskID = (id: string) => {
    return this.http.get(`${this.url}?taskid=${id}`)
    .pipe(retry(1),
      catchError(this.handleError)
    );
  }

  getTaskInfo = (id: string) => {
    return this.http.get(`${this.url}?taskid=${id}`)
    .pipe(retry(1),
      catchError(this.handleError)
    );
  }

  register(resource) {
    return this.http.post(this.url, resource)
    .pipe(retry(1),
      catchError(this.handleError)
    );
  }

  getMemberInfoFromUsername(username) {
    return this.http.get(`${this.url}?type=info&username=${username}`)
    .pipe(retry(1),
    catchError(this.handleError)
    );
  }

  getMemberSelfiesFromUsername(username) {
    return this.http.get(`${this.url}?type=selfies&username=${username}`)
    .pipe(retry(1),
    catchError(this.handleError)
    );
  }

  private handleError(error: Response) {
    if (error.status === 400)
      return Observable.throw(new BadRequestError(error.json()));

    if (error.status === 404)
      return Observable.throw(new NotFoundError());

    return Observable.throw(new AppError(error));
  }
}
