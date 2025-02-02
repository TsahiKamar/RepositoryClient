import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepositoryComponent } from './components/repository/repository.component';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';


const routes: Routes = [
  
  { path: '',redirectTo: '/repository',pathMatch:'full'},
  { path: 'repository',component: RepositoryComponent}
   ,
   { path: 'bookmarks',component: BookmarksComponent},

  { path: '**', redirectTo : '/repository' }


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
