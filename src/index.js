import angular from "angular";
import * as angularAnimate from "angular-animate";
import * as angularCookies from "angular-cookies";
import * as angularFilter from "angular-filter";
import * as angularRoute from "angular-route";

import "modules";
import "components";
import "core/router";
import "styles/main.scss";

const app = angular.module("angularjs-app-base", [
  "ngAnimate",
  "ngCookies",
  "ngRoute",
  "angular.filter",
  
  "base",
  "routes",
]);
