webpackJsonp([3],{

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DatabaseProvider = /** @class */ (function () {
    function DatabaseProvider(http) {
        this.http = http;
    }
    DatabaseProvider.prototype.load = function () {
        var _this = this;
        if (this.data) {
            // already loaded data
            return Promise.resolve(this.data);
        }
        // don't have the data yet
        return new Promise(function (resolve) {
            // We're using Angular HTTP provider to request the data,
            // then on the response, it'll map the JSON data to a parsed JS object.
            // Next, we process the data and resolve the promise with the new data.
            _this.http.get('assets/json/data.json')
                .map(function (res) { return res.json().fulldata; })
                .subscribe(function (data) {
                //console.log(data);
                // we've got back the raw data, now generate the core schedule data
                // and save the data for later reference
                _this.data = data;
                resolve(_this.data);
            });
        });
    };
    DatabaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], DatabaseProvider);
    return DatabaseProvider;
}());

//# sourceMappingURL=database.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appSettings; });
var appSettings = {
    LANGUAGE_LIST: ['fr', 'es', 'de', 'us', 'cn', 'en', 'it', 'nl', 'ru', 'jp', 'kr', 'pt', 'br'],
    //https://github.com/shadiabuhilal/lang-list/blob/master/data/languages.json
    LANGUAGE_DEFAULT: 'en'
};
//# sourceMappingURL=app-settings.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_database__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pic_pic__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lang_modal_lang_modal__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_globalization__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_app_settings__ = __webpack_require__(115);
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
        this.picPage = __WEBPACK_IMPORTED_MODULE_4__pic_pic__["a" /* PicPage */];
        storage.ready().then(function () {
            storage.get('firstLaunch').then(function (val) {
                alert('firstLaunch : ' + val);
                if (!val || val === null) {
                    storage.set('firstLaunch', true);
                    //détection de la langue
                    if (window.cordova) {
                        alert('window.cordova');
                        _this.globalization.getPreferredLanguage().then(function (result) {
                            var res = result.value.split("-");
                            //verif si existe dans liste des langues (interne)
                            _this.checkLanguage(res[0]);
                            alert(result.value + ' ' + res[0]);
                        }).catch(function (e) { return alert(e); });
                    }
                    else {
                        _this.checkLanguage(__WEBPACK_IMPORTED_MODULE_9__app_app_settings__["a" /* appSettings */].LANGUAGE_DEFAULT);
                    }
                }
                else {
                    storage.get('lang').then(function (val) {
                        alert('firstLaunchElse : ' + val);
                        translate.use(val);
                    });
                }
                //Besoin d'attendre que le constructeur de picData ait bien intégré toute les data
                _this.loadData();
            });
        });
    }
    HomePage.prototype.checkLanguage = function (lang) {
        alert('checkLanguage ' + lang);
        var founded = false;
        for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_9__app_app_settings__["a" /* appSettings */].LANGUAGE_LIST.length; i++) {
            if (__WEBPACK_IMPORTED_MODULE_9__app_app_settings__["a" /* appSettings */].LANGUAGE_LIST[i] === lang) {
                this.storage.set('lang', lang);
                this.translate.use(lang);
                alert('use ' + lang);
                founded = true;
                break;
            }
        }
        if (!founded) {
            this.storage.set('lang', __WEBPACK_IMPORTED_MODULE_9__app_app_settings__["a" /* appSettings */].LANGUAGE_DEFAULT);
            this.translate.use(__WEBPACK_IMPORTED_MODULE_9__app_app_settings__["a" /* appSettings */].LANGUAGE_DEFAULT);
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
        var languageModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__lang_modal_lang_modal__["a" /* LangModalPage */]);
        languageModal.present();
    };
    HomePage.prototype.goToPicPage = function (pageId) {
        this.navCtrl.push(this.picPage, {
            "pageId": pageId,
        });
    };
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Hoooo!',
            subTitle: 'Faut pas déconner non plus, j\'ai pas pas codé ça! Clique sur OK pour valider ton vote pour Damien pour le shérif du mois de Mars!',
            buttons: ['OK']
        });
        alert.present();
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
            selector: 'page-home',template:/*ion-inline-start:"/Users/damien/app/WT/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      <img class="logo" src="assets/logo.png">\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="openModal()" color="light">\n        <ion-icon name="settings"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content text-center>\n<div *ngIf="!loaded" style="padding:50px"><ion-spinner></ion-spinner></div>\n<div *ngIf="loaded">\n  <ion-grid>\n  <!-- <ion-row>\n    <ion-col width-33 [navPush]="picPage" ><ion-icon name="heart"></ion-icon></ion-col>\n    <ion-col width-33><ion-icon [name]="myIcon"></ion-icon></ion-col>\n    <ion-col width-33>CAT 3</ion-col>\n  </ion-row> -->\n  <ion-row>\n  		<ion-col width-33 (tap)="goToPicPage(0)"><img [src]="cats[0].image"><div>{{cats[0].name|translate}}</div></ion-col>\n  		<ion-col width-33 (tap)="goToPicPage(1)"><img [src]="cats[1].image"><div>{{cats[1].name|translate}}</div></ion-col>\n  		<ion-col width-33 (tap)="goToPicPage(2)"><img [src]="cats[2].image"><div>{{cats[2].name|translate}}</div></ion-col>\n  </ion-row>\n  <ion-row>\n  		<ion-col width-33 (tap)="goToPicPage(3)"><img [src]="cats[3].image"><div>{{cats[3].name|translate}}</div></ion-col>\n  		<ion-col width-33 (tap)="goToPicPage(4)"><img [src]="cats[4].image"><div>{{cats[4].name|translate}}</div></ion-col>\n      <ion-col width-33></ion-col>\n  		<!-- <ion-col width-33 [navPush]="achatPage" tappable><img src="assets/img/achat.png"><div>Achats intégrés</div></ion-col> -->\n  </ion-row>\n      <!-- <ion-list>\n      <button ion-item *ngFor="let pic of cats" (click)="openPage(p)">\n      {{pic.name}}\n      </button>\n    </ion-list> -->\n</ion-grid>\n\n</div>\n<div padding class="slogan">{{\'SLOGAN1\' | translate}}<br><br>{{\'SLOGAN2\' | translate}}</div>\n <ion-fab right bottom>\n    <button ion-fab color="primary"><ion-icon name="ios-at-outline"></ion-icon></button>\n    <ion-fab-list side="left">\n      <button (click)="goToExternalLink(\'F\')" ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n      <button (click)="goToExternalLink(\'T\')" ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n      <button (click)="goToExternalLink(\'I\')" ion-fab><ion-icon name="logo-instagram"></ion-icon></button>\n      <button (click)="goToExternalLink(\'M\')" ion-fab><ion-icon name="ios-mail-outline"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/damien/app/WT/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__ionic_native_globalization__["a" /* Globalization */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(114);
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
 * Generated class for the PicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PicPage = /** @class */ (function () {
    function PicPage(navCtrl, navParams, database, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.loadingCtrl = loadingCtrl;
        this.loaded = false;
        this.database.load()
            .then(function (data) {
            _this.cat = data[parseInt(_this.navParams.data.pageId, 10)];
            _this.current = "seg0";
            var groupBy = 3;
            for (var i = 0; i < _this.cat.sscats.length; i++) {
                _this.cat.sscats[i].groups = [];
                for (var j = 0; j < _this.cat.sscats[i].pics.length; j = j + groupBy) {
                    var max = j + groupBy;
                    if (max > _this.cat.sscats[i].pics.length) {
                        max = _this.cat.sscats[i].pics.length;
                        //console.log('max ' + max);
                    }
                    _this.cat.sscats[i].groups.push(_this.cat.sscats[i].pics.slice(j, max));
                    //console.log(this.cat.sscats[i].pics.slice(j, max));
                }
                //console.log(this.cat.sscats[i].groups);
            }
            _this.loaded = true;
            //this.setAnchor();
        });
        //this.cat = (this.picData.getCats())[parseInt(this.navParams.data.pageId, 10)];
    }
    /*setAnchor() {
        this.tabTop = [];
            for (let i = 0; i < this.cat.sscats.length; i++) {
                if (document.getElementById('sscat' + i)) {
                    this.tabTop[i] = document.getElementById('sscat' + i).offsetTop;
                }
            }
    }*/
    /*ionViewDidLoad() {
        if (this.loaded){
            this.setAnchor();
        }


        /*this.content.ionScrollEnd.subscribe(($event: any) => {
            //console.log('ionScroll:');
            //console.log($event);
            let tmpSeg = 'seg0';
            for (let i = 1; i < this.tabTop.length; i++) {
                //console.log($event.scrollTop + ' ' + this.tabTop[i]);
                console.log($event);
                if ($event.scrollTop > this.tabTop[i]) {
                    tmpSeg = 'seg' + i;
                } else {
                    break;
                }
            }
            this.current = tmpSeg;
        });*/
    /*}*/
    PicPage.prototype.scrollTo = function (element) {
        if (document.getElementById(element)) {
            var yOffset = document.getElementById(element).offsetTop;
            //console.log(yOffset);
            this.content.scrollTo(0, yOffset, 350);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */])
    ], PicPage.prototype, "content", void 0);
    PicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pic',template:/*ion-inline-start:"/Users/damien/app/WT/src/pages/pic/pic.html"*/'<ion-header>\n<ion-navbar color="primary">\n	<ion-title *ngIf="loaded">{{cat.name | translate}}</ion-title>\n</ion-navbar>\n<ion-toolbar *ngIf="loaded">\n    <ion-segment [(ngModel)]="current" color="primary">\n      <ion-segment-button [value]="\'seg\'+i" *ngFor="let sscat of cat.sscats ; let i = index" (click)="scrollTo(\'sscat\'+i)">\n      {{sscat.name | translate}}\n	  </ion-segment-button>\n    </ion-segment>\n</ion-toolbar>\n</ion-header>\n<ion-content>\n\n\n\n\n<!-- <div *ngFor="let sscat of cat.sscats ; let i = index" class="containerPic">\n	<div [id]="\'sscat\'+i">{{sscat.name | translate}}</div>\n	<div [ngSwitch]="r.type" *ngFor="let r of sscat.row">\n		<div *ngSwitchCase="2" class="containerPic2">\n			<div><img [src]="r.pic[0]" imageViewer></div>\n			<div>\n				<div><img [src]="r.pic[1]" imageViewer></div>\n				<div><img [src]="r.pic[2]" imageViewer></div>\n			</div>\n		</div>\n		<div *ngSwitchCase="3" class="containerPic3">\n			<div>\n				<div><img [src]="r.pic[0]" imageViewer></div>\n				<div><img [src]="r.pic[1]" imageViewer></div>\n			</div>\n			<div><img [src]="r.pic[2]" imageViewer></div>\n		</div>\n		<div *ngSwitchDefault class="containerPic1">\n			<div *ngFor="let p of r.pic">\n				<img [src]="p" imageViewer>	\n			</div>\n		</div>\n	</div>\n</div> -->\n<!-- <div *ngFor="let sscat of cat.sscats ; let i = index" class="containerPic">\n	<div [id]="\'sscat\'+i">{{sscat.name | translate}}</div>\n	<div *ngFor="let pic of sscat.pics">\n		<div>\n			<img [src]="pic" imageViewer>\n		</div>\n	</div>\n</div> -->\n<div *ngIf="loaded">\n	<div *ngFor="let sscat of cat.sscats ; let i = index" class="containerPic">\n		<div [id]="\'sscat\'+i">{{sscat.name | translate}}</div>\n		<div *ngFor="let group of sscat.groups" class="containerPicGroup">\n			<div *ngFor="let pic of group" >\n				<img [src]="pic" imageViewer tappable>\n			</div>\n		</div>\n	</div>\n</div>\n</ion-content>'/*ion-inline-end:"/Users/damien/app/WT/src/pages/pic/pic.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */]])
    ], PicPage);
    return PicPage;
}());

