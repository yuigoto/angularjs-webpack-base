import { RoutesModule } from "modules";
import { attributes, html } from "assets/data/test.md";
import loadedImage from "assets/img/import.jpg";
import template from "views/home.view.html";

RoutesModule.controller("HomeViewController", HomeViewController);

HomeViewController.$inject = ["$scope", "$routeParams", "$sce"];

function HomeViewController ($scope, $routeParams, $sce) {
  $scope.mdAttributes = JSON.stringify(attributes, null, 2);

  $scope.mdHtml = $sce.trustAsHtml(html);

  $scope.image = loadedImage;

  this.$onInit = function () {
    console.log("[HomeViewController] inicializado");
  };
};

export const HomeView = {
  templateUrl: template
};
