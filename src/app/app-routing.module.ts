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
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'interests', component: InterestsComponent },
  { path: 'interests/bikefix', component: BikefixComponent },
  { path: 'interests/cycling', component: CyclingComponent },
  { path: 'interests/programming', component: ProgrammingComponent },
  { path: 'classes', component: ClassesComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
