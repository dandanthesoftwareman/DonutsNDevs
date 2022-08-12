import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DonutslistComponent } from './donutslist/donutslist.component';
import { DonutDetailComponent } from './donut-detail/donut-detail.component';
import { FamousPeopleComponent } from './famous-people/famous-people.component';
import { FamousPersonDetailComponent } from './famous-person-detail/famous-person-detail.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'donuts', component: DonutslistComponent},
  {path: 'donut/:id', component: DonutDetailComponent},
  {path: 'people', component: FamousPeopleComponent},
  {path: '', redirectTo: '/donuts', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    DonutslistComponent,
    DonutDetailComponent,
    FamousPeopleComponent,
    FamousPersonDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
