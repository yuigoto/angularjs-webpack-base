import { BaseModule } from "modules";
import template from "components/base/base.footer.html";

BaseModule.component(
  "baseFooter",
  {
    templateUrl: template,
    controller: BaseFooterController
  }
);

BaseFooterController.$inject = [];

function BaseFooterController () {
  const ctrl = this;

  ctrl.$onInit = function () {
    console.log("[BaseFooterController] inicializado.");
  }
}
