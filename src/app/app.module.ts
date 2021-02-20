import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { CompaignComponent } from './compaign/compaign.component';
import { CampaignService } from './campaign.service';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    CompaignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CampaignService],
  bootstrap: [AppComponent]
})
export class AppModule { }
