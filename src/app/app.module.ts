import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Thirdparty modules
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainComponent } from './components/main/main.component';
import { ChartComponent } from './components/chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    SidebarComponent,
    MainComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
