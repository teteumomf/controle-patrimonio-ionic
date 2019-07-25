import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, LOCALE_ID } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { SQLite } from '@ionic-native/sqlite'
import { DatabaseProvider } from '../providers/database/database';
import { ProductProvider } from '../providers/product/product';
import { CategoryProvider } from '../providers/category/category';
import { FormsModule } from '@angular/forms';

import { Camera } from '@ionic-native/camera';
import { Base64ToGallery} from '@ionic-native/base64-to-gallery';
import { SavetogalleryProvider } from '../providers/savetogallery/savetogallery';
import { PhotoLibrary } from '@ionic-native/photo-library';
import { SubcategoryProvider } from '../providers/subcategory/subcategory';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    // Grande sacada para formatar numeros e datas no formato brasileiro
    {provide: LOCALE_ID, useValue: 'pt-BR'},
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SQLite,
    DatabaseProvider,
    ProductProvider,
    CategoryProvider,
    Camera,
    Base64ToGallery,
    SavetogalleryProvider,
    PhotoLibrary,
    SubcategoryProvider
  ]
})
export class AppModule {}
