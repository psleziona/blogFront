import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterOutlet} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { ArticleComponent } from './article/article.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ArticlesComponent } from './articles/articles.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ArticleThumbnailComponent } from './article-thumbnail/article-thumbnail.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { FooterComponent } from './footer/footer.component';
import { AddArticleComponent } from './add-article/add-article.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AuthInterceptor} from "./_interceptors/auth.interceptor";
import { PagelinksComponent } from './pagelinks/pagelinks.component';
import { CommentComponent } from './comment/comment.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import {AuthGuard} from "./_guards/auth.guard";
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    HomeComponent,
    MenuComponent,
    ArticlesComponent,
    LoginComponent,
    RegisterComponent,
    ArticleThumbnailComponent,
    FooterComponent,
    AddArticleComponent,
    PagelinksComponent,
    CommentComponent,
    AddCommentComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
