import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SuperHeaderComponent } from './super-header/super-header.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SuperFooterComponent } from './super-footer/super-footer.component';
import { FaqComponent } from './faq/faq.component';
import { UsecaseComponent } from './usecase/usecase.component';
import { OpinionComponent } from './opinion/opinion.component';
import { BodyComponent } from './body/body.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { TyperComponent } from './utils/typer/typer.component';
import { MatIconModule } from '@angular/material/icon';
import { PreviewProjectComponent } from './preview-project/preview-project.component';
import { VerifyICOComponent } from './verify-ico/verify-ico.component';
import { AudienceComponent } from './audience/audience.component';

@NgModule({
  declarations: [
    AppComponent,
    SuperHeaderComponent,
    HeaderComponent,
    FooterComponent,
    SuperFooterComponent,
    FaqComponent,
    UsecaseComponent,
    OpinionComponent,
    BodyComponent,
    DashboardComponent,
    TyperComponent,
    PreviewProjectComponent,
    VerifyICOComponent,
    AudienceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    AnimateOnScrollModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
