import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { ArtistListComponent } from './components/artist-list/artist-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzEmptyModule } from 'ng-zorro-antd/empty';


library.add(faSearch);
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ArtistListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    NzGridModule,
    NzModalModule,
    NzDrawerModule,
    NzListModule,
    NzEmptyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
