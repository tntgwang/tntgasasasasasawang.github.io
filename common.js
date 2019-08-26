(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/auth/auth-guard.guard.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth-guard.guard.ts ***!
  \******************************************/
/*! exports provided: AuthGuardGuard, AdminAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardGuard", function() { return AuthGuardGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAuthService", function() { return AdminAuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardGuard = /** @class */ (function () {
    function AuthGuardGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuardGuard.prototype.canActivate = function () {
        if (!this.authService.getToken()) {
            this.router.navigate(["/auth/signin"]);
            return false;
        }
        return true;
    };
    AuthGuardGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AuthGuardGuard);
    return AuthGuardGuard;
}());

var AdminAuthService = /** @class */ (function () {
    function AdminAuthService(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AdminAuthService.prototype.canActivateAuth = function () {
        if (this.authService.getToken()) {
            this.router.navigate(["/"]);
        }
    };
    AdminAuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AdminAuthService);
    return AdminAuthService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map