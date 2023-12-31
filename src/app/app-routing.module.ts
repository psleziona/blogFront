import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ArticleComponent} from "./article/article.component";
import {HomeComponent} from "./home/home.component";
import {ArticlesComponent} from "./articles/articles.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {AddArticleComponent} from "./add-article/add-article.component";
import {AuthGuard} from "./_guards/auth.guard";
import {UserComponent} from "./user/user.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'article/:id', component: ArticleComponent, canActivate:[AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'addArticle', component: AddArticleComponent },
  { path: 'user', component: UserComponent }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
