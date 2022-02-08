import { SVGProps } from "react";

const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={125}
    height={125}
    viewBox="0 0 125 125"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={62.5} cy={62.5} r={62.5} fill="black" />
    <path
      d="M40.8636 44.5881V36.6364H82.642V44.5881H66.4574V89H57.0483V44.5881H40.8636Z"
      fill="white"
    />
  </svg>
);

export default Logo;
