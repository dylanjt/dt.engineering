import { useState, useEffect } from 'react'
import Head from 'next/head'
import Parser from 'rss-parser'
import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'

const parser = new Parser()
dayjs.extend(LocalizedFormat)

const Log = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const getItems = async () => {
      const feed = await parser.parseURL('https://bg.raindrop.io/rss/public/23456285')
      console.log(feed)
      setItems(feed.items)
    }

    getItems()
  }, [])

  return (
    <>
      <Head>
        <title>Log</title>
      </Head>
      <div className="space-y-4">
        <div className="font-semibold text-base">Log</div>
        <div className="pt-4 pb-8 space-y-8">
          {items.map((item) => (
            <div className="group">
              <a href={item.link}>
                <div className="text-xl decoration-1 underline-offset-2 group-hover:underline">
                  {item.title}
                </div>
                <div className="space-x-1 text-xs text-gray-500">
                  <span>{dayjs(item.isoDate).format('L')}</span>
                  <span className="font-serif font-thinnest italic">from</span>
                  <span className="group-hover:underline">{parseDomain(item.link)}</span>
                </div>
                <div className="text-gray-400">{item.contentSnippet}</div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Log

const parseDomain = (url) => new URL(url).hostname.replace('www.', '')
