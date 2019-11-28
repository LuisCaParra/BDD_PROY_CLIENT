import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Observable } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class DataService {

  constructor(
    private http: HttpClient
  ) { }


  find(collection: String) {
    return this.http.get<any>(environment.serverBaseURL + environment.api + collection + "/");
  }

  findById(collection: String, id: String) {
    return this.http.get<any>(environment.serverBaseURL + environment.api + collection + "/" + id);
  }

  insertOne(collection: String, obj: String) {
    return this.http.post(environment.serverBaseURL + environment.api + collection + "/", obj);
  }

  updateOne(collection: String, obj: String) {
    console.log(collection, obj);

    return this.http.put(environment.serverBaseURL + environment.api + collection + "/", obj);
  }


  deleteOne(collection: String, id: String) {
    return this.http.delete(environment.serverBaseURL + environment.api + collection + "/" + id);
  }


  count(collection: String) {
    return this.http.get<any>(environment.serverBaseURL + environment.api + collection + "/");
  }

}
