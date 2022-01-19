import Head from 'next/head'

const Index = () => {
  return (
    <>
      <Head>
        <title>DT</title>
      </Head>
      <div className="space-y-4">
        <div className="font-semibold text-base">Hi there, my name is Dylan Taylor.</div>
        <div>I'm a fullstack engineer in Washington, DC.</div>
        <div>
          I help teams build performant software systems that are approachable to fresh eyes,
          maintainable down the road, and flexible to evolving needs.
        </div>
        <div>
          With 7+ years of industry experience, these are some of the technologies I most often use:
        </div>
        <div className="flex flex-col md:flex-row gap-4 font-mono text-purple-300 text-sm">
          <div>
            <span className="font-semibold underline">Frontend</span>
            <ul>
              <li>React</li>
              <li>Next.js</li>
              <li>Redux</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div>
            <span className="font-semibold underline">Backend</span>
            <ul>
              <li>Node.js</li>
              <li>Rust</li>
            </ul>
          </div>
          <div>
            <span className="font-semibold underline">Persistence</span>
            <ul>
              <li>PostgreSQL</li>
              <li>Elasticsearch</li>
              <li>Redis</li>
            </ul>
          </div>
          <div>
            <span className="font-semibold underline">Cloud</span>
            <ul>
              <li>AWS (Fargate, Lambda, SQS)</li>
              <li>GCP (Cloud Run, Tasks)</li>
              <li>GitHub Actions</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
