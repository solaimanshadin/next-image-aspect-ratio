import Image from "next/image";
import React from "react";
interface NextImageAspectRatioProps extends React.ComponentProps<typeof Image> {
    alt: string;
}
export default function NextImageAspectRatio({ height, width, alt, ...restProps }: NextImageAspectRatioProps): React.JSX.Element;
export default NextImageAspectRatio;

//# sourceMappingURL=index.d.ts.map
