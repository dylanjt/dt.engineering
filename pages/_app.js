import Head from 'next/head'
import { NextSeo } from 'next-seo'
import Particles from 'react-tsparticles'

import 'tailwindcss/tailwind.css'

import Sidebar from '../components/sidebar'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#111827" />
      </Head>
      <NextSeo
        title="Dylan Taylor"
        description="Fullstack web engineer. I lead teams that build digital foundations for company growth."
      />
      <div className="absolute min-h-screen w-screen overflow-hidden">
        <div className="fixed w-screen h-screen z-0 bg-gray-900">
          <Particles options={particlesConfig} />
        </div>

        <div className="md:container md:mx-auto p-4 md:p-0 mt-0 md:mt-24 relative z-10 text-gray-50">
          <div className="flex flex-col md:flex-row gap-4 md:gap-16">
            <div className="">
              <Sidebar />
            </div>
            <div className="pt-1.5 md:w-2/3">
              <Component {...pageProps} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

const particlesConfig = {
  background: {
    color: {
      value: 'transparent',
    },
  },
  fpsLimit: 60,
  particles: {
    color: {
      value: 'random',
    },
    links: {
      color: 'random',
      distance: 150,
      enable: true,
      opacity: 0.3,
      width: 0.5,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: 'none',
      enable: true,
      outMode: 'bounce',
      random: true,
      speed: 0.5,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.3,
    },
    shape: {
      type: 'circle',
    },
    size: {
      random: true,
      value: 1.5,
    },
  },
  detectRetina: true,
}
