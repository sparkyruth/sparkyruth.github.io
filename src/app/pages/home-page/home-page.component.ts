import { Component, OnInit } from '@angular/core';
import { faHeart, faSearch } from '@fortawesome/free-solid-svg-icons';
import { ArtistsService} from '../../services/artists.service'


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  faHeart = faHeart;
  faSearch = faSearch;
  title="Card title"
  body="This is the card body. it has been added via property binding"
  artistImg: any;
  artistName:any;
  fansNumber:any;
  visible = false;
  artistsSearch:boolean=false
  allArtists : any
  artistFans:any;
  artistId:any
 artist:any;
 topTracks:any;
 albums:any;
 drawerHeight:string='80%'
 noData:boolean=false
  constructor(private ArtistsService:ArtistsService) { }

  ngOnInit(): void {
  }

  showArtists(event:any){
    this.artistsSearch=true
    const filter = (event.target as HTMLInputElement).value.trim().toLocaleLowerCase();
    // this.filterLength = filter.length
    this.artistName = filter
    // console.log(this.artistName)
    this.getAnArtist(this.artistName)
    
  }
  getAnArtist(artistname:any){
    // console.log(this.artistName)
    this.ArtistsService.getAllArtists(artistname).subscribe((data:any)=>{

      if(data){
        this.noData=false
        let artists = data.data;
        // console.log(artists.map((a:any) => a))
        this.allArtists=data.data;
        this.allArtists.forEach((element: { id: any; }) => {
          this.artistId=element.id;
          // console.log( this.artistId)
  
        });
          this.getFans(1055090952)
      }
      else{
        this.noData=true

      }
     


    })
}
getFans(id:any){
  this.ArtistsService.getTopTracks(id).subscribe((data:any)=>{
    console.log(data)
  
  })
}

showArtistInfo(data:any){
  
  this.visible = true;
  this.artist=data
  console.log(data)
  this.getTopTracks(data)

  this.getAlbums(data)
}
closeDrawer(): void {
  this.visible = false;
}

getTopTracks(data:any){
this.ArtistsService.getTopTracks(data?.artist?.id).subscribe((res:any)=>{
  console.log(res)
  this.topTracks=res.data
  // console.log(this.topTracks)
})

}
getAlbums(data:any){
  this.ArtistsService.getAlbums(data?.artist?.id).subscribe((res:any)=>{
    console.log(res)
    this.albums=res.data
    console.log(this.albums)
  })
}


}