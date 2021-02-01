import React from 'react'
import { random } from 'lodash'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Image from 'next/image'

interface Source {
  type: 'image' | 'video'
  item: ImageSource | VideoSource
}

interface VideoSource {
  id: string
}

interface ImageSource {
  src: string
  bgColor?: string
  isFullScreen?: boolean
  fullScreenType?: 'cover' | 'contain'
  width?: number
  height?: number
}

const sources = [
  {
    type: 'image',
    item: {
      src: 'call-me-zelda.jpeg',
      bgColor: '#000000',
      isFullScreen: true,
    },
  },
  {
    type: 'image',
    item: {
      src: '5117f73dc1c0c.jpeg',
      isFullScreen: true,
    },
  },
  {
    type: 'image',
    item: {
      src: 'images.jpeg',
      bgColor: '#0f7b49',
      width: 255,
      height: 255,
    },
  },
  {
    type: 'image',
    item: {
      src: 'maxresdefault.jpg',
      isFullScreen: true,
      fullScreenType: 'cover',
    },
  },
  {
    type: 'image',
    item: {
      src: '20200131.png',
      isFullScreen: true,
      bgColor: '#000000',
    },
  },
  {
    type: 'image',
    item: {
      src: '3i9lgj.jpg',
      isFullScreen: true,
      bgColor: ' #ffffff',
    },
  },
  {
    type: 'image',
    item: {
      src: '202001312.jpeg',
      isFullScreen: true,
      bgColor: '#ffffff',
    },
  },
  {
    type: 'video',
    item: {
      id: 'qXnJJyq7ydY',
    },
  },
] as Source[]

const DEFAULT_BG_COLOR = '#ffffff'

const LinkImage = ({ image }: { image: ImageSource }) => (
  <div
    className="App"
    style={{
      backgroundColor: image.bgColor ?? DEFAULT_BG_COLOR,
    }}
  >
    {image.isFullScreen ? (
      <div
        style={{
          width: '100vw',
          height: '100vh',
        }}
      >
        <Image
          src={`/images/${image.src}`}
          layout="fill"
          objectFit={image.fullScreenType ?? 'contain'}
          alt="my name is link. not zelda."
        />
      </div>
    ) : (
      <div
        style={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          className="App__image"
          src={`/images/${image.src}`}
          width={image.width!}
          height={image.height!}
          alt="my name is link. not zelda."
        />
      </div>
    )}
  </div>
)

const LinkVideo = ({ video }: { video: VideoSource }) => (
  <iframe
    title="link video"
    style={{ width: '100vw', height: '100vh' }}
    width="100%"
    height="100%"
    src={`https://www.youtube.com/embed/${video.id}`}
    frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
)

const getRandomSource = async () =>
  new Promise(resolve => resolve(sources[random(0, sources.length - 1)]))

export default function IndexPage({
  source,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (source.type === 'image') {
    return <LinkImage image={source.item as ImageSource} />
  } else if (source.type === 'video') {
    return <LinkVideo video={source.item as VideoSource} />
  }

  return null
}

export const getServerSideProps: GetServerSideProps = async () => {
  const source = await getRandomSource()

  return {
    props: {
      source,
    },
  }
}
