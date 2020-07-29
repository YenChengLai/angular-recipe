import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ShareModule } from '../shared/share.module';

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    RouterModule.forChild([{
      path: '', component: AuthComponent
    }]),
    ShareModule,
    FormsModule
  ],
  exports: [
    AuthComponent
  ]
})
export class AuthModule { }
