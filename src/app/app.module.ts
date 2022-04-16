import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserAuthModule } from './user-auth/user-auth.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { StudentListComponent } from './student-list/student-list.component';

@NgModule({
  declarations: [AppComponent, UserListComponent, StudentListComponent],
  imports: [BrowserModule, UserAuthModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
