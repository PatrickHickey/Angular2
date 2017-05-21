import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MovieService {
  apikey: string;

  constructor(private _jsonp:Jsonp) {
    this.apikey = '26032d5810946660d18facc159b54b36';
    console.log('MovieService Initialized...');
  }

  getPopular() {
    return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key='+this.apikey)
      .map(res => res.json());
  }

  getInTheaters() {
    return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte=2017-04-20&primary_release_date.lte=2017-5-20&api_key='+this.apikey)
      .map(res => res.json());
  }

  searchMovies(searchStr: string) {
    return this._jsonp.get('https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK&query='+searchStr+'&sort_by=popularity.desc&api_key='+this.apikey)
    .map(res => res.json());
  }

  getMovie(id:string) {
    return this._jsonp.get('https://api.themoviedb.org/3/movie/'+id+'?callback=JSONP_CALLBACK&api_key='+this.apikey)
      .map(res => res.json());
  }
}
