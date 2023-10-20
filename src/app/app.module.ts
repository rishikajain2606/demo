import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './app.router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { RegistrationComponent } from './registration/registration.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { JAVAComponent } from './java/java.component';
import { ANGULARComponent } from './angular/angular.component';
import { SPRINGBOOTComponent } from './spring-boot/spring-boot.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
  
    ServicesComponent,
       HeaderComponent,
       NavbarComponent,
       FooterComponent,
       HomeComponent,
       CoursesComponent,
       RegistrationComponent,
       GalleryComponent,
       ContactUsComponent,
       JAVAComponent,
       ANGULARComponent,
       SPRINGBOOTComponent
  ],
  imports: [
    BrowserModule,
    routes,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }