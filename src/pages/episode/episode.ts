import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { SocialSharing } from '@ionic-native/social-sharing';

@IonicPage()
@Component({
  selector: 'page-episode',
  templateUrl: 'episode.html',
})
export class EpisodePage {

  //subitem = [];
  public subitem;

  constructor(public navCtrl: NavController, public navParams: NavParams, private socialSharing: SocialSharing) {
    
    this.subitem = navParams.get('subitem')
  
  }

  share() {
    this.socialSharing.share(
      this.subitem.shareMessage, 
      this.subitem.shareSubject, 
      this.subitem.shareImage, 
      this.subitem.shareLink, 
    ).
      then(() => {
      console.log('Shared!');
    }).catch((err) => {
      console.log('Oops, something went wrong:', err);
    });
  }

}
