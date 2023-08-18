import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from '../entities/photo';

@Injectable({ providedIn: 'root' })
export class PhotosDataService {
  constructor(private http: HttpClient) {}
  private _apiUrl = 'https://picsum.photos/v2/list';

  load(): Observable<Photo[]> {
    const params = new HttpParams().set('page', 1);
    const headers = new HttpHeaders().set('Accept', 'application/json');

    return this.http.get<Photo[]>(this._apiUrl, { params, headers });
  }
}
