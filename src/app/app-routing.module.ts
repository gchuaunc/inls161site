import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { InterestsComponent } from './interests/interests.component';
import { ClassesComponent } from './classes/classes.component';
import { BikefixComponent } from './interests/bikefix/bikefix.component';
import { CyclingComponent } from './interests/cycling/cycling.component';
import { ProgrammingComponent } from './interests/programming/programming.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full', title: "Home | oneSIXone" },
  { path: 'about', component: AboutComponent, title: "About | oneSIXone" },
  { path: 'interests', component: InterestsComponent, title: "Interests | oneSIXone" },
  { path: 'interests/bikefix', component: BikefixComponent, title: "Bikefix | oneSIXone" },
  { path: 'interests/cycling', component: CyclingComponent, title: "Cycling | oneSIXone" },
  { path: 'interests/programming', component: ProgrammingComponent, title: "Programming | oneSIXone" },
  { path: 'classes', component: ClassesComponent, title: "Classes | oneSIXone" },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
