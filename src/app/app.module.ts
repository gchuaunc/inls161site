import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { InterestsComponent } from './interests/interests.component';
import { ClassesComponent } from './classes/classes.component';

import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { FooterComponent } from './footer/footer.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { ProgrammingComponent } from './interests/programming/programming.component';
import { GamedevComponent } from './interests/gamedev/gamedev.component';
import { BikefixComponent } from './interests/bikefix/bikefix.component';
import { CyclingComponent } from './interests/cycling/cycling.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    InterestsComponent,
    ClassesComponent,
    FooterComponent,
    ProgrammingComponent,
    GamedevComponent,
    BikefixComponent,
    CyclingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatDividerModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
