import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";
const PromoBanner = ({ alt, className, ...props }: ImageProps) => {
  return (
    <Image
    className={cn("h-auto w-full px-5", className)}
      sizes="100vw"
      alt={alt}
      width={0}
      height={0}
      {...props}
    />
  );
};

export default PromoBanner;
