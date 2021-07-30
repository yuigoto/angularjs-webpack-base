import { BaseModule } from "modules";
import template from "components/base/base.header.html";

BaseModule.component(
  "baseHeader",
  {
    templateUrl: template,
    controller: BaseHeaderController
  }
);

BaseHeaderController.$inject = [];

function BaseHeaderController () {
  const ctrl = this;

  ctrl.$onInit = function () {
    console.log("[BaseHeaderController] inicializado.");
  }
}
