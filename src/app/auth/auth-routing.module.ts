import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthComponent} from './auth.component';
import {LogOutComponent} from './log-out/log-out.component';


const routes: Routes = [
    {
        path: '',
        component: AuthComponent,
        children: [
            {path: '', redirectTo: 'login', pathMatch: 'prefix'},
            {path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
            {path: 'logout', component: LogOutComponent},
            {path: 'sign-up', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule)}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {
}
