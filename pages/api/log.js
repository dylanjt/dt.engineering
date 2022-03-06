import Parser from 'rss-parser'

const parser = new Parser()

const logAPI = async (req, res) => {
  if (req.method === 'GET') {
    const feed = await parser.parseURL('https://bg.raindrop.io/rss/public/23456285')
    res.json(feed?.items)
    return
  }
  res.status(404).send()
}

export default logAPI
