import React from 'react'
import hoodieCategorie from './assets/Hoodies.jpg'

export default function CategorySection({categories}) {
  return (
<div className='Ecommerce1-CategoriesSection'>
    {Array.from({ length: categories }).map((_, index) => (
  <div className='Ecommerce1-CategorieCard'>
  <div className='Ecommerce1-CategorieCardImage' style={{backgroundImage:`url(${hoodieCategorie})`}} />
  <div className='Ecommerce1-CategorieCardText'>
      <p>Hoodies</p>
  </div>
</div>
    ))}
  
</div>
  )
}
