"use client";
import Image from "next/image";
import { useState } from "react";

interface ProductImageProps {
  imageUrls: string[];
  name: string;
}

const ProductImages = ({ imageUrls, name }: ProductImageProps) => {
  const [currentImage, setCurrentImage] = useState(imageUrls[1]);

  const handleImageClick = (imageUrl: string) => {
    setCurrentImage(imageUrl);
  };
  return (
    <div className="flex flex-col">
      <div
        className={
          "flex h-[380px] w-full items-center justify-center bg-accent"
        }
      >
        <Image
          src={currentImage}
          alt={name}
          height={0}
          width={0}
          sizes="100vw"
          style={{
            objectFit: "contain",
          }}
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
        />
      </div>

      <div className="mt-8 grid grid-cols-4 gap-4 px-5">
        {imageUrls.map((imageUrl) => (
          <button
            onClick={() => handleImageClick(imageUrl)}
            key={imageUrl}
            className={`flex h-[100px] items-center justify-center rounded-lg bg-accent ${
              imageUrl === currentImage &&
              "border-2 border-solid border-primary"
            }`}
          >
            <Image
              src={imageUrl}
              alt={name}
              height={0}
              width={0}
              sizes="100vw"
              className="max-h-auto[70%] max-w-auto[80%] h-auto w-auto"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;