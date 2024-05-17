import React from 'react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Button } from '../ui/button'
import { Brain, Heart } from 'lucide-react'

export type GuideCardType = {
  id: string
  title?: string
  description?: string
  img?: string
  time?: string
  price?: number
  isFinished: boolean
  isFavorite: boolean
  isHit: boolean
  categories?: Category[],
  progress?: number,
}

type Category = {
  id: string
  title: string
}

type GuideProps = {
  guide: GuideCardType
};

const GuideCard = (props: GuideProps) => {
  const { guide } = props;

  return (
    <article className={cn(
      'p-4 bg-primary-foreground text-secondary-foreground border rounded-2xl cursor-pointer sm:hover:scale-105 transition-transform duration-300 shadow-none',
      {
        'border-secondary-foreground': guide.isFinished
      }
    )}>
      <div className='flex items-center'>
        <div className='flex gap-2 mr-auto'>
          { guide?.categories?.map(({ id, title }) => {
            return <Badge
              variant={'secondary'}
              key={id}
              className='px-2 py-1 text-base uppercase'
            >{title}</Badge>
          })}
        </div>
        <div className='flex items-center gap-2'>
          <Brain />
          <Button variant={'ghost'} className='w-10 h-10 p-0' aria-label='Add to favorite'>
            <Heart />
          </Button>
        </div>
      </div>
      
      <div className='flex gap-8 mt-4'>
        <div className="flex flex-1 flex-col gap-4">
          <h2 className="font-semibold">{ guide.title }</h2>

          <p className="text-sm line-clamp-3">{ guide.description }</p>

          <div className="flex flex-col mt-auto text-sm whitespace-nowrap">
            {guide.time && (
              <div>
                Время: <span className="ml-1 text-primary">{ guide.time }</span>
              </div>
            )}
            {guide.price && (
              <div>
                Вложения: <span className="ml-1 text-primary">{ guide.price }</span>
              </div>
            )}
            <div>
            </div>
          </div>
        </div>

        <div className="shrink-0 w-44 h-56 rounded-xl overflow-hidden">
          <img
            className="w-full h-full object-cover bg-accent"
            src={guide.img}
            alt={guide.title}
            loading="lazy"
          />
        </div>
      </div>
    </article>
  )
}

export default GuideCard