import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { FooterComponent } from './main-layout/footer/footer.component';
import { AngularYandexMapsModule, IConfig,  } from 'angular8-yandex-maps';
import { ContactComponent } from './main-layout/contact/contact.component';
import { QuestionsComponent } from './main-layout/questions/questions.component';
import { ServicesComponent } from './main-layout/services/services.component';
import { AboutComponent } from './main-layout/about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './main-layout/header/header.component';


const mapConfig: IConfig = {
  apikey: '7fb7e536-2016-4631-b4b1-2111c2675221',
  lang: 'ru_RU',
};

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
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularYandexMapsModule.forRoot(mapConfig),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
