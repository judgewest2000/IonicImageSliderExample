import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var juxtapose : any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('juxtaposeslider') juxtaposeSlider: ElementRef;

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad(){

    const getRandomInt = (max:number) => {
      return Math.floor(Math.random() * Math.floor(max));
    }

    const element = this.juxtaposeSlider.nativeElement as HTMLDivElement;
    
    const id = `juxtapose-${getRandomInt(1000000)}`;

    element.id= id;

    const slider = new juxtapose.JXSlider(`#${id}`,
    [
        {
            src: 'assets/images/first.jpg',
            label: '2009',
            credit: 'First'
        },
        {
            src: 'assets/images/second.jpg',
            label: '2014',
            credit: 'Second'
        }
    ],
    {
        animate: true,
        showLabels: true,
        showCredits: true,
        startingPosition: "50%"
    });
  }



}
