import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { IntroComponent } from './components/intro/intro.component';
import { MainComponent } from './components/main/main.component';
import { CardComponent } from './components/card/card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IconMeaningComponent } from './components/icon-meaning/icon-meaning.component';
import { ChefOfTheWeekComponent } from './components/chef-of-the-week/chef-of-the-week.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroComponent,
    MainComponent,
    CardComponent,
    IconMeaningComponent,
    ChefOfTheWeekComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
