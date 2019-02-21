import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { BitcoinProvider } from '../../providers/bitcoin/bitcoin';
import { Bitcoin } from '../../models/bitcoin.model';
import { Observable } from 'rxjs/Observable';


@IonicPage()
@Component({
  selector: 'page-bitcoin',
  templateUrl: 'bitcoin.html',
})
export class BitcoinPage {
  currency: string = 'GBP';
  bitcoin$: Observable<Bitcoin>


  constructor(private bitcoinProvider: BitcoinProvider) {
  }

  ionViewWillLoad(){
    this.getBitcoinPrice();
  }

  getBitcoinPrice(){

    this.bitcoin$ = this.bitcoinProvider.getBitcoinPrice(this.currency);
  }

}
