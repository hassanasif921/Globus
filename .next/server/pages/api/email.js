"use strict";
(() => {
var exports = {};
exports.id = 846;
exports.ids = [846];
exports.modules = {

/***/ 5142:
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ 7492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(req, res) {
    (__webpack_require__(5142).config)();
    let nodemailer = __webpack_require__(5184);
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "mail.globuschain.com",
        auth: {
            user: "mail@globuschain.com",
            pass: process.env.password
        },
        secure: true
    });
    const mailData = {
        from: "mail@globuschain.com",
        to: "info@globuschain.com",
        subject: "Globuschain Contact Form",
        text: `Form Submitted \nFullname: ${req.body.name} \nEmail: ${req.body.email} \nTelegram: ${req.body.telegram} \n Message: ${req.body.message}`,
        html: ""
    };
    transporter.sendMail(mailData, function(err, info) {
        if (err) console.log(err);
        else console.log(info);
    });
    console.log(req.body);
    res.send("success");
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7492));
module.exports = __webpack_exports__;

})();