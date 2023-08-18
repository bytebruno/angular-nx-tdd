import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Photo } from '../entities/photo';

@Injectable({ providedIn: 'root' })
export class PhotosDataService {
  constructor(private http: HttpClient) {}

  load(): Observable<Photo[]> {
    // Uncomment if needed
    /*
        const url = '...';
        const params = new HttpParams().set('param', 'value');
        const headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.get<Photos[]>(url, {params, headers});
        */

    return of([]);
  }
}
