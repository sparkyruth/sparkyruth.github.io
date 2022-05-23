import { Component, Input, OnInit } from '@angular/core';
import { ArtistsService} from '../../services/artists.service'

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent implements OnInit {
  @Input() cardImg!:any ;
  @Input() artistName!: string;
  @Input() artistFans!: any;
  artist:string=''
  allArtists = []
  constructor(private ArtistsService:ArtistsService) { 
   this.getAnArtist()

  }

  ngOnInit(): void {
  }

  /**
   * get searched artist
   */
  getAnArtist(){
    // console.log(this.artistName)
    this.ArtistsService.getAllArtists(this.artistName).subscribe((data:any)=>{
      let artists = data.data
      this.allArtists = artists
      console.log(artists)

    }
    
    
    )
  }

}
