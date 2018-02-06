import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormsComponent } from './forms/forms.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
   
    { path: "login", component: LoginComponent },
    { path: "signup", component: FormsComponent },
    { path: "showusers", component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})

export class AppRoutingModule {

}