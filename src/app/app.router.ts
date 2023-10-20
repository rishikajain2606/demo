//import { ModuleWithProviders } from '@angular/core';
//import {RouterModule} from ‘@angular/core’;
import { Routes, RouterModule } from '@angular/router'; 
//module for implementing routing

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RegistrationComponent } from './registration/registration.component';
import { JAVAComponent } from './java/java.component';
import { ANGULARComponent } from './angular/angular.component';
import { SPRINGBOOTComponent } from './spring-boot/spring-boot.component';
import { HomeComponent } from './home/home.component';

//Create and export a variable called Router in the app.routing.ts, which would be a collection of all routes inside the Angular application.
// pathMatch is specifying a strict matching of path to reach the destination page.
// In the routes array, the path object is '' which means the path http://localhost:4200/ , we have not provided any destination 
 //   to this object, but we are redirecting this path to items path using redirectTo key.
export const router: Routes = [
    { path: '', redirectTo: 'about', pathMatch: 'full' }, //default page
    { path: 'about', component: AboutComponent },
    { path: 'services', component: ServicesComponent },
    {path: 'contact-us', component:ContactUsComponent},
    {path: 'gallery',component:GalleryComponent},
    {path: 'registration', component:RegistrationComponent},
    {path:'java', component:JAVAComponent},
    {path:'angular', component:ANGULARComponent},
    {path:'spring-boot',component:SPRINGBOOTComponent},
    {path:'home',component:HomeComponent}
];
//RouterModule.forRoot is for creating routes for the entire application
//  pass the routes array in the RouterModule using RouterModule.forRoot(router)
export const routes = RouterModule.forRoot(router);
//CREATE THE app.router.ts inside the App folder

//export const routes: ModuleWithProviders = RouterModule.forRoot(router);