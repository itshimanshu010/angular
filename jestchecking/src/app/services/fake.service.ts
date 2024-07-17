import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeService {

  constructor(private http:HttpClient) { }

  getDataV1():Observable<any> {
    const url= 'https://jsonplaceholder.typicode.com/todos/1';
    return this.http.get(url);
  }

  //Version two of get call

  getDataV2():Observable<any>{
    const url= 'https://jsonplaceholder.typicode.com/todos/1';
    return this.http.get(url).pipe(
      tap((data:any)=>console.log('Data Fetched',data)),
      catchError(this.handleError('Failed to fetch data'))

    )
  }
  //post call

  postData(data:any):Observable<any>{
    const url= 'https://jsonplaceholder.typicode.com/posts';
    const httpOptions={
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    }
    return this.http.post(url,data,httpOptions)
  }

  private handleError<T>(operation = 'operation') {
    return (error: HttpErrorResponse): Observable<T> => {
      
      // send the error to remote logging infrastructure
      console.error(error); // log to console instead
      
      const message = `server returned code ${error.status} with message ${error.error}`;
      //better job of transforming error for user consumption
      throw new Error(`${operation} failed: ${message} `);
    };
  }

}
