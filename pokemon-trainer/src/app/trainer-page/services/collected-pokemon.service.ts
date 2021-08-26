import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
}) 

export class CollectedPokemonService {
    private pokemon: any = {};
    private error: string = "";
  
    constructor(private readonly http: HttpClient) { }
  
    public fetchPokemonPicture(url: string): Observable<string> {
      console.log(url)
      return this.http.get<string>(url);
    }
}