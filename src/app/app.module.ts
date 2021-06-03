import { UserSelfieService } from './services/usage/user.selfie';
import { SelfieImageUploadService } from './services/usage/upload.selfie';
import { TaskSelfieComponent } from './task-selfie/task-selfie.component';
import { LastTaskService } from './services/usage/last.task';
import { PaymentVerificationService } from './services/usage/verify.payment';
import { PinVerificationService } from './services/usage/verify.pin';
import { PinUsageService } from './services/usage/use.pin';
import { TaskInfoService } from './services/usage/task.info';
import { TaskSelfiesService } from './services/usage/task.selfies';
import { PublicViewService } from './services/usage/meminfo';
import { ProfileInfoService } from './services/usage/profile.service';
import { ProfileImageUploadService } from './services/usage/pim.service';
import { UploadAuthGuardService } from './services/upload-auth-guard.service';
import { RegService } from './services/usage/reg.service';
import { environment } from 'environments/environment';
import { AdminAuthGuard } from './services/admin-auth-guard.service';
import { AuthGuard } from './services/auth-guard.service';
import { AppErrorHandler } from './common/app-error-handler';
import { OrderService } from './services/order.service';
import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, BaseRequestOptions, RequestOptions } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AuthHttp, AUTH_PROVIDERS, provideAuth, AuthConfig } from 'angular2-jwt';
//import { AUTH_PROVIDERS } from 'angular2-jwt';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
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
import { FaqPageComponent } from './faq-page/faq-page.component';
import { TaskHighlightsComponent } from './task-highlights/task-highlights.component';
import { TaskService } from './services/usage/tasks.services';
import { GeneralService } from './services/general.service';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { BrandAmbComponent } from './brand-amb/brand-amb.component';
import { RegisterComponent } from './register/register.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { UploadPageComponent } from './upload-page/upload-page.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { SelfiesComponent } from './selfies/selfies.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ProfileGuardService } from './services/profile-guard';
import { PublicViewComponent } from './public-view/public-view.component';
import { PublicSelfieService } from './services/usage/selfies';
import { NoDataComponent } from './components/no-data/no-data.component';

/* fix for jwt error that gave me sleepless night: - ERROR in Error encountered resolving symbol values statically. Only initialized variables and constants can be referenced because the value of this variable is needed by the template compiler (position 80:22 in the original .ts file), resolving symbol AUTH_PROVIDERS in...
export const authHttpServiceFactory = (http: Http, options: RequestOptions) => {
  return new AuthHttp( new AuthConfig({}), http, options);
} */

/* End of fix */

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
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
    FaqItemComponent,
    FaqPageComponent,
    TaskHighlightsComponent,
    BrandAmbComponent,
    RegisterComponent,
    ImageUploadComponent,
    UploadPageComponent,
    ProfileInfoComponent,
    SelfiesComponent,
    ProfilePageComponent,
    PublicViewComponent,
    NoDataComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutPageComponent },
      { path: 'faq', component: FaqPageComponent },
      { path: 'tasks', component: TaskHighlightsComponent },
      { path: 'ambassador', component: BrandAmbComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'register/:reference', component: RegisterComponent },
      { path: 'public/:username', component: PublicViewComponent },
      { path: 'tasks/:id', component: TaskHighlightsComponent },
      {
        path: 'profile',
        component: ProfilePageComponent,
        canActivate: [AuthGuard, ProfileGuardService]
      },
      {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard, AdminAuthGuard]
      },
      {
        path: 'upload',
        component: UploadPageComponent,
        canActivate: [AuthGuard, UploadAuthGuardService]
      },
      {
        path: 'upload/:id',
        component: UploadPageComponent,
        canActivate: [AuthGuard, UploadAuthGuardService]
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
    //AuthHttp,
    //AuthConfig,
    OrderService,
    AuthGuard,
    AdminAuthGuard,
    LoginAuthGuard,
    AuthService,
    TaskService,
    GeneralService,
    RegService,
    UploadAuthGuardService,
    ProfileImageUploadService,
    ProfileGuardService,
    ProfileInfoService,
    PublicViewService,
    PublicSelfieService,
    TaskSelfiesService,
    TaskInfoService,
    PinUsageService,
    PinVerificationService,
    PaymentVerificationService,
    LastTaskService,
    SelfieImageUploadService,
    UserSelfieService,
    { provide: ErrorHandler, useClass: AppErrorHandler },
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
