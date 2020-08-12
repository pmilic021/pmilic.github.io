(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'tbtl-platform-explorer';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["tbtl-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'tbtl-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/layout.module */ "./src/app/layout/layout.module.ts");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[_angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _layout_layout_module__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]], imports: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _layout_layout_module__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
                imports: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _layout_layout_module__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _icons_registry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons-registry */ "./src/app/core/icons-registry.ts");









class CoreModule {
    constructor(parentModule, matIconRegistry, sanitizer) {
        this.throwIfAlreadyLoaded(parentModule, 'CoreModule');
        _icons_registry__WEBPACK_IMPORTED_MODULE_5__["IconsRegistry"].registerIcons(matIconRegistry, sanitizer);
    }
    // tslint:disable-next-line:no-any
    throwIfAlreadyLoaded(parentModule, moduleName) {
        if (parentModule) {
            throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
        }
    }
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](CoreModule, 12), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconRegistry"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"])); }, providers: [], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]],
                providers: [],
            }]
    }], function () { return [{ type: CoreModule, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"]
            }] }, { type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconRegistry"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/icons-registry.ts":
/*!****************************************!*\
  !*** ./src/app/core/icons-registry.ts ***!
  \****************************************/
/*! exports provided: IconsRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsRegistry", function() { return IconsRegistry; });
const icons = [
    // Social
    { name: 'google', url: 'assets/social/google.svg' },
    { name: 'facebook', url: 'assets/social/facebook.svg' },
    // Custom
    { name: 'money', url: 'assets/custom/money.svg' },
    { name: 'ethereum', url: 'assets/custom/ethereum.svg' },
];
class IconsRegistry {
    static registerIcons(matIconRegistry, sanitizer) {
        icons.forEach((icon) => {
            const svgUrl = icon.url;
            const safeUrl = sanitizer.bypassSecurityTrustResourceUrl(svgUrl);
            matIconRegistry.addSvgIcon(icon.name, safeUrl);
        });
    }
}


/***/ }),

/***/ "./src/app/layout/layout-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/layout-routing.module.ts ***!
  \*************************************************/
/*! exports provided: LayoutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutRoutingModule", function() { return LayoutRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-layout/main-layout.component */ "./src/app/layout/main-layout/main-layout.component.ts");
/* harmony import */ var _unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./unauthorized/unauthorized.component */ "./src/app/layout/unauthorized/unauthorized.component.ts");







const routes = [
    {
        path: '',
        component: _main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_3__["MainLayoutComponent"],
        children: [{ path: '', loadChildren: () => __webpack_require__.e(/*! import() | dashboard-dashboard-module */ "dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ../dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts")).then((m) => m.DashboardModule) }],
    },
    {
        path: 'unauthorized',
        component: _unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_4__["UnauthorizedComponent"],
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
        children: [{ path: '', loadChildren: () => __webpack_require__.e(/*! import() | login-login-module */ "login-login-module").then(__webpack_require__.bind(null, /*! ../login/login.module */ "./src/app/login/login.module.ts")).then((m) => m.LoginModule) }],
    },
];
class LayoutRoutingModule {
}
LayoutRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LayoutRoutingModule });
LayoutRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LayoutRoutingModule_Factory(t) { return new (t || LayoutRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LayoutRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _layout_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout-routing.module */ "./src/app/layout/layout-routing.module.ts");
/* harmony import */ var _main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main-layout/main-layout.component */ "./src/app/layout/main-layout/main-layout.component.ts");
/* harmony import */ var _unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./unauthorized/unauthorized.component */ "./src/app/layout/unauthorized/unauthorized.component.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");










