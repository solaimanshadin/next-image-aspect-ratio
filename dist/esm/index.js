import {jsx as $gMmFq$jsx} from "react/jsx-runtime";
import $gMmFq$nextimage from "next/image";
import "react";




function $fab42eb3dee39b5b$export$ee2b54e92bdbaa0c(inputString) {
    if (typeof inputString === "number") return inputString;
    else if (typeof inputString === "string") {
        const regex = /-?\d+(\.\d+)?/;
        const match = inputString.match(regex);
        return match ? Number(match[0]) : NaN;
    }
    return NaN;
}


function $090815f5086f7f29$var$NextImageAspectRatio({ maxWidth: maxWidth = "100%", height: height, width: width, alt: alt, ...restProps }) {
    const heightNum = (0, $fab42eb3dee39b5b$export$ee2b54e92bdbaa0c)(height);
    const widthNum = (0, $fab42eb3dee39b5b$export$ee2b54e92bdbaa0c)(width);
    const ratio = widthNum !== 0 ? heightNum / widthNum : 0;
    return /*#__PURE__*/ (0, $gMmFq$jsx)("div", {
        style: {
            maxWidth: maxWidth
        },
        children: /*#__PURE__*/ (0, $gMmFq$jsx)("div", {
            style: {
                position: "relative",
                width: "100%",
                paddingBottom: `${ratio * 100}%`
            },
            children: /*#__PURE__*/ (0, $gMmFq$jsx)((0, $gMmFq$nextimage), {
                alt: alt,
                ...restProps,
                layout: "fill",
                objectFit: "cover",
                style: {
                    borderRadius: "9px"
                }
            })
        })
    });
}
var $090815f5086f7f29$export$2e2bcd8739ae039 = $090815f5086f7f29$var$NextImageAspectRatio;


export {$090815f5086f7f29$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=index.js.map
