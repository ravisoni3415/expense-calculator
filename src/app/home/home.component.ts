import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';
import { ALL_TRANSACTION, Transcation } from '../model/transcation.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  card: any;
  allTranscation: Array<Transcation>;
  filteredTranscation: Array<Transcation>;
  options: any;

  constructor() {
    this.allTranscation = new Array<Transcation>();
    this.filteredTranscation = new Array<Transcation>();
  }

  ngOnInit(): void {
    this.options = 'All';
    this.card = document.querySelector('.card');
    this.card?.addEventListener('click', () => {
      this.card.classList.toggle('is-flipped');
    });
    this.allTranscation = ALL_TRANSACTION;
    this.filteredTranscation = this.allTranscation;
  }

  applyFilter(event: string) {
    if (event == 'Shopping') {
      this.filteredTranscation = this.allTranscation.filter(
        (i) => i.product_type == 'Shopping'
      );
    }
    if (event == 'Transfer') {
      this.filteredTranscation = this.allTranscation.filter(
        (i) => i.product_type == 'Food & Bav.'
      );
    }
    if (event == 'Subscription') {
      this.filteredTranscation = this.allTranscation.filter(
        (i) => i.product_type == 'Subscription'
      );
    }
    if (event == 'All') {
      this.filteredTranscation = this.allTranscation;
    }
  }
}