class LayoutModule {
}
LayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: LayoutModule });
LayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function LayoutModule_Factory(t) { return new (t || LayoutModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _layout_routing_module__WEBPACK_IMPORTED_MODULE_5__["LayoutRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LayoutModule, { declarations: [_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_6__["MainLayoutComponent"], _unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_7__["UnauthorizedComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _layout_routing_module__WEBPACK_IMPORTED_MODULE_5__["LayoutRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"]], exports: [_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_6__["MainLayoutComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LayoutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _layout_routing_module__WEBPACK_IMPORTED_MODULE_5__["LayoutRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"]],
                declarations: [_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_6__["MainLayoutComponent"], _unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_7__["UnauthorizedComponent"]],
                exports: [_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_6__["MainLayoutComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/layout/main-layout/main-layout.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/main-layout/main-layout.component.ts ***!
  \*************************************************************/
/*! exports provided: MainLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainLayoutComponent", function() { return MainLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");







class MainLayoutComponent {
    constructor() {
        this.blockhouseLogo = 'assets/blockhouse-logo.png';
    }
    ngOnInit() { }
    logOut() { }
}
MainLayoutComponent.ɵfac = function MainLayoutComponent_Factory(t) { return new (t || MainLayoutComponent)(); };
MainLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainLayoutComponent, selectors: [["tbtl-main-layout"]], decls: 35, vars: 4, consts: [[1, "container"], ["mode", "side", "opened", ""], ["fxLayout", "column", "fxLayoutAlign", "stretch stretch", "fxLayoutGap", "16px", "fxFlex", "1 1 auto"], ["alt", "", 1, "logo", 3, "src"], ["fxLayout", "column", "fxLayoutAlign", "stretch stretch"], ["mat-button", "", "routerLink", "/identities", "routerLinkActive", "active", 3, "color"], ["rla1", "routerLinkActive"], ["fxLayout", "row", "fxLayoutAlign", "stretch stretch", "fxLayoutGap", "16px", 1, "btn-container"], ["mat-button", "", "routerLink", "/wallets", "routerLinkActive", "active", 3, "color"], ["rla2", "routerLinkActive"], ["mat-button", "", "routerLink", "/transactions", "routerLinkActive", "active", 3, "color"], ["rla3", "routerLinkActive"], ["fxFlex", "1 1 auto"], ["mat-button", "", 3, "click"]], template: function MainLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "fingerprint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Identities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "credit_card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Wallets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "import_export");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Transactions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainLayoutComponent_Template_button_click_27_listener() { return ctx.logOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "power_settings_new");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Log Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.blockhouseLogo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", _r0.isActive ? "primary" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", _r1.isActive ? "primary" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", _r2.isActive ? "primary" : "");
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenav"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: [".container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\nmat-sidenav[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\n.logo[_ngcontent-%COMP%] {\n  object-fit: contain;\n  height: 64px;\n}\n\n.mat-button[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.mat-button[_ngcontent-%COMP%]   .btn-container[_ngcontent-%COMP%] {\n  height: 44px;\n  line-height: 44px;\n}\n\n.mat-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  height: 32px;\n  width: 32px;\n}\n\na.active[_ngcontent-%COMP%] {\n  border-right: 3px solid var(--primary-color);\n  border-radius: 0;\n}\n\na.active[_ngcontent-%COMP%]   .btn-container[_ngcontent-%COMP%] {\n  background-color: rgba(66, 153, 207, 0.2);\n  border-radius: 4px;\n}\n\nmat-sidenav-content[_ngcontent-%COMP%] {\n  height: 100vh;\n  overflow: auto;\n  padding: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L21haW4tbGF5b3V0L21haW4tbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFDRTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQUo7O0FBSUE7RUFDRSw0Q0FBQTtFQUNBLGdCQUFBO0FBREY7O0FBR0U7RUFDRSx5Q0FBQTtFQUNBLGtCQUFBO0FBREo7O0FBS0E7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFGRiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9tYWluLWxheW91dC9tYWluLWxheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxubWF0LXNpZGVuYXYge1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5sb2dvIHtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgaGVpZ2h0OiA2NHB4O1xufVxuXG4ubWF0LWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcblxuICAuYnRuLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiA0NHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICB9XG5cbiAgbWF0LWljb24ge1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgd2lkdGg6IDMycHg7XG4gIH1cbn1cblxuYS5hY3RpdmUge1xuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogMDtcblxuICAuYnRuLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2NiwgMTUzLCAyMDcsIDAuMik7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB9XG59XG5cbm1hdC1zaWRlbmF2LWNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogYXV0bztcbiAgcGFkZGluZzogMzJweDtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'tbtl-main-layout',
                templateUrl: './main-layout.component.html',
                styleUrls: ['./main-layout.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/layout/unauthorized/unauthorized.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/unauthorized/unauthorized.component.ts ***!
  \***************************************************************/
/*! exports provided: UnauthorizedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnauthorizedComponent", function() { return UnauthorizedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class UnauthorizedComponent {
}
UnauthorizedComponent.ɵfac = function UnauthorizedComponent_Factory(t) { return new (t || UnauthorizedComponent)(); };
UnauthorizedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UnauthorizedComponent, selectors: [["tbtl-unauthorized"]], decls: 0, vars: 0, template: function UnauthorizedComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC91bmF1dGhvcml6ZWQvdW5hdXRob3JpemVkLmNvbXBvbmVudC5zY3NzIn0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnauthorizedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'tbtl-unauthorized',
                templateUrl: './unauthorized.component.html',
                styleUrls: ['./unauthorized.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");









class LoginComponent {
    constructor() {
        this.blockhouseLogo = 'assets/blockhouse-logo.png';
    }
    ngOnInit() { }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["tbtl-login"]], decls: 48, vars: 1, consts: [["fxLayout", "column", "fxLayoutAlign", "center center", 1, "login-container"], ["fxLayout", "column", "fxLayoutAlign", "stretch stretch", "fxLayoutGap", "24px"], ["alt", "", 1, "logo", 3, "src"], ["fxFlexAlign", "center"], ["fxLayout", "column", "fxLayoutAlign", "stretch stretch", "fxLayoutGap", "8px"], ["appearance", "outline"], ["matPrefix", ""], ["matInput", "", "type", "email", "autocomplete", "off"], ["matInput", "", "type", "password", "autocomplete", "off"], ["fxLayout", "row", "fxLayoutAlign", "end center", "fxLayoutGap", "8px"], ["mat-flat-button", "", "color", "primary"], ["mat-button", "", "color", "primary"], [1, "bg-boxes"], ["width", "300px", "height", "100%", "id", "col1"], ["width", "150px", "height", "150px", "x", "75px", "y", "75px", "id", "bub1", 1, "bubble"], ["width", "200px", "height", "100%", "id", "col2"], ["width", "100px", "height", "100px", "x", "50px", "y", "50px", "id", "bub2", 1, "bubble"], ["width", "260px", "height", "100%", "id", "col3"], ["width", "130px", "height", "130px", "x", "65px", "y", "65px", "id", "bub3", 1, "bubble"], ["width", "160px", "height", "100%", "id", "col4"], ["width", "80px", "height", "80px", "x", "40px", "y", "40px", "id", "bub4", 1, "bubble"], ["width", "240px", "height", "100%", "id", "col5"], ["width", "120px", "height", "120px", "x", "60px", "y", "60px", "id", "bub5", 1, "bubble"], ["width", "200px", "height", "100%", "id", "col6"], ["points", "50,150 100,50 150,150", "id", "bub6", 1, "bubble"], ["width", "200px", "height", "100%", "id", "col7"], ["width", "100px", "height", "100px", "x", "50px", "y", "50px", "id", "bub7", 1, "bubble"], ["width", "200px", "height", "100%", "id", "col8"], ["width", "100px", "height", "100px", "x", "50px", "y", "50px", "id", "bub8", 1, "bubble"], ["width", "200px", "height", "100%", "id", "col9"], ["width", "100px", "height", "100px", "x", "50px", "y", "50px", "id", "bub9", 1, "bubble"], ["width", "200px", "height", "100%", "id", "col10"], ["width", "100px", "height", "100px", "x", "50px", "y", "50px", "id", "bub10", 1, "bubble"], ["width", "100px", "height", "100%", "id", "col11"], ["width", "50px", "height", "50px", "x", "25px", "y", "25px", "id", "bub11", 1, "bubble"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Blockhouse Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "lock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Forgot password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "svg", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "rect", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "rect", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "svg", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "rect", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "svg", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "rect", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "svg", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "rect", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "svg", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "polygon", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "svg", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "rect", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "svg", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "rect", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "svg", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "rect", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "svg", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "rect", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "svg", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "rect", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.blockhouseLogo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexAlignDirective"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDivider"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatPrefix"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]], styles: [".login-container[_ngcontent-%COMP%] {\n  background-color: #161819;\n  height: 100%;\n  min-height: 100%;\n  min-width: 100%;\n  width: 100%;\n}\n.login-container[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  min-width: 400px;\n  padding: 24px;\n  z-index: 2;\n}\n.login-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  font-weight: 300;\n}\n.logo[_ngcontent-%COMP%] {\n  object-fit: contain;\n  height: 64px;\n}\nmat-form-field[_ngcontent-%COMP%]     .mat-form-field-wrapper {\n  padding: 0;\n}\n.bg-boxes[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 100vh;\n  overflow: hidden;\n  margin: 0;\n  z-index: 1;\n  padding: 0;\n}\nsvg[_ngcontent-%COMP%] {\n  animation: riser 40s infinite;\n  opacity: 0;\n  overflow: visible;\n  position: absolute;\n}\n.bubble[_ngcontent-%COMP%] {\n  animation: rotator 40s linear infinite;\n  fill: #fff;\n  opacity: 0.8;\n  transform-origin: 100px 100px;\n}\n#col1[_ngcontent-%COMP%] {\n  animation-duration: 17s;\n}\n#bub1[_ngcontent-%COMP%] {\n  transform-origin: 150px 150px;\n}\n#col2[_ngcontent-%COMP%] {\n  left: 15%;\n  animation-delay: 18s;\n}\n#col3[_ngcontent-%COMP%] {\n  left: 30%;\n  animation-delay: 14s;\n  animation-duration: 19s;\n}\n#bub3[_ngcontent-%COMP%] {\n  animation-delay: 14s;\n  transform-origin: 130px 130px;\n}\n#col4[_ngcontent-%COMP%] {\n  left: 45%;\n  animation-delay: 8s;\n  animation-duration: 22s;\n}\n#bub4[_ngcontent-%COMP%] {\n  animation-delay: 8s;\n  transform-origin: 80px 80px;\n}\n#col5[_ngcontent-%COMP%] {\n  left: 60%;\n  animation-delay: 15s;\n  animation-duration: 18s;\n}\n#bub5[_ngcontent-%COMP%] {\n  animation-delay: 15s;\n  transform-origin: 120px 120px;\n}\n#col6[_ngcontent-%COMP%] {\n  left: 75%;\n  animation-delay: 19s;\n}\n#col7[_ngcontent-%COMP%] {\n  left: 90%;\n  animation-delay: 4s;\n}\n#col8[_ngcontent-%COMP%] {\n  left: -5%;\n  animation-delay: 11s;\n}\n#col9[_ngcontent-%COMP%] {\n  left: 25%;\n  animation-delay: 5s;\n}\n#col10[_ngcontent-%COMP%] {\n  left: 50%;\n  animation-delay: 12s;\n}\n#col11[_ngcontent-%COMP%] {\n  left: 67%;\n  animation-delay: 1s;\n  animation-duration: 25s;\n}\n#bub11[_ngcontent-%COMP%] {\n  animation-delay: 1s;\n  transform-origin: 50px 50px;\n}\n@keyframes rotator {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes riser {\n  0% {\n    opacity: 0.2;\n    transform: translateY(100%);\n  }\n  100% {\n    opacity: 0.2;\n    transform: translateY(-250px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvc3R5bGVzL3V0aWxpdGllcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSx5QkNJZ0I7RURIaEIsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFERjtBQUdFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtBQURKO0FBSUU7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFGSjtBQU1BO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FBSEY7QUFNQTtFQUNFLFVBQUE7QUFIRjtBQU1BO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBSEY7QUFNQTtFQUNFLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFIRjtBQU1BO0VBQ0Usc0NBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FBSEY7QUFLQTtFQUNFLHVCQUFBO0FBRkY7QUFJQTtFQUNFLDZCQUFBO0FBREY7QUFJQTtFQUNFLFNBQUE7RUFDQSxvQkFBQTtBQURGO0FBSUE7RUFDRSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtBQURGO0FBSUE7RUFDRSxvQkFBQTtFQUNBLDZCQUFBO0FBREY7QUFJQTtFQUNFLFNBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBREY7QUFJQTtFQUNFLG1CQUFBO0VBQ0EsMkJBQUE7QUFERjtBQUlBO0VBQ0UsU0FBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7QUFERjtBQUlBO0VBQ0Usb0JBQUE7RUFDQSw2QkFBQTtBQURGO0FBSUE7RUFDRSxTQUFBO0VBQ0Esb0JBQUE7QUFERjtBQUlBO0VBQ0UsU0FBQTtFQUNBLG1CQUFBO0FBREY7QUFJQTtFQUNFLFNBQUE7RUFDQSxvQkFBQTtBQURGO0FBSUE7RUFDRSxTQUFBO0VBQ0EsbUJBQUE7QUFERjtBQUlBO0VBQ0UsU0FBQTtFQUNBLG9CQUFBO0FBREY7QUFJQTtFQUNFLFNBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBREY7QUFJQTtFQUNFLG1CQUFBO0VBQ0EsMkJBQUE7QUFERjtBQUlBO0VBQ0U7SUFFRSx5QkFBQTtFQURGO0FBQ0Y7QUFJQTtFQUNFO0lBQ0UsWUFBQTtJQUVBLDJCQUFBO0VBRkY7RUFJQTtJQUNFLFlBQUE7SUFFQSw2QkFBQTtFQUZGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL3N0eWxlcy91dGlsaXRpZXMvdmFyaWFibGVzJztcblxuLmxvZ2luLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRkYXJrLWJhY2tncm91bmQ7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICB3aWR0aDogMTAwJTtcblxuICBtYXQtY2FyZCB7XG4gICAgbWluLXdpZHRoOiA0MDBweDtcbiAgICBwYWRkaW5nOiAyNHB4O1xuICAgIHotaW5kZXg6IDI7XG4gIH1cblxuICBoMSB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cbn1cblxuLmxvZ28ge1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICBoZWlnaHQ6IDY0cHg7XG59XG5cbm1hdC1mb3JtLWZpZWxkIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5iZy1ib3hlcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDA7XG4gIHotaW5kZXg6IDE7XG4gIHBhZGRpbmc6IDA7XG59XG5cbnN2ZyB7XG4gIGFuaW1hdGlvbjogcmlzZXIgNDBzIGluZmluaXRlO1xuICBvcGFjaXR5OiAwO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uYnViYmxlIHtcbiAgYW5pbWF0aW9uOiByb3RhdG9yIDQwcyBsaW5lYXIgaW5maW5pdGU7XG4gIGZpbGw6ICNmZmY7XG4gIG9wYWNpdHk6IDAuODtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMTAwcHggMTAwcHg7XG59XG4jY29sMSB7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTdzO1xufVxuI2J1YjEge1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAxNTBweCAxNTBweDtcbn1cblxuI2NvbDIge1xuICBsZWZ0OiAxNSU7XG4gIGFuaW1hdGlvbi1kZWxheTogMThzO1xufVxuXG4jY29sMyB7XG4gIGxlZnQ6IDMwJTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAxNHM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTlzO1xufVxuXG4jYnViMyB7XG4gIGFuaW1hdGlvbi1kZWxheTogMTRzO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAxMzBweCAxMzBweDtcbn1cblxuI2NvbDQge1xuICBsZWZ0OiA0NSU7XG4gIGFuaW1hdGlvbi1kZWxheTogOHM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMjJzO1xufVxuXG4jYnViNCB7XG4gIGFuaW1hdGlvbi1kZWxheTogOHM7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDgwcHggODBweDtcbn1cblxuI2NvbDUge1xuICBsZWZ0OiA2MCU7XG4gIGFuaW1hdGlvbi1kZWxheTogMTVzO1xuICBhbmltYXRpb24tZHVyYXRpb246IDE4cztcbn1cblxuI2J1YjUge1xuICBhbmltYXRpb24tZGVsYXk6IDE1cztcbiAgdHJhbnNmb3JtLW9yaWdpbjogMTIwcHggMTIwcHg7XG59XG5cbiNjb2w2IHtcbiAgbGVmdDogNzUlO1xuICBhbmltYXRpb24tZGVsYXk6IDE5cztcbn1cblxuI2NvbDcge1xuICBsZWZ0OiA5MCU7XG4gIGFuaW1hdGlvbi1kZWxheTogNHM7XG59XG5cbiNjb2w4IHtcbiAgbGVmdDogLTUlO1xuICBhbmltYXRpb24tZGVsYXk6IDExcztcbn1cblxuI2NvbDkge1xuICBsZWZ0OiAyNSU7XG4gIGFuaW1hdGlvbi1kZWxheTogNXM7XG59XG5cbiNjb2wxMCB7XG4gIGxlZnQ6IDUwJTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAxMnM7XG59XG5cbiNjb2wxMSB7XG4gIGxlZnQ6IDY3JTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyNXM7XG59XG5cbiNidWIxMSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMXM7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwcHggNTBweDtcbn1cblxuQGtleWZyYW1lcyByb3RhdG9yIHtcbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgcmlzZXIge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMC4yO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwLjI7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI1MHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI1MHB4KTtcbiAgfVxufVxuIiwiJGRhcmstdGV4dDogIzMzMzMzMztcbiRsaWdodC1iYWNrZ3JvdW5kOiAjZjVmYWZmO1xuLy8gRmlyc3QgYmcgY29sb3Igc3VnZ2VzdGlvblxuLy8kZGFyay1iYWNrZ3JvdW5kOiAjMmMyYzJjO1xuLy8gU2Vjb25kIGJnIGNvbG9yIHN1Z2dlc3Rpb25cbi8vJGRhcmstYmFja2dyb3VuZDogIzE5MTkxOTtcbi8vIHRoaXJkIGJnIGNvbG9yIHN1Z2dlc3Rpb25cbiRkYXJrLWJhY2tncm91bmQ6ICMxNjE4MTk7XG5cbiRtYXJpZ29sZDogI2VmYTAwYjtcblxuLy8gTGlnaHQgVGhlbWUgVGV4dFxuJGRhcmstdGV4dDogIzAwMDAwMDtcbiRkYXJrLXByaW1hcnktdGV4dDogcmdiYSgkZGFyay10ZXh0LCAwLjg3KTtcbiRkYXJrLWFjY2VudC10ZXh0OiByZ2JhKCRkYXJrLXByaW1hcnktdGV4dCwgMC41NCk7XG4kZGFyay1kaXNhYmxlZC10ZXh0OiByZ2JhKCRkYXJrLXByaW1hcnktdGV4dCwgMC4zOCk7XG4kZGFyay1kaXZpZGVyczogcmdiYSgkZGFyay1wcmltYXJ5LXRleHQsIDAuMTIpO1xuJGRhcmstZm9jdXNlZDogcmdiYSgkZGFyay1wcmltYXJ5LXRleHQsIDAuMTIpO1xuXG4vLyBEYXJrIFRoZW1lIHRleHRcbiRsaWdodC10ZXh0OiAjZmZmZmZmO1xuJGxpZ2h0LXByaW1hcnktdGV4dDogJGxpZ2h0LXRleHQ7XG4kbGlnaHQtYWNjZW50LXRleHQ6IHJnYmEoJGxpZ2h0LXByaW1hcnktdGV4dCwgMC43KTtcbiRsaWdodC1kaXNhYmxlZC10ZXh0OiByZ2JhKCRsaWdodC1wcmltYXJ5LXRleHQsIDAuNSk7XG4kbGlnaHQtZGl2aWRlcnM6IHJnYmEoJGxpZ2h0LXByaW1hcnktdGV4dCwgMC4xMik7XG4kbGlnaHQtZm9jdXNlZDogcmdiYSgkbGlnaHQtcHJpbWFyeS10ZXh0LCAwLjEyKTtcblxuLy8gQmFja2dyb3VuZCBjb25maWdcbi8vIExpZ2h0IGJnXG4kbGlnaHQtYmctZGFya2VyLTU6IGRhcmtlbigkbGlnaHQtYmFja2dyb3VuZCwgNSUpO1xuJGxpZ2h0LWJnLWRhcmtlci0xMDogZGFya2VuKCRsaWdodC1iYWNrZ3JvdW5kLCAxMCUpO1xuJGxpZ2h0LWJnLWRhcmtlci0yMDogZGFya2VuKCRsaWdodC1iYWNrZ3JvdW5kLCAyMCUpO1xuJGxpZ2h0LWJnLWRhcmtlci0zMDogZGFya2VuKCRsaWdodC1iYWNrZ3JvdW5kLCAzMCUpO1xuJGxpZ2h0LWJnLWxpZ2h0ZXItNTogbGlnaHRlbigkbGlnaHQtYmFja2dyb3VuZCwgNSUpO1xuJGRhcmstYmctdG9vbHRpcDogbGlnaHRlbigjMmMyYzJjLCAyMCUpO1xuJGRhcmstYmctYWxwaGEtNDogcmdiYSgjMmMyYzJjLCAwLjA0KTtcbiRkYXJrLWJnLWFscGhhLTEyOiByZ2JhKCMyYzJjMmMsIDAuMTIpO1xuXG4vLyBEYXJrIGJnXG4kZGFyay1iZy1saWdodGVyLTU6IGxpZ2h0ZW4oJGRhcmstYmFja2dyb3VuZCwgNSUpO1xuJGRhcmstYmctbGlnaHRlci0xMDogbGlnaHRlbigkZGFyay1iYWNrZ3JvdW5kLCAxMCUpO1xuJGRhcmstYmctbGlnaHRlci0yMDogbGlnaHRlbigkZGFyay1iYWNrZ3JvdW5kLCAyMCUpO1xuJGRhcmstYmctbGlnaHRlci0zMDogbGlnaHRlbigkZGFyay1iYWNrZ3JvdW5kLCAzMCUpO1xuJGRhcmstYmctbGlnaHRlci00MDogbGlnaHRlbigkZGFyay1iYWNrZ3JvdW5kLCA0MCUpO1xuJGxpZ2h0LWJnLWFscGhhLTQ6IHJnYmEoI2ZhZmFmYSwgMC4wNCk7XG4kbGlnaHQtYmctYWxwaGEtMTI6IHJnYmEoI2ZhZmFmYSwgMC4xMik7XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'tbtl-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    backendUrl: '',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/pmilic/Projects/tbtl-platform-explorer/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map