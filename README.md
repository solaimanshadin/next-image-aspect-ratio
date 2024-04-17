# next-image-aspect-ratio <a href="https://github.com/solaimanshadin/next-image-aspect-ratio/blob/master/LICENSE"><img src="https://img.shields.io/badge/License-MIT-brightgreen.svg" alt="License"></a> <a href="https://www.npmjs.com/package/next-image-aspect-ratio"><img src="https://img.shields.io/npm/v/next-image-aspect-ratio.svg" alt="npm version"></a>

`next-image-aspect-ratio` is a React component designed to work within Next.js projects to provide an easy and effective way to manage image aspect ratios. This component automatically calculates the aspect ratio based on the provided width and height and ensures the image fills its container without distortion.

## Features

- **Easy Integration**: Seamlessly integrates with Next.js projects.
- **Responsive Design Support**: Maintains the aspect ratio of images to ensure they adapt to different device screens without distortion.
- **Full Compatibility**: Accepts all image properties available in Next.js's `Image` component.
- **Customizable Width**: Allows customization of the maximum width through a simple prop.

## Installation

To install the package, you can use npm or Yarn. Run one of the following commands in the root directory of your Next.js project:

```bash
npm install next-image-aspect-ratio
```

Or

```bash
yarn add next-image-aspect-ratio
```

## Usage

Here's a complete example of how to use the `NextImageAspectRatio` component within a functional React component in a Next.js project:

```jsx
import React from "react";
import NextImageAspectRatio from "next-image-aspect-ratio";

function ImageDisplayComponent() {
  return (
    <NextImageAspectRatio
      src="/path/to/image.jpg"
      width={1920}
      height={1080}
      alt="Descriptive alt text for accessibility"
      maxWidth="50%"
    />
  );
}

export default ImageDisplayComponent;
```

## Props

Here are the props you can pass to `NextImageAspectRatio`:

| Property   | Type               | Required | Default  | Description                                                |
| ---------- | ------------------ | -------- | -------- | ---------------------------------------------------------- |
| `src`      | `string`           | Yes      | None     | URL of the image.                                          |
| `width`    | `string \| number` | Yes      | None     | The original width of the image.                           |
| `height`   | `string \| number` | Yes      | None     | The original height of the image.                          |
| `alt`      | `string`           | Yes      | None     | Descriptive text for the image, crucial for accessibility. |
| `maxWidth` | `string`           | No       | `"100%"` | The maximum width of the image container.                  |

Additionally, `NextImageAspectRatio` supports all the properties that are available to the Next.js `Image` component, allowing you to use optional properties such as `priority`, `placeholder`, `blurDataURL`, and more for enhanced image handling and performance.
