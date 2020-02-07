import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { DescriptionComponent } from './components/description/description.component';

import { ReportListComponent } from './components/report-list/report-list.component';
import { UploadComponent } from '@components/upload/upload.component';
import { RegUsersComponent } from '@components/reg-users/reg-users.component';
import { NewUserRegistrationComponent } from '@components/new-user-registration/new-user-registration.component';
import { LoginComponent } from '@components/login/login.component';
import { LogoutComponent } from '@components/logout/logout.component';
import { AuthGaurdService } from '@services/auth-gaurd.service';


export const routesConfig: Routes = [
    {
        path: '',
        redirectTo: 'description',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'view',
        component: ReportListComponent, 
        canActivate:[AuthGaurdService] 
    },
    {
        path: 'upload',
        component: UploadComponent,
        canActivate:[AuthGaurdService] 
    },
    {
        path: 'description',
        component: DescriptionComponent
    },
    {
        path: 'regUsers',
        component: RegUsersComponent,
        canActivate:[AuthGaurdService] 
    },
    {
        path: 'newUserRegistration',
        component: NewUserRegistrationComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'logout',
        component: LogoutComponent,
        canActivate:[AuthGaurdService] 
    }


];