//# sourceMappingURL=pic.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LangModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_settings__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(116);
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
 * Generated class for the LangModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LangModalPage = /** @class */ (function () {
    function LangModalPage(storage, translate, viewCtrl) {
        var _this = this;
        this.storage = storage;
        this.translate = translate;
        this.viewCtrl = viewCtrl;
        this.flagList = __WEBPACK_IMPORTED_MODULE_3__app_app_settings__["a" /* appSettings */].LANGUAGE_LIST;
        storage.get('lang').then(function (val) {
            _this.flagSel = val;
            alert('modal ' + val);
        });
    }
    LangModalPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    LangModalPage.prototype.setLang = function (lang) {
        this.storage.set('lang', lang);
        this.flagSel = lang;
        this.translate.use(lang);
    };
    LangModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lang-modal',template:/*ion-inline-start:"/Users/damien/app/WT/src/pages/lang-modal/lang-modal.html"*/'<ion-header>\n    <ion-toolbar color="primary">\n        <ion-title>{{\'LANG\'|translate}}</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="closeModal()">\n                <ion-icon ios="md-close" md="md-close"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content class="flagContent" text-center>\n<div class="flagContainer">\n    <div *ngFor="let flag of flagList" (tap)="setLang(flag)" [ngClass]="{\'flagSelected\':flag===flagSel}">\n        <img [src]="\'assets/flag/\'+flag+\'.png\'">\n    </div>\n</div>\n<span>Author : http://www.freepik.com/</span>\n</ion-content>'/*ion-inline-end:"/Users/damien/app/WT/src/pages/lang-modal/lang-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* ViewController */]])
    ], LangModalPage);
    return LangModalPage;
}());

