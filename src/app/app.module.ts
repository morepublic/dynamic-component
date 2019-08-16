import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MediaAssetComponent } from './media-asset/media-asset.component';
import { SafeHtmlPipe } from './safe-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MediaAssetComponent,
    SafeHtmlPipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MediaAssetComponent],
})
export class AppModule { }
