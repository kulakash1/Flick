import React from 'react'

export const MovieCatalogueCard = ({item}) => {
  return (
    <div style={{
        backgroundImage: `url(${item.imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>MovieCatalogueCard</div>
  )
}
