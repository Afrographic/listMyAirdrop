
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
import { ImagePreviewComponent } from './create-air-drop/Components/image-preview/image-preview.component';
import { FileUploadComponentComponent } from './create-air-drop/Components/file-upload-component/file-upload-component.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AirdropCreatorComponent } from './create-air-drop/Components/airdrop-creator/airdrop-creator.component';
import { AddTaskComponent } from './create-air-drop/Components/add-task/add-task.component';
import { LoginComponent } from './create-air-drop/Components/account/login/login.component';
import { RegisterComponent } from './create-air-drop/Components/account/register/register.component';
import { AccountComponent } from './create-air-drop/components/account/account.component';
import { PositiveMessageComponent } from './create-air-drop/Components/positive-message/positive-message.component';








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
    FileUploadComponentComponent,
    AirdropCreatorComponent,
    AddTaskComponent,
    LoginComponent,
    RegisterComponent,
    AccountComponent,
    PositiveMessageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    AnimateOnScrollModule.forRoot(),
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
