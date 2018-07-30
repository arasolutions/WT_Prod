webpackJsonp([1],{

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LangModalPageModule", function() { return LangModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lang_modal__ = __webpack_require__(445);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LangModalPageModule = /** @class */ (function () {
    function LangModalPageModule() {
    }
    LangModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__lang_modal__["a" /* LangModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__lang_modal__["a" /* LangModalPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], LangModalPageModule);
    return LangModalPageModule;
}());

//# sourceMappingURL=lang-modal.module.js.map

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LangModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_settings__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(262);
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

/***/ })

});
//# sourceMappingURL=1.js.map