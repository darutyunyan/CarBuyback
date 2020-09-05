import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MenuComponent } from './shared/menu/menu.component';
import { CarouselComponent } from './shared/carousel/carousel.component';

import { AngularYandexMapsModule, IConfig,  } from 'angular8-yandex-maps';
import { ContactComponent } from './shared/contact/contact.component';
import { QuestionsComponent } from './shared/questions/questions.component';


const mapConfig: IConfig = {
  apikey: '7fb7e536-2016-4631-b4b1-2111c2675221',
  lang: 'ru_RU',
};

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    FooterComponent,
    MenuComponent,
    CarouselComponent,
    ContactComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularYandexMapsModule.forRoot(mapConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