//# sourceMappingURL=lang-modal.js.map

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 155;

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/home/home.module": [
		443,
		2
	],
	"../pages/lang-modal/lang-modal.module": [
		444,
		1
	],
	"../pages/pic/pic.module": [
		445,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 198;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(276);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_globalization__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_http_loader__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_home__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_pic_pic__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_lang_modal_lang_modal__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_database_database__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ionic_img_viewer__ = __webpack_require__(345);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_9__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_pic_pic__["a" /* PicPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_lang_modal_lang_modal__["a" /* LangModalPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_17_ionic_img_viewer__["a" /* IonicImageViewerModule */],
                __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */], {
                    backButtonText: '',
                    pageTransition: 'md-transition'
                }, {
                    links: [
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lang-modal/lang-modal.module#LangModalPageModule', name: 'LangModalPage', segment: 'lang-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pic/pic.module#PicPageModule', name: 'PicPage', segment: 'pic', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11__ionic_storage__["a" /* IonicStorageModule */].forRoot({ name: '__wtdb' }),
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* HttpModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_pic_pic__["a" /* PicPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_lang_modal_lang_modal__["a" /* LangModalPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_globalization__["a" /* Globalization */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__providers_database_database__["a" /* DatabaseProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_settings__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(142);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(translate, platform, statusBar, splashScreen) {
        var _this = this;
        this.translate = translate;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            //statusBar.styleDefault();
            splashScreen.hide();
            _this.initTranslate();
        });
    }
    MyApp.prototype.initTranslate = function () {
        // Set the default language for translation strings, and the current language.
        this.translate.setDefaultLang(__WEBPACK_IMPORTED_MODULE_5__app_app_settings__["a" /* appSettings */].LANGUAGE_DEFAULT);
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/damien/app/WT/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/damien/app/WT/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[269]);
//# sourceMappingURL=main.js.map