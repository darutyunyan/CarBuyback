import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { FooterComponent } from './main-layout/footer/footer.component';
import { ContactComponent } from './main-layout/contact/contact.component';
import { QuestionsComponent } from './main-layout/questions/questions.component';
import { ServicesComponent } from './main-layout/services/services.component';
import { AboutComponent } from './main-layout/about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './main-layout/header/header.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MailService } from './shared/mail.service';
import { ReviewsComponent } from './main-layout/reviews/reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    FooterComponent,
    ContactComponent,
    QuestionsComponent,
    ServicesComponent,
    AboutComponent,
    NotFoundComponent,
    HeaderComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [MailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
