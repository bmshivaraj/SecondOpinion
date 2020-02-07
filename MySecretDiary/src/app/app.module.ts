import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { routesConfig } from './routesConfig';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DescriptionComponent } from './components/description/description.component';

import { ReportCardComponent } from './components/report-card/report-card.component';
import { ReportListComponent } from './components/report-list/report-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UploadComponent } from './components/upload/upload.component';
import { RegUsersComponent } from './components/reg-users/reg-users.component';
import { NewUserRegistrationComponent } from './components/new-user-registration/new-user-registration.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { BasicAuthHtppInterceptorServiceService } from '@services/basic-auth-htpp-interceptor-service.service';
import { ConstantsService } from '@services/constants.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DescriptionComponent,
    ReportCardComponent,
    ReportListComponent,
    UploadComponent,
    RegUsersComponent,
    NewUserRegistrationComponent,
    LoginComponent,
    LogoutComponent
    
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule,
    RouterModule.forRoot(routesConfig, { useHash: true })
  ],
  providers: [
    ConstantsService,
    {  
      provide:HTTP_INTERCEPTORS, useClass:BasicAuthHtppInterceptorServiceService, multi:true 
    }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
