import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from './app-routing.module';
import { PreloaderComponent } from './preloader/preloader.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { FeaturesComponent } from './home/features/features.component';
import { CardFeatureComponent } from './home/features/card-feature/card-feature.component';
import { AboutUsComponent } from './home/about-us/about-us.component';
import { FeedbackComponent } from './home/feedback/feedback.component';
import { FeedbackProfileComponent } from './home/feedback/feedback-profile/feedback-profile.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PreloaderComponent,
    NavbarComponent,
    WelcomeComponent,
    FeaturesComponent,
    CardFeatureComponent,
    AboutUsComponent,
    FeedbackComponent,
    FeedbackProfileComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
