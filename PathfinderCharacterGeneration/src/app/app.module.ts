import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule }           from '@angular/http';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { routes as childRoutes, CharacterGenModule } from './charactergen/charactergen.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PcgFormParentComponent } from './pcg-form-parent/pcg-form-parent.component';

import { ButtonEmitterService } from './buttonemitter.service';
import { CharacterService } from './character.service';

const routes: Routes = [
    // basic routes
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    {
        path: 'charactergeneration',
        component: PcgFormParentComponent,
        children: childRoutes
    }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule, 
    RouterModule.forRoot(routes),

    //Child links
    CharacterGenModule
  ],
  providers: [
      ButtonEmitterService,
      CharacterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
