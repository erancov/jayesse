"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var react_router_dom_1 = require("react-router-dom");
var __1 = require("..");
var resolve_1 = __importDefault(require("../../resolve"));
var assets_1 = __importDefault(require("../../assets"));
var basename = '/';
var segments = (_a = window === null || window === void 0 ? void 0 : window.location) === null || _a === void 0 ? void 0 : _a.pathname.split('/');
if (segments && segments.length > 3 && ['ipfs', 'ipns'].includes(segments[1])) {
    basename = "/" + segments[1] + "/" + segments[2] + "/";
}
react_dom_1.default.render(react_1.default.createElement(react_router_dom_1.BrowserRouter, { basename: basename },
    react_1.default.createElement(__1.App, __assign({}, resolve_1.default('web'), { basename: basename, assets: assets_1.default(basename) }))), document.getElementById('app'));
exports.default = (function (options) {
    react_1.default.createElement(react_router_dom_1.StaticRouter, { location: "/" },
        react_1.default.createElement(__1.App, __assign({}, resolve_1.default('web'))));
    // const html = ReactDOMServer.renderToString(
    // <ResponsiveContext.Provider value={{ width: 800 }}>
    //     <ResponsiveContext.Provider value={{ width: 800 }}>
    //     <App { ...resolve('web') } />
    // </ResponsiveContext.Provider>
    // </ResponsiveContext.Provider>)
    // return html
});
//# sourceMappingURL=static.js.map