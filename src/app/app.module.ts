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
import { ReactiveFormsModule } from '@angular/forms';
import { PopularCoursesComponent } from './popular-courses/popular-courses.component';
import { RESTUsersComponent } from './rest-users/rest-users.component';
import { HttpClientModule } from '@angular/common/http';
import { User } from './user.interface';
import { UserService } from './user.service';



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
       SPRINGBOOTComponent,
       PopularCoursesComponent,
       RESTUsersComponent
  ],
  imports: [
    BrowserModule,
    routes,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
