import Image from "next/image";
import React from "react";
interface NextImageAspectRatioProps extends React.ComponentProps<typeof Image> {
    alt: string;
    maxWidth?: string;
}
export default function NextImageAspectRatio({ maxWidth, height, width, alt, ...restProps }: NextImageAspectRatioProps): React.JSX.Element;
export default NextImageAspectRatio;

//# sourceMappingURL=index.d.ts.map
