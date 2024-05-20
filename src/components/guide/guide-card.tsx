import React from 'react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Button } from '../ui/button'
import { Croissant, Heart } from 'lucide-react'
import Link from 'next/link';
import { Progress } from '../ui/progress'

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
      <Link className='flex flex-col' href={`/app/guides/${guide.id}`}>
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
            <Croissant />
            <Button variant={'ghost'} className='w-10 h-10 p-0' aria-label='Add to favorite'>
              <Heart />
            </Button>
          </div>
        </div>
        
        <div className='flex gap-8 mt-4'>
          <div className='flex flex-1 flex-col gap-4'>
            <h2 className='font-semibold'>{ guide.title }</h2>

            <p className='text-sm line-clamp-3'>{ guide.description }</p>

            <div className='flex flex-col mt-auto text-sm whitespace-nowrap'>
              {guide.time && (
                <div>
                  Время: <span className='ml-1 text-primary'>{ guide.time }</span>
                </div>
              )}
              {guide.price && (
                <div>
                  Вложения: <span className='ml-1 text-primary'>{ guide.price }</span>
                </div>
              )}
              <div>
              </div>
            </div>
          </div>

          <div className='shrink-0 w-44 h-56 rounded-xl overflow-hidden'>
            <img
              className='w-full h-full object-cover bg-accent'
              src={guide.img}
              alt={guide.title}
              loading='lazy'
            />
          </div>
        </div>

        <div className='flex items-end gap-16 mt-8'>
          <div className="flex flex-col gap-2 w-full">
            <div className='flex justify-between w-full text-xs'>
              <span>Прогресс:</span>
              <span>{ 50 }%</span>
            </div>
            <Progress
              value={50}
            />
          </div>
        </div>
      </Link>
    </article>
  )
}

export default GuideCard