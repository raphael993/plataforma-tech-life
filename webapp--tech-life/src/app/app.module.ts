import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AdmPanelComponent } from './adm-panel/adm-panel.component';
import { ProfPanelComponent } from './prof-panel/prof-panel.component';
import { StudentPanelComponent } from './student-panel/student-panel.component';
import { HeaderComponent } from './header/header.component';
import { UsersListComponent } from './users-list/users-list.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateClassComponent } from './create-class/create-class.component';
import { ClassesListComponent } from './classes-list/classes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdmPanelComponent,
    ProfPanelComponent,
    StudentPanelComponent,
    HeaderComponent,
    UsersListComponent,
    CreateUserComponent,
    CreateClassComponent,
    ClassesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
