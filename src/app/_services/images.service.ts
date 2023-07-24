import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  constructor(private http: HttpClient) { }
  imageUrl = 'http://localhost:8080/images';

  saveImage(data: FormData) {
    this.http.post(this.imageUrl + '/upload', data).subscribe()
  }

  getImage(image: String) {
    return this.http.get(this.imageUrl + '/' + image, {responseType: "blob"});
  }
}
