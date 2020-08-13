import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { map, retry } from "rxjs/operators";

export class DataService {
  constructor(private jsonUrl: string, private http: HttpClient) {}

  getAll() {
    return this.http
      .get(this.jsonUrl)
      .pipe(map((response) => response as Array<Object>));
  }
}
