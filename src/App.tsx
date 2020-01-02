import './App.css'

import React from 'react'
import { random } from 'lodash'

interface Image {
  src: string
  bgColor?: string
  isFullScreen?: boolean
}

const images = [
  {
    src: '4fdbe805909ca.jpeg',
    bgColor: '#000000',
  },
  {
    src: '5117f73dc1c0c.jpeg',
  },
  {
    src: 'images.jpeg',
    bgColor: '#0f7b49',
  },
  {
    src: 'maxresdefault.jpg',
    isFullScreen: true,
  },
] as Image[]

const DEFAULT_BG_COLOR = '#ffffff'

const App: React.FC = () => {
  const image = images[random(0, images.length - 1)]

  return (
    <div
      className="App"
      style={{
        backgroundColor: image.bgColor ? image.bgColor : DEFAULT_BG_COLOR,
      }}
    >
      {image.isFullScreen ? (
        <div
          style={{
            width: '100vw',
            height: '100vh',
            backgroundImage: `url('/images/${image.src}')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        ></div>
      ) : (
        <img
          className="App__image"
          src={`/images/${image.src}`}
          alt="my name is link. not zelda."
        />
      )}
    </div>
  )
}

export default App
