
/* Paths for all the components created in this project is specified in this routing module */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FeedbackPageComponent } from './feedback-page/feedback-page.component';
import { LogoutPageComponent } from './logout-page/logout-page.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CoursesComponent } from './courses/courses.component';
import { AuthGaurdService } from './auth-gaurd.service';

const routes: Routes = [
  {path: 'students', component: StudentListComponent,canActivate:[AuthGaurdService]},
  {path: 'create-student', component: CreateStudentComponent,canActivate:[AuthGaurdService]},
  {path: '', redirectTo: 'login-page', pathMatch: 'full'},
  {path: 'login-page', component: LoginPageComponent},
  {path: 'home-page', component: HomePageComponent},
  {path: 'register-page', component: RegisterPageComponent},
  {path: 'update-student/:id', component: UpdateStudentComponent,canActivate:[AuthGaurdService]},
  {path: 'student-details/:id', component: StudentDetailsComponent,canActivate:[AuthGaurdService]},
  {path: 'feedback-page', component: FeedbackPageComponent,canActivate:[AuthGaurdService]},
  {path: 'logout-page', component: LogoutPageComponent,canActivate:[AuthGaurdService]},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'courses/:lowerGrade', component: CoursesComponent,canActivate:[AuthGaurdService]}
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }
