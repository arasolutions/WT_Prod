webpackJsonp([2],{

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home__ = __webpack_require__(444);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__home__["a" /* HomePage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_database__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_pages__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_globalization__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_app_settings__ = __webpack_require__(263);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = /** @class */ (function () {
    function HomePage(globalization, storage, iab, alertCtrl, translate, navCtrl, database, modalCtrl) {
        var _this = this;
        this.globalization = globalization;
        this.storage = storage;
        this.iab = iab;
        this.alertCtrl = alertCtrl;
        this.translate = translate;
        this.navCtrl = navCtrl;
        this.database = database;
        this.modalCtrl = modalCtrl;
        this.loaded = false;
        this.picPage = __WEBPACK_IMPORTED_MODULE_4__pages_pages__["c" /* PicPage */];
        storage.ready().then(function () {
            storage.get('firstLaunch').then(function (val) {
                if (!val || val === null) {
                    storage.set('firstLaunch', true);
                    //détection de la langue
                    if (window.cordova) {
                        _this.globalization.getPreferredLanguage().then(function (result) {
                            var res = result.value.split("-");
                            //verif si existe dans liste des langues (interne)
                            _this.checkLanguage(res[0]);
                        }).catch(function (e) { return alert(e); });
                    }
                    else {
                        _this.checkLanguage(__WEBPACK_IMPORTED_MODULE_8__app_app_settings__["a" /* appSettings */].LANGUAGE_DEFAULT);
                    }
                }
                else {
                    storage.get('lang').then(function (val) {
                        translate.use(val);
                    });
                }
                //Besoin d'attendre que le constructeur de picData ait bien intégré toute les data
                _this.loadData();
            });
        });
    }
    HomePage.prototype.checkLanguage = function (lang) {
        var founded = false;
        for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_8__app_app_settings__["a" /* appSettings */].LANGUAGE_LIST.length; i++) {
            if (__WEBPACK_IMPORTED_MODULE_8__app_app_settings__["a" /* appSettings */].LANGUAGE_LIST[i] === lang) {
                this.storage.set('lang', lang);
                this.translate.use(lang);
                founded = true;
                break;
            }
        }
        if (!founded) {
            this.storage.set('lang', __WEBPACK_IMPORTED_MODULE_8__app_app_settings__["a" /* appSettings */].LANGUAGE_DEFAULT);
            this.translate.use(__WEBPACK_IMPORTED_MODULE_8__app_app_settings__["a" /* appSettings */].LANGUAGE_DEFAULT);
        }
    };
    HomePage.prototype.loadData = function () {
        var _this = this;
        this.database.load()
            .then(function (data) {
            _this.cats = data;
            _this.loaded = true;
        });
    };
    HomePage.prototype.openModal = function () {
        var languageModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__pages_pages__["b" /* LangModalPage */]);
        languageModal.present();
    };
    HomePage.prototype.goToPicPage = function (pageId) {
        this.navCtrl.push(this.picPage, {
            "pageId": pageId,
        });
    };
    HomePage.prototype.goToExternalLink = function (param) {
        var link;
        switch (param) {
            case "T":
                link = "https://twitter.com/wordtrotterapp";
                break;
            case "F":
                link = "https://www.facebook.com/wordtrotterapp";
                break;
            case "I":
                link = "https://www.instagram.com/wordtrotter/";
                break;
            case "M":
                link = "mailto:contact@word-trotter.com";
                break;
            default:
                link = "mailto:contact@word-trotter.com";
                break;
        }
        this.iab.create(link, '_system');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/damien/app/WT/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      <img class="logo" src="assets/logo.png">\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="openModal()" color="light">\n        <ion-icon name="settings"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content text-center>\n<div *ngIf="!loaded" style="padding:50px"><ion-spinner></ion-spinner></div>\n<div *ngIf="loaded">\n  <ion-grid>\n  <!-- <ion-row>\n    <ion-col width-33 [navPush]="picPage" ><ion-icon name="heart"></ion-icon></ion-col>\n    <ion-col width-33><ion-icon [name]="myIcon"></ion-icon></ion-col>\n    <ion-col width-33>CAT 3</ion-col>\n  </ion-row> -->\n  <ion-row>\n  		<ion-col width-33 (tap)="goToPicPage(0)"><img [src]="cats[0].image"><div class="catLabel">{{cats[0].name|translate}}</div></ion-col>\n  		<ion-col width-33 (tap)="goToPicPage(1)"><img [src]="cats[1].image"><div class="catLabel">{{cats[1].name|translate}}</div></ion-col>\n  		<ion-col width-33 (tap)="goToPicPage(2)"><img [src]="cats[2].image"><div class="catLabel">{{cats[2].name|translate}}</div></ion-col>\n  </ion-row>\n  <ion-row>\n  		<ion-col width-33 (tap)="goToPicPage(3)"><img [src]="cats[3].image"><div class="catLabel">{{cats[3].name|translate}}</div></ion-col>\n  		<ion-col width-33 (tap)="goToPicPage(4)"><img [src]="cats[4].image"><div class="catLabel">{{cats[4].name|translate}}</div></ion-col>\n      <ion-col width-33></ion-col>\n  		<!-- <ion-col width-33 [navPush]="achatPage" tappable><img src="assets/img/achat.png"><div>Achats intégrés</div></ion-col> -->\n  </ion-row>\n      <!-- <ion-list>\n      <button ion-item *ngFor="let pic of cats" (click)="openPage(p)">\n      {{pic.name}}\n      </button>\n    </ion-list> -->\n</ion-grid>\n\n</div>\n<div padding class="slogan">{{\'SLOGAN1\' | translate}}<br><br>{{\'SLOGAN2\' | translate}}</div>\n <ion-fab right bottom>\n    <button ion-fab color="primary"><ion-icon name="ios-at-outline"></ion-icon></button>\n    <ion-fab-list side="left">\n      <button (click)="goToExternalLink(\'F\')" ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n      <button (click)="goToExternalLink(\'T\')" ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n      <button (click)="goToExternalLink(\'I\')" ion-fab><ion-icon name="logo-instagram"></ion-icon></button>\n      <button (click)="goToExternalLink(\'M\')" ion-fab><ion-icon name="ios-mail-outline"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/damien/app/WT/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ionic_native_globalization__["a" /* Globalization */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=2.js.map