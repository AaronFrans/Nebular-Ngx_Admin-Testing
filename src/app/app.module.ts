import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
  NbThemeModule,
  NbLayoutModule,
  NbCardModule,
  NbButtonModule,
  NbActionsModule,
  NbIconModule,
  NbUserModule,
  NbCheckboxModule,
  NbSidebarModule,
  NbInputModule,
} from '@nebular/theme';
import { ButtonTestingComponent } from './button-testing/button-testing.component';
import { FormTestingComponent } from './form-testing/form-testing.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent, ButtonTestingComponent, FormTestingComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    NgbModule,
    NbThemeModule.forRoot({ name: 'corporate' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbIconModule,
    NbUserModule,
    NbCheckboxModule,
    NbSidebarModule.forRoot(),
    NbInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
