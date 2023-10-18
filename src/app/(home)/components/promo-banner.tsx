import Image, { ImageProps } from "next/image";
const PromoBanner = ({ alt, ...props }: ImageProps) => {
  return (
    <Image
      className="h-auto w-full px-5"
      sizes="100vw"
      alt={alt}
      width={0}
      height={0}
      {...props}
    />
  );
};

export default PromoBanner;
