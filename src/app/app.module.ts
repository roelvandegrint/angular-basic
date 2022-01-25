import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';
import { HttpClientModule } from '@angular/common/http';
import { ConfigurationService } from './configuration.service';
import { LoginComponent } from './login-component/login.component';
import { BbkSearchResultsComponent } from './bbk-search-results-component/bbk-search-results.component';
import { HomeComponent } from './home-component/home.component';
import { BbkDetailsComponent } from './bbk-details-component/bbk-details.component';

@NgModule({
  declarations: [
    AppComponent,
    BbkSearchResultsComponent,
    BbkDetailsComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropDownsModule,
    BrowserAnimationsModule,
    GridModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (configurationService: ConfigurationService) => async () => {
        await configurationService.load();
      },
      deps: [ConfigurationService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
