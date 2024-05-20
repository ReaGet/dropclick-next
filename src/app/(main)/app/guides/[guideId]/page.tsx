import GuideDescription from '@/components/guide/guide-description'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowTopRightIcon } from '@radix-ui/react-icons'
import { CircleDollarSign, Clock5, ExternalLink, Heart, MoveLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <main>
      <div className='flex items-center justify-center w-full h-[250px] mb-16 bg-primary-foreground bg-[radial-gradient(#332F1F_1px,transparent_1px)] [background-size:2rem_2rem]'>
        <div className='w-56 h-56 rounded-xl overflow-hidden'>
          <img
            className='w-full h-full object-cover'
            loading='lazy'
          />
        </div>
      </div>

      <div className='container flex flex-col gap-16'>
        <div className="flex text-md text-primary">
          <Link href="/app/guides" className="flex items-center gap-2">
            <MoveLeft className='stroke-current' />
            Назад к гайдам
          </Link>
        </div>

        <section className="flex flex-col md:flex-row items-start gap-16">
          <div className="flex flex-col flex-grow">
            <div className="flex items-start">
              <div className="flex flex-col md:flex-row items-start md:items-end gap-2 md:gap-4">
                <h1 className="text-2xl font-bold">Cocacola</h1>
                <span className="text-xl text-[#666666]">10.05.2024</span>
              </div>

              <div className="flex items-center gap-10 lg:gap-20 ml-auto">
                <Button variant={'ghost'} className='w-10 h-10 p-0' aria-label='Add to favorite'>
                  <Heart />
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap gap-8 mt-4 text-lg text-white select-none whitespace-nowrap">
              <Badge className='px-3 py-2' variant={'secondary'}>
                <Clock5 className='w-6 h-6 mr-2' />
                30 мин
              </Badge>
              <Badge className='px-3 py-2' variant={'secondary'}>
                <CircleDollarSign className='w-6 h-6 mr-2' />
                100
              </Badge>
              <Badge className='px-3 py-2 border-secondary-foreground' variant={'secondary'}>
                Завершен
              </Badge>
            </div>

            <GuideDescription content='' />
          </div>

          <div className="flex flex-col gap-8 lg:gap-12 shrink-0 w-full md:w-[350px] lg:w-[420px] min-h-[200px] p-10 bg-primary-foreground rounded-3xl">
            <a
              className="flex mr-auto text-lg font-bold hover:text-primary-hover transition-colors"
              href="#"
              target="_blank"
            >
              Twitter score
              <ArrowTopRightIcon className='w-4 h-4' />
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Page