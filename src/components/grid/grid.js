import React from 'react'
import './grid.scss'
import withLocation from '../common/withLocation'
import withShowcase from '../common/withShowcase/withShowcase'

// Subcomponents
const Tile = ({ html, icon }) => (
  <div className="single-offer d-flex flex-row">
    <div className="icon">
      <img src={`/icons/${icon}`} alt="" />
    </div>
    <div className="desc">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  </div>
)

// Component
const Grid = ({ meta: { heading, description, tiles }, elemId }) => (
  <section className="grid section-gap" id={elemId}>
    <div className="grid__content container">
      <div className="row d-flex justify-content-center">
        <div className="menu-content pb-60 col-lg-10">
          <div className="title text-center">
            <h1 className="mb-10">{heading}</h1>
            <p>{description}</p>
          </div>
        </div>
      </div>
      <div className="row flex-wrap">
        {tiles.map((tile, i) => {
          return <Tile html={tile.html} icon={tile.icon} key={i} />
        })}
      </div>
    </div>
  </section>
)

export default withLocation(withShowcase(Grid))
