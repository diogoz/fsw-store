"use client"

import Image from "next/image"

export default function Home() {
  return (
    <div className="p-5">
      <Image
        className="h-auto w-full"
        sizes="100vw"
        src="/banner-home-01.png"
        alt="Até 55% de desconto só esse mês"
        width={0}
        height={0}
      />
    </div>
  )
}
