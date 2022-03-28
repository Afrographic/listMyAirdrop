import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  faqs: Faq[] = [
    {
      title: "Why is it important that QryptoBank is regulated?",
      content: "QryptoBank is a payment institution regulated by the European electronic money issuer Nium. All flows are subject to control and security standards of EME and MASTERCARD. Each user benefits from the guarantees linked to the Mastercard network on electronic money flows.",
      visible: false
    },
    {
      title: "How can I buy and sell my NFTs or crypto?",
      content: "The QryptoBank card is designed to be used for all your NFT and crypto activities.",
      visible: false
    },
    {
      title: "What is Staking ?",
      content: "Staking is to put your digital assets into a Smart Contract to generate a yield.",
      visible: false
    },
    {
      title: "Can I become a Liquidity Provider (LP) to earn passive income?",
      content: "Yes and as an LP, you choose the exact amount you want to allocate and for how long you want to commit before enjoying your earnings.",
      visible: false
    },
    {
      title: "How do I cash out my profits?",
      content: "Directly on your QryptoBank card",
      visible: false
    },
    {
      title: "Where can I use my card?",
      content: "...Just everywhere.",
      visible: false
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  currentFaqIndex: number = -1;
  openFAQ(faq: Faq) {
    // uncollpase the previous one
    if (this.currentFaqIndex != -1) {
      if (this.currentFaqIndex != this.faqs.indexOf(faq)) {
        if (this.faqs[this.currentFaqIndex].visible) {
          this.faqs[this.currentFaqIndex].visible = false;
        }
      }
    }
    this.currentFaqIndex = this.faqs.indexOf(faq);

    faq.visible = !faq.visible;

    console.log(this.currentFaqIndex);
  }

}

interface Faq {
  title: string;
  content: string;
  visible: boolean;
}