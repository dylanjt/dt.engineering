import { useState, useEffect } from 'react'
import Head from 'next/head'
import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'

dayjs.extend(LocalizedFormat)

const Log = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const getItems = async () => {
      const res = await fetch('/api/log').then((x) => x.json())
      if (res) {
        setItems(res)
      }
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
          {items.map((item, i) => (
            <div key={i} className="group">
              <a href={item.link}>
                <div className="text-xl decoration-1 underline-offset-2 group-hover:underline">
                  {item.title}
                </div>
                <div className="space-x-1 text-xs text-gray-500">
                  <span>{dayjs(item.isoDate).format('L')}</span>
                  <span className="font-serif font-thinnest italic">from</span>
                  <span>{parseDomain(item.link)}</span>
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
