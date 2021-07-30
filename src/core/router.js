import { RoutesModule } from "modules";
import { HomeView } from "views/home.view";

RoutesModule.config(["$routeProvider", "$locationProvider", Routes]);

function Routes ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix("");
  $locationProvider.html5Mode(true);

  $routeProvider
    .when("/", HomeView);
}
