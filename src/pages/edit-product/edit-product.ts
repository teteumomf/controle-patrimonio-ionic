import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ProductProvider, Product } from '../../providers/product/product'
import { CategoryProvider } from '../../providers/category/category'
import { SubcategoryProvider} from '../../providers/subcategory/subcategory';
import { Camera, CameraOptions} from '@ionic-native/camera';
import { SavetogalleryProvider } from '../../providers/savetogallery/savetogallery'; 


@IonicPage()
@Component({
  selector: 'page-edit-product',
  templateUrl: 'edit-product.html',
})
export class EditProductPage {
  model: Product;
  categories: any[];
  subcategories: any[];
  subcat1: any[];
  subcat2: any[];
  subcat3: any[];
  photo: string = '';
  numero: number;
  base64imagem: string = '';
  base64image: string = '';


  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private toast: ToastController, private productProvider: ProductProvider,
    private categoryProvider: CategoryProvider,private camera: Camera,
    private savetogallery: SavetogalleryProvider,
    private subcategoryProvider: SubcategoryProvider) {

    this.model = new Product();
    this.photo = '';
    if (this.navParams.data.id) {
      this.productProvider.get(this.navParams.data.id)
        .then((result: any) => {
          this.model = result;
          //Carregar a foto já existente na tela.
          this.photo = this.model.base64; 
            
        })
    }


  }
  
  takePicture(){
    this.photo = '';

    const options: CameraOptions = {
      quality: 45,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE,
      targetHeight: 450,
      targetWidth: 500
      //saveToPhotoAlbum: true
    }

    this.camera.getPicture(options)
      .then((imagemData) =>{
        this.base64image = 'data:image/png;base64,' + imagemData;
        this.photo = this.base64image;
        //Salvando as informações para utilizar no base64toGallery
        this.base64imagem = imagemData;
      }, (error) =>{
        console.error(error);
      })
      .catch((error) =>{
        console.error(error);
      })
  }


  /**
   * Runs when the page has loaded
   */
  ionViewDidLoad() {
    this.categoryProvider.getAll()
      .then((result: any[]) => {
        this.categories = result;
      })
      .catch(() => {
        this.toast.create({ message: 'Erro ao carregar as categorias.', duration: 3000, position: 'botton' }).present();
      });



    this.subcategoryProvider.getAllSub()
      .then((result1: any[]) => {
        this.subcategories = result1;
      })
      .catch(() => {
        this.toast.create({ message: 'Erro ao carregar as subcategorias.', duration: 3000, position: 'botton' }).present();
      })


    this.subcategoryProvider.getAllSubOne()
      .then((result1: any[]) => {
        this.subcat1 = result1;
      })
      .catch(() => {
        this.toast.create({ message: 'Erro ao carregar as subcategorias.', duration: 3000, position: 'botton' }).present();
      })
  
    this.subcategoryProvider.getAllSubTwo()
      .then((result2: any[]) => {
        this.subcat2 = result2;
      })
      .catch(() => {
        this.toast.create({ message: 'Erro ao carregar as subcategorias.', duration: 3000, position: 'botton' }).present();
      })
  
    this.subcategoryProvider.getAllSubThree()
      .then((result3: any[]) => {
        this.subcat3 = result3;
      })
      .catch(() => {
        this.toast.create({ message: 'Erro ao carregar as subcategorias.', duration: 3000, position: 'botton' }).present();
      })
  }


  save() {
    this.saveProduct()
      .then(() => {
        this.toast.create({ message: 'Patrimônio salvo.', duration: 3000, position: 'botton' }).present();
        this.navCtrl.pop();
      })
      .catch(() => {
        this.toast.create({ message: 'Erro ao salvar o patrimônio.', duration: 3000, position: 'botton' }).present();
      });
  }

  private saveProduct() {
    //Obtendo o endereço em string da foto 
    this.model.base64 = this.base64image;
   //Pegando o número salvo da tarjeta para posteriormente salvar a foto com esse número
    this.numero = this.model.number;
    //Chamando método para salvar foto na galeria
    //this.saveToGallery(this.numero);
    this.savetogallery.SelectCategory(this.model.conserv, this.model.category_id, this.numero, this.base64imagem);
    if (this.model.id) {
      return this.productProvider.update(this.model);
    } else {
      return this.productProvider.insert(this.model);
    }

  }

 
  onSelect(id){
   // this.toast.create({ message: id + 'AQUI2', duration: 10000, position: 'botton' }).present();

    if(id == 1){
      this.subcategories.length = 0;
      this.subcategories = this.subcat1.splice(0);
      //this.toast.create({ message: id + 'AQUIIIIII3', duration: 10000, position: 'botton' }).present();
    }else if(id == 2){
      this.subcategories.length = 0;
      this.subcategories = this.subcat2.splice(0);
      //this.toast.create({ message: id + 'AQUIIIIII4', duration: 10000, position: 'botton' }).present();
    }else if(id == 3){
      this.subcategories.length = 0;
      this.subcategories = this.subcat3.splice(0);
      //this.toast.create({ message: id + 'AQUIIIIII5', duration: 10000, position: 'botton' }).present();
    }
  }
}
