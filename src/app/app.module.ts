import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MovieFesInterceptor} from "./utilities/MovieFesInterceptor";
import { RouterModule } from '@angular/router';
import {MatRadioModule} from "@angular/material/radio";
import {FormsModule} from "@angular/forms";
import {MatMenuModule} from "@angular/material/menu";



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(
      [
        // {path: '', component: a, pathMatch: 'full'},
      ],
      {
        onSameUrlNavigation: 'reload',
      }
    ),
    MatRadioModule,
    FormsModule,
    MatMenuModule,

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MovieFesInterceptor,
      multi: true,
    }
    ],

  bootstrap: [AppComponent],
})
export class AppModule {
}
