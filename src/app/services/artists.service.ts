import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../src/environments/environment'
@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  constructor(private http:HttpClient ) { }

 
getAllArtists(artistName: string) {
  // console.log(`${environment.apiBaseUrl}/search?q=artist:beyonce`, environment)
  return this.http.get(`${environment.apiBaseUrl}/search?q=artist:"${artistName}"`)
  // return this.http.get(`https://api.deezer.com/search?q=artist:"${artistName}"`)

}

getArtistFans(id: string) {
  return this.http.get(`${environment.apiBaseUrl}/artist/${id}/fans`)
}

getAlbums(id: string) {
  return this.http.get(`${environment.apiBaseUrl}/artist/${id}/albums`)
}


getTopTracks(id: string) {
  return this.http.get(`${environment.apiBaseUrl}/artist/${id}/top`)
}


}


