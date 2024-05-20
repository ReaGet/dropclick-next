'use client'
import { cn } from '@/lib/utils'
import React, { useState } from 'react'

type Props = {
  content: string
}

const GuideDescription = ({ content }: Props) => {
  const [descExpanded, setDescExpanded] = useState(false);
  const [isLongContent, setIsLongContent] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4 mt-14 text-xl lg:text-2xl text-[#e4e4e4]">
      <div
        className={cn(
          "relative leading-snug overflow-hidden transition-all",
          descExpanded ? "max-h-[1000px]" : "max-h-[170px]"
        )}
      >
        <div
          className="guide__description"
          dangerouslySetInnerHTML={{__html: content}}
        ></div>

        {isLongContent && (
          <div
            className={cn(
              "absolute w-full h-14 bottom-0 bg-gradient-to-b from-transparent to-black transition-opacity",
              descExpanded ? "opacity-0" : "",
            )}
          ></div>
        )}
      </div>
      {isLongContent && (
        <button
          onClick={() => setDescExpanded(!descExpanded)}
          className="mx-auto text-primary"
        >
          { (!descExpanded ? "Развернуть" : "Свернуть") }
        </button>
      )}
    </div>
  )
}

export default GuideDescription