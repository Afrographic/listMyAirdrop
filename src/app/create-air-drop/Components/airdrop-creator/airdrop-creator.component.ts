import { AirDropTask } from 'src/app/models/task';

import { sleep } from 'src/app/constant';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Validator } from 'src/app/tools/validator';
import { AirDropData } from 'src/app/models/airdrop';


@Component({
  selector: 'app-airdrop-creator',
  templateUrl: './airdrop-creator.component.html',
  styleUrls: ['./airdrop-creator.component.scss']
})
export class AirdropCreatorComponent implements OnInit {

  airDropData: AirDropData = {};
  closing = false;
  @Output() closeEvent = new EventEmitter();

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
  saving = false;
  lazyLoadActive = false;







  setClasses() {
    return {
      'swipeLeftOpen': this.swipeLeftOpen,
      'swipeLeftClose': this.swipeLeftClose,
      'swipeRightOpen': this.swipeRightOpen,
      'swipeRightClose': this.swipeRightClose,
    };
  }

  async close() {
    this.closing = true;
    await sleep(1000);
    this.closing = true;
    this.closeEvent.emit();
  }
  constructor() { }

  ngOnInit(): void {
    this.nextWithEnterKey();
    this.nextWithdirectionKey();
    this.previousWithdirectionKey();
  }

