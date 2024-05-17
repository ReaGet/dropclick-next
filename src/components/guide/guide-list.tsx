import React from 'react'
import GuideCard from './guide-card'
import type { GuideCardType } from './guide-card';

const guides: GuideCardType[] = [
  {
    id: "qwe",
    title: "Pepsi is best",
    isFavorite: false,
    isHit: false,
    isFinished: false,
    categories: [
      { id: 'qw', title: 'cto' },
      { id: 'qw', title: 'palm' }
    ],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptas iste impedit ex tenetur. Libero, nulla!',
    time: '30',
    price: 100
  },
  {
    id: "123",
    title: "Pepsi is best",
    isFavorite: false,
    isHit: false,
    isFinished: true
  }
];

const GuideList = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-16'>
      { guides.map((guide) => {
        return (
          <GuideCard
            key={guide.id}
            guide={guide}
          />
        )
      })}
    </div>
  )
}

export default GuideList