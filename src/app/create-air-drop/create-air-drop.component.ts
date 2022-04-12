import { ErrorHandler } from './../tools/errorHandler';
import { sleep } from 'src/app/constant';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-air-drop',
  templateUrl: './create-air-drop.component.html',
  styleUrls: ['./create-air-drop.component.scss']
})
export class CreateAirDropComponent implements OnInit {
  airDropData: AirDropData = {};

  // Error State
  errorName = false;
  errorWebsiteURL = false;
  errorPresentingWebsiteURL = false;
  errorHaveAirDropHunters = false;
  errorOfficialEmail = false;
  errorTotalRewardInToken = false;
  errorTotalRewardInUSD = false;
  errrorAirDropStartDate = false;
  errorAirDropEndDate = false;
  errorTasks = false;
  errorHaveQuiz = false;
  errorSocialMediaUrls = false;
  errorLogo = false;
  errorWhitePaper = false;
  errorListingType = false;
  errorEmailToFinalizeOrder = false;
  // Question State
  currentQuestion = 1;
  totalQuestions = 16;
  // Animation state
  swipeLeftOpen = false;
  swipeLeftClose = false;
  swipeRightOpen = false;
  swipeRightClose = false;


  lazyLoadActive = false;


  setClasses() {
    return {
      'swipeLeftOpen': this.swipeLeftOpen,
      'swipeLeftClose': this.swipeLeftClose,
      'swipeRightOpen': this.swipeRightOpen,
      'swipeRightClose': this.swipeRightClose,
    };
  }
  constructor() { }

  ngOnInit(): void {
    console.log(ErrorHandler.correctURL("https://stackoverflow.com/questions/161738/what-is-the-best-regular-expression-to-check-if-a-string-is-a-valid-url"));
  }

  async transitionNext() {
    this.lazyLoadActive = true;
    this.swipeLeftOpen = true;
    await sleep(750);
    this.currentQuestion++;
    this.swipeLeftClose = true;
    this.lazyLoadActive = false;
    await sleep(1200);
    this.clearAnimation();
  }

  clearAnimation() {
    this.swipeLeftOpen = false;
    this.swipeLeftClose = false;
    this.swipeRightOpen = false;
    this.swipeRightClose = false;
  }
  async transitionPrevious() {
    this.lazyLoadActive = true;
    this.swipeRightOpen = true;
    await sleep(750);
    this.currentQuestion--;
    this.swipeRightClose = true;
    this.lazyLoadActive = false;
    await sleep(1200);
    this.clearAnimation();
  }

  next() {
    this.transitionNext();
  }

  previous() {
    this.transitionPrevious();
  }

  getAirDropHuntersResponse(choice:any){
    console.log(choice);
  }

  getWhitePaper(whitePaper:File){
    console.log(whitePaper);
  }

}


interface AirDropData {
  name?: string;
  websiteURL?: string;
  presentingWebsiteURL?: string;
  haveAirDropHunters?: boolean;
  officialEmail?: string;
  totalRewardInToken?: number;
  totalRewardInUSD?: number;
  airDropStartDate?: any;
  airDropEndDate?: any;
  tasks?: string[];
  haveQuiz?: boolean;
  socialMediaUrls?: string[];
  logo?: File;
  whitePaper?: File;
  listingType?: string;
  emailToFinalizeOrder?: string;
}