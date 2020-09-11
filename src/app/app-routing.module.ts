import { MovieDetailPageComponent } from './movie-detail-page/movie-detail-page.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: "",
    redirectTo: "movie-list",
    pathMatch: "full",
  },
  {
    path: "movie-list",
    children: [
      {
        path: "",
        component: MovieListComponent,
      },
      {
        path: ":id",
        component: MovieDetailPageComponent
      }
    ]
  },
  {
    path: "**",
    redirectTo: "movie-list",
    pathMatch: "full",
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
