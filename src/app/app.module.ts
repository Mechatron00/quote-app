import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule} from '@angular/common/http';
import { QuoteComponent } from './quote/quote.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';

import { ReactiveFormsModule } from '@angular/forms';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatChipsModule} from '@angular/material/chips';


@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    NavbarComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTooltipModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