  nextWithEnterKey() {
    let that = this;
    document.addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        that.next(that.currentQuestion);
      }
    });
  }
  nextWithdirectionKey() {
    const RightKeyCode = 39;
    let that = this;
    document.addEventListener("keyup", function (event) {
      if (event.keyCode === RightKeyCode) {
        that.next(that.currentQuestion);
      }
    });
  }
  previousWithdirectionKey() {
    const LeftKeyCode = 37;
    let that = this;
    document.addEventListener("keyup", function (event) {
      if (event.keyCode === LeftKeyCode) {
        if (that.currentQuestion > 1)
          that.previous();
      }
    });
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

  next(questionIndex: number) {
    this.validateQuestion(questionIndex);
  }

  validateName() {
    if (Validator.correctString(`${this.airDropData.name}`)) {
      this.transitionNext();
      this.errorName = false;
    } else {
      this.errorName = true;
    }
  }

  validateWebsiteURL() {
    if (Validator.correctURL(`${this.airDropData.websiteURL}`)) {
      this.transitionNext();
      this.errorWebsiteURL = false;
    } else {
      this.errorWebsiteURL = true;
    }
  }
  validatePresentingWebsiteURL() {
    if (Validator.correctURL(`${this.airDropData.presentingWebsiteURL}`)) {
      this.transitionNext();
      this.errorPresentingWebsiteURL = false;
    } else {
      this.errorPresentingWebsiteURL = true;
    }
  }

  validateHaveAirDropHunters() {
    if (!Validator.isnull(`${this.airDropData.haveAirDropHunters}`)) {
      this.transitionNext();
      this.errorHaveAirDropHunters = false;
    } else {
      this.errorHaveAirDropHunters = true;
    }
  }
  validateOfficialEmail() {
    if (Validator.correctEmail(`${this.airDropData.officialEmail}`)) {
      this.transitionNext();
      this.errorOfficialEmail = false;
    } else {
      this.errorOfficialEmail = true;
    }
  }
  validateTotalRewardInToken() {
    if (Validator.correctNumber(`${this.airDropData.totalRewardInToken}`)) {
      this.transitionNext();
      this.errorTotalRewardInToken = false;
    } else {
      this.errorTotalRewardInToken = true;
    }
  }
  validateTotalRewardInUSD() {
    if (Validator.correctNumber(`${this.airDropData.totalRewardInUSD}`)) {
      this.transitionNext();
      this.errorTotalRewardInUSD = false;
    } else {
      this.errorTotalRewardInUSD = true;
    }
  }
  validateAirDropStartDate() {
    if (!Validator.isnull(`${this.airDropData.airDropStartDate}`)) {
      this.transitionNext();
      this.errrorAirDropStartDate = false;
    } else {
      this.errrorAirDropStartDate = true;
    }
  }
  validateAirDropEndDate() {
    if (!Validator.isnull(`${this.airDropData.airDropEndDate}`)) {
      this.transitionNext();
      this.errorAirDropEndDate = false;
    } else {
      this.errorAirDropEndDate = true;
    }
  }

  validateTask() {
    if (Validator.filledArray(this.airDropData.tasks)) {
      this.transitionNext();
      this.errorTasks = false;
    } else {
      this.errorTasks = true;
    }
  }
  validateErrorHaveQuiz() {
    if (!Validator.isnull(`${this.airDropData.haveQuiz}`)) {
      this.transitionNext();
      this.errorHaveQuiz = false;
    } else {
      this.errorHaveQuiz = true;
    }
  }

  validateSocialMediaUrls() {
    if (Validator.filledArray(this.airDropData.socialMediaUrls)) {
      this.transitionNext();
      this.errorSocialMediaUrls = false;
    } else {
      this.errorSocialMediaUrls = true;
    }
  }
  validateLogo() {
    if (Validator.correctFile(this.airDropData.logo)) {
      this.transitionNext();
      this.errorLogo = false;
    } else {
      this.errorLogo = true;
    }
  }

  validateWhitePaper() {
    if (Validator.correctFile(this.airDropData.whitePaper)) {
      this.transitionNext();
      this.errorWhitePaper = false;
    } else {
      this.errorWhitePaper = true;
    }
  }

  validateListingType() {
    console.log(Validator.correctString(`${this.airDropData.listingType}`));
    if (Validator.correctString(`${this.airDropData.listingType}`)) {
      this.transitionNext();
      this.errorListingType = false;
    } else {
      this.errorListingType = true;
    }
  }

  validateEmailToFinalizeOrder() {
    if (Validator.correctEmail(`${this.airDropData.emailToFinalizeOrder}`)) {
      this.transitionNext();
      this.errorEmailToFinalizeOrder = false;
      this.saveAirDrop();
    } else {
      this.errorEmailToFinalizeOrder = true;
    }
  }

  async saveAirDrop() {
    this.saving = true;
    await sleep(2000);
    this.saving = false;
    await sleep(2000);
    this.close();
  }

  validateQuestion(questionIndex: number) {
    switch (questionIndex) {
      case 1: {
        this.validateName();
        break;
      }
      case 2: {
        this.validateWebsiteURL();
        break;
      }
      case 3: {
        this.validatePresentingWebsiteURL();
        break;
      }
      case 4: {
        this.validateHaveAirDropHunters();
        break;
      }
      case 5: {
        this.validateOfficialEmail();
        break;
      }
      case 6: {
        this.validateTotalRewardInToken();
        break;
      }
      case 7: {
        this.validateTotalRewardInUSD();
        break;
      }
      case 8: {
        this.validateAirDropStartDate();
        break;
      }
      case 9: {
        this.validateAirDropEndDate();
        break;
      }
      case 10: {
        this.validateTask();
        break;
      }
      case 11: {
        this.validateErrorHaveQuiz();
        break;
      }
      case 12: {
        this.validateSocialMediaUrls();
        break;
      }
      case 13: {
        this.validateLogo();
        break;
      }
      case 14: {
        this.validateWhitePaper();
        break;
      }
      case 15: {
        this.validateListingType();
        break;
      }
      case 16: {
        this.validateEmailToFinalizeOrder();
        break;
      }
      default: {
        console.log("Lol");
        break;
      }
    }
  }

  previous() {
    this.transitionPrevious();
  }

  getAirDropHuntersResponse(choice: boolean) {
    this.airDropData.haveAirDropHunters = choice;
  }

  getQuizAnswer(haveQuiz: boolean) {
    this.airDropData.haveQuiz = haveQuiz;
  }

  getTasks(tasks: AirDropTask[]) {
    this.airDropData.tasks = tasks;
  }

  getSocialMediaURLs(socialMediaUrls: string[]) {
    this.airDropData.socialMediaUrls = socialMediaUrls;
  }

  getTheLogo(logo: File) {
    this.airDropData.logo = logo;
  }

  getWhitePaper(whitePaper: File) {
    this.airDropData.whitePaper = whitePaper;
  }

  getResponseAboutAirdropListing(response: boolean) {
    this.airDropData.listingType = response ? 'Regular Listing' : '110 USD';
  }
}


