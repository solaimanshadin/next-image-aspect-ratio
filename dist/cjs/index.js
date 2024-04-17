var $i9b1P$reactjsxruntime = require("react/jsx-runtime");
var $i9b1P$nextimage = require("next/image");
require("react");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $9233cea927cb9637$export$2e2bcd8739ae039);



function $9ba0f9a5c47c04f2$export$ee2b54e92bdbaa0c(inputString) {
    if (typeof inputString === "number") return inputString;
    else if (typeof inputString === "string") {
        const regex = /-?\d+(\.\d+)?/;
        const match = inputString.match(regex);
        return match ? Number(match[0]) : NaN;
    }
    return NaN;
}


function $9233cea927cb9637$var$NextImageAspectRatio({ height: height, width: width, alt: alt, ...restProps }) {
    const heightNum = (0, $9ba0f9a5c47c04f2$export$ee2b54e92bdbaa0c)(height);
    const widthNum = (0, $9ba0f9a5c47c04f2$export$ee2b54e92bdbaa0c)(width);
    const ratio = widthNum !== 0 ? heightNum / widthNum : 0;
    return /*#__PURE__*/ (0, $i9b1P$reactjsxruntime.jsx)("div", {
        style: {
            position: "relative",
            width: "100%",
            paddingBottom: `${ratio * 100}%`
        },
        children: /*#__PURE__*/ (0, $i9b1P$reactjsxruntime.jsx)((0, ($parcel$interopDefault($i9b1P$nextimage))), {
            alt: alt,
            ...restProps,
            layout: "fill",
            objectFit: "cover",
            style: {
                borderRadius: "9px"
            }
        })
    });
}
var $9233cea927cb9637$export$2e2bcd8739ae039 = $9233cea927cb9637$var$NextImageAspectRatio;


//# sourceMappingURL=index.js.map
