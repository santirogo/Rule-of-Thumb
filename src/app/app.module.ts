import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrevRulingsComponent } from './components/prev-rulings/prev-rulings.component';
import { CustomSelectComponent } from './components/shared/custom-select/custom-select.component';
import { CardComponent } from './components/card/card.component';
import { GaugeBarComponent } from './components/card/gauge-bar/gauge-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    PrevRulingsComponent,
    CustomSelectComponent,
    CardComponent,
    GaugeBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
