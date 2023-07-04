"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_Form_D_Layout = void 0;
const form_extensibility_model_ts_1 = require("form-extensibility-model-ts");
const form_extensibility_model_ts_2 = require("form-extensibility-model-ts");
const form_d_actions_1 = require("./form-d.actions");
function get_Form_D_Layout() {
    const formLayout = new form_extensibility_model_ts_1.DynamicFormLayout({
        title: 'Product Dialogue Form D',
    });
    formLayout.elements = [
        new form_extensibility_model_ts_2.Action({
            name: 'Continue',
            function: (0, form_d_actions_1.getContinue)(formLayout),
            order: 1,
        }),
    ];
    return formLayout;
}
exports.get_Form_D_Layout = get_Form_D_Layout;
//# sourceMappingURL=form-d.form.js.map