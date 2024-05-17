import GuideList from '@/components/guide/guide-list'
import React from 'react'

const App = () => {
  return (
    <main className='flex flex-col px-6 mt-20'>
      <div>Filters</div>
      <GuideList />
    </main>
  )
}

export default App