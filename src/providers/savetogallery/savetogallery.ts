import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery'; 
//import { Camera, CameraOptions} from '@ionic-native/camera';
//import { PhotoLibrary } from '@ionic-native/photo-library';


@Injectable()
export class SavetogalleryProvider {


  constructor(private b64ToGallery: Base64ToGallery) {

  }

  public SelectCategory(conserv: string, id: number, numero: number, base64imagem: string){
      if(id == 1){
        let ctg = 'Executivo_';
        this.saveToGallery(conserv, ctg, numero, base64imagem)
       // this.toast.create({ message: 'Foto anexada com sucesso.', duration: 3000, position: 'botton' }).present();
      } else if(id == 2){
        let ctg = 'AssistenciaSocial_';
        this.saveToGallery(conserv, ctg, numero, base64imagem)
       // this.toast.create({ message: 'Foto anexada com sucesso.', duration: 3000, position: 'botton' }).present();
      } else{
        let ctg = 'Saude_';
        this.saveToGallery(conserv, ctg, numero, base64imagem)
       // this.toast.create({ message: 'Foto anexada com sucesso.', duration: 3000, position: 'botton' }).present();
      }
  }

  public saveToGallery(conserv: string, categoria: string, numer: number, base64imagem: string){

    this.b64ToGallery.base64ToGallery( base64imagem, 
      { 
        prefix: categoria + numer + '_' + conserv + '_',
        mediaScanner: true 
      })
      .then( res => console.log('Imagem salva com sucesso na galeria', res),
      err => console.log('Erro ao salvar imagem na galeria', err)
    );
    /*var file = base64imagem;
    var album = categoria;

    this.photoLibrary.requestAuthorization().then(() => {
      this.photoLibrary.saveImage(file, album)
      .then((libraryItem) => {
        //this.toast.create({ message: 'Album criado e foto salva com sucesso.', duration: 8000, position: 'botton' }).present();
        console.log('Salvo!');
      })
      .catch(e => console.error('Erro ao criar as tabelas', e)),
      {
        thumbnailWidth: 512,
        thumbnailHeight: 384,
        quality: 0.8,
      }
    })
    .catch(err => console.log('permissions weren\'t granted'));
  
  }*/
  }

}
