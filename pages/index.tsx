/// app.js
import React from 'react'
import DeckGL from '@deck.gl/react'
import {GeoJsonLayer} from '@deck.gl/layers'
import {StaticMap} from 'react-map-gl'

import { MAPBOX_TOKEN  } from '../config'
import { entireBalaegil } from '../data/entire-balaegil'

// Viewport settings
const INITIAL_VIEW_STATE = {
  longitude: 127.93879233879944,
  latitude: 34.827793906417426,
  zoom: 11,
  pitch: 0,
  bearing: 0
}

const layer = new GeoJsonLayer({
  id: 'geojson-layer',
  data: entireBalaegil,
  pickable: true,
  stroked: false,
  filled: true,
  extruded: true,
  lineWidthScale: 20,
  lineWidthMinPixels: 2,
  getFillColor: [160, 160, 180, 200],
  getRadius: 100,
  getLineWidth: 1,
  getElevation: 30
})

const IndexPage = () => {
  return (
    <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      layers={[layer]}
      getTooltip={({object}) => object && (object.properties.name || object.properties.station)}
    >
      <StaticMap mapboxApiAccessToken={MAPBOX_TOKEN} />
    </DeckGL>
  )
}

export default IndexPage
