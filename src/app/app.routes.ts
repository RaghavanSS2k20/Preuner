import { Routes } from '@angular/router';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { authbasedGuard } from './gaurds/authbased.guard';
import { rolebasedGuard } from './gaurds/rolebased.guard';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { TestComponent } from './test/test.component';
import { ProfileComponent } from './profile/profile.component';
import { NotAccesibleComponent } from './errorHandling/not-accesible/not-accesible.component';
export const routes: Routes = [
    {
        path:'', component:LandingpageComponent
    },
    {
        path:'admin', component:AdminpageComponent,
        canActivate:[rolebasedGuard],
        data: { expectedRole: 'admin' }

    },
    {
        path:'test', component:TestComponent
    },
    {
        path:'login', component:LoginpageComponent
    },
    {
        path:'dashboard', component:DashboardComponent,
        canActivate:[authbasedGuard]
    },
    {
        path:'profile', component:ProfileComponent
    },
    {
        path:'**', component:NotAccesibleComponent
        
    },
    {
        path:'forbidden', component:NotAccesibleComponent
    },
    
];
