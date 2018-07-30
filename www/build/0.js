webpackJsonp([0],{

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PicPageModule", function() { return PicPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pic__ = __webpack_require__(446);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PicPageModule = /** @class */ (function () {
    function PicPageModule() {
    }
    PicPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__pic__["a" /* PicPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__pic__["a" /* PicPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], PicPageModule);
    return PicPageModule;
}());

//# sourceMappingURL=pic.module.js.map

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(261);
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

/***/ })

});
//# sourceMappingURL=0.js.map