import './App.css'

import React, { useState } from 'react'
import { random } from 'lodash'

interface Source {
  type: 'image' | 'video'
  item: Image | Video
}

interface Video {
  id: string
}

interface Image {
  src: string
  bgColor?: string
  isFullScreen?: boolean
  fullScreenType?: 'cover' | 'contain'
}

const sources = [
  {
    type: 'image',
    item: {
      src: 'call-me-zelda.jpeg',
      bgColor: '#000000',
      isFullScreen: true
    },
  },
  {
    type: 'image',
    item: {
      src: '5117f73dc1c0c.jpeg',
      isFullScreen: true
    }
  },
  {
    type: 'image',
    item: {
      src: 'images.jpeg',
      bgColor: '#0f7b49',
    },
  },
  {
    type: 'image',
    item: {
      src: 'maxresdefault.jpg',
      isFullScreen: true,
      fullScreenType: 'cover'
    }
  },
  {
    type: 'image',
    item: {
      src: '20200131.png',
      isFullScreen: true,
      bgColor: '#000000'
    }
  },
  {
    type: 'image',
    item: {
      src: '3i9lgj.jpg',
      isFullScreen: true,
      bgColor: ' #ffffff'
    }
  },
  {
    type: 'image',
    item: {
      src: '202001312.jpeg',
      isFullScreen: true,
      bgColor: '#ffffff'
    },
  },
  {
    type: 'video',
    item: {
      id: 'qXnJJyq7ydY'
    }
  }
] as Source[]

const DEFAULT_BG_COLOR = '#ffffff'

const LinkImage = ({ image }: { image: Image }) => (
  <div
    className="App"
    style={{
      backgroundColor: image.bgColor ?? DEFAULT_BG_COLOR
    }}
  >
    {image.isFullScreen ? (
      <div
        style={{
          width: '100vw',
          height: '100vh',
          backgroundImage: `url('/images/${image.src}')`,
          backgroundPosition: 'center',
          backgroundSize: image.fullScreenType ?? 'contain',
          backgroundRepeat: 'no-repeat'
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

const LinkVideo = ({ video }: { video: Video }) => (
  <iframe title="link video" style={{ width: '100vw', height: '100vh' }} width="100%" height="100%" src={`https://www.youtube.com/embed/${video.id}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
)

const getSource = () => sources[random(0, sources.length - 1)]

const App: React.FC = () => {
  const [source] = useState<Source>(getSource())

  if (source.type === 'image') {
    return (
      <LinkImage image={source.item as Image} />
    )
  } else if (source.type === 'video') {
    return (
      <LinkVideo video={source.item as Video} />
    )
  }

  return null
}

export default App
