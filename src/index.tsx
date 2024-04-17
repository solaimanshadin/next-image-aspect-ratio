import Image from "next/image";
import React from "react";
import { extractNumber } from "./utils";

interface NextImageAspectRatioProps extends React.ComponentProps<typeof Image> {
  alt: string;
  maxWidth?: string;
}

function NextImageAspectRatio({
  maxWidth = "100%",
  height,
  width,
  alt,
  ...restProps
}: NextImageAspectRatioProps) {
  const heightNum = extractNumber(height);
  const widthNum = extractNumber(width);
  const ratio = widthNum !== 0 ? heightNum / widthNum : 0;

  return (
    <div style={{ maxWidth: maxWidth }}>
      <div
        style={{
          position: "relative",
          width: "100%",

          paddingBottom: `${ratio * 100}%`,
        }}
      >
        <Image
          alt={alt}
          {...restProps}
          layout="fill"
          objectFit="cover"
          style={{ borderRadius: "9px" }}
        />
      </div>
    </div>
  );
}

export default NextImageAspectRatio;
