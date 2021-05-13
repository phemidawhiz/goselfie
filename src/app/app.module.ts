import { AdminAuthGuard } from './services/admin-auth-guard.service';
import { AuthGuard } from './services/auth-guard.service';
import { AppErrorHandler } from './common/app-error-handler';
import { OrderService } from './services/order.service';
import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, BaseRequestOptions } from '@angular/http';
import { RouterModule } from '@angular/router';
//import { AuthHttp, AUTH_PROVIDERS, provideAuth, AuthConfig } from 'angular2-jwt';
import { AUTH_PROVIDERS } from 'angular2-jwt';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { LoginAuthGuard } from './services/login-guard.service';
import { LogoComponent } from './components/logo/logo.component';
import { LinkButtonComponent } from './components/link-button/link-button.component';
import { HeaderComponent } from './header/header.component';
import { SeasonTwoComponent } from './season-two/season-two.component';
import { AboutComponent } from './about/about.component';
import { HomevideoComponent } from './homevideo/homevideo.component';
import { TaskHighlightComponent } from './task-highlight/task-highlight.component';
import { AmbassadorComponent } from './ambassador/ambassador.component';
import { PrizesComponent } from './prizes/prizes.component';
import { EntryCriteriaComponent } from './entry-criteria/entry-criteria.component';
import { FooterComponent } from './footer/footer.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { PageHeadersComponent } from './page-headers/page-headers.component';
import { PageInfoComponent } from './page-info/page-info.component';
import { FaqItemComponent } from './faq-item/faq-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    HomeComponent,
    NotFoundComponent,
    NoAccessComponent,
    LogoComponent,
    LinkButtonComponent,
    HeaderComponent,
    SeasonTwoComponent,
    AboutComponent,
    HomevideoComponent,
    TaskHighlightComponent,
    AmbassadorComponent,
    PrizesComponent,
    EntryCriteriaComponent,
    FooterComponent,
    AboutPageComponent,
    PageHeadersComponent,
    PageInfoComponent,
    FaqItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutPageComponent },
      {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard, AdminAuthGuard]
      },
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [LoginAuthGuard]
      },
      { path: 'no-access', component: NoAccessComponent }
    ])
  ],
  providers: [
    AUTH_PROVIDERS,
    OrderService,
    AuthGuard,
    AdminAuthGuard,
    LoginAuthGuard,
    AuthService,

    { provide: ErrorHandler, useClass: AppErrorHandler },
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
