
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
import { AirdropVideoComponent } from './airdrop-video/airdrop-video.component';
import { CreateAirDropComponent } from './create-air-drop/create-air-drop.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ErrorMessageComponent } from './create-air-drop/Components/error-message/error-message.component';
import { MatInputModule } from '@angular/material/input';
import { CheckboxComponent } from './create-air-drop/Components/checkbox/checkbox.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { StringGetterComponent } from './create-air-drop/Components/string-getter/string-getter.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ImagePreviewComponent } from './create-air-drop/components/image-preview/image-preview.component';


 




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
    AudienceComponent,
    AirdropVideoComponent,
    CreateAirDropComponent,
    ErrorMessageComponent,
    CheckboxComponent,
    StringGetterComponent,
    ImagePreviewComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    AnimateOnScrollModule.forRoot(),
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule ,
    FormsModule,
    MatInputModule,
    MatSnackBarModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
