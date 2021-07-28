// eslint-disable-next-line
import React from 'react'
import DeckGL from '@deck.gl/react'
import { GeoJsonLayer } from '@deck.gl/layers'
import { StaticMap } from 'react-map-gl'

import { Container } from '@material-ui/core'

import { MAPBOX_TOKEN } from '../config'
import { entireBalaegil } from '../data/entire-balaegil'
import { bus25 } from '../data/bus25'
import { bus601 } from '../data/bus601'

// Viewport settings
const INITIAL_VIEW_STATE = {
  longitude: 127.93879233879944,
  latitude: 34.827793906417426,
  zoom: 11,
  pitch: 0,
  bearing: 0
}

const balaegilLayer = new GeoJsonLayer({
  id: 'balaegil-layer',
  data: entireBalaegil,
  pickable: true,
  stroked: false,
  filled: true,
  extruded: true,
  lineWidthScale: 20,
  lineWidthMinPixels: 2,
  getFillColor: [160, 160, 180, 200],
  getLineColor: [0, 200, 0, 255],
  getRadius: 100,
  getLineWidth: 1,
  getElevation: 30
})

const bus25Layer = new GeoJsonLayer({
  id: 'bus25-layer',
  data: bus25,
  pickable: true,
  stroked: false,
  filled: true,
  extruded: true,
  lineWidthScale: 20,
  lineWidthMinPixels: 2,
  getLineColor: [0, 0, 255, 255],
  getRadius: 100,
  getLineWidth: 1,
  getElevation: 30
})

const bus601Layer = new GeoJsonLayer({
  id: 'bus601-layer',
  data: bus601,
  pickable: true,
  stroked: false,
  filled: true,
  extruded: true,
  lineWidthScale: 20,
  lineWidthMinPixels: 2,
  getLineColor: [255, 0, 0, 255],
  getRadius: 100,
  getLineWidth: 1,
  getElevation: 30
})

const IndexPage = () => {
  return (
    <Container>
      <DeckGL
        initialViewState={INITIAL_VIEW_STATE}
        controller={true}
        layers={[balaegilLayer, bus25Layer, bus601Layer]}
        getTooltip={({ object }) => object && (object.properties.name || object.properties.station)}
      >
        <StaticMap mapboxApiAccessToken={MAPBOX_TOKEN} />
      </DeckGL>
    </Container>
  )
}

export default IndexPage
