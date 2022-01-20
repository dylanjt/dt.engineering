import Link from 'next/link'

const Index = ({ form }) => {
  return (
    <>
      <div className="space-y-4">
        <div className="font-semibold text-base">Hi there, my name is Dylan Taylor.</div>
        <div>I'm a fullstack engineer in Washington, DC.</div>
        <div>
          I help teams build performant cloud applications that are approachable to newly hired
          engineers, maintainable down the road, and flexible to evolving needs. For most SaaS
          enterprises, the architecture and quality of their code serves as the foundation of
          company growth for years to come. Engineering decisions matter.
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
              <li>Typescript</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div>
            <span className="font-semibold underline">Backend</span>
            <ul>
              <li>Node.js</li>
              <li>Rust</li>
              <li>Go</li>
            </ul>
          </div>
          <div>
            <span className="font-semibold underline">Data Store</span>
            <ul>
              <li>PostgreSQL</li>
              <li>Elasticsearch</li>
              <li>Redis</li>
            </ul>
          </div>
          <div>
            <span className="font-semibold underline">Cloud</span>
            <ul>
              <li>AWS (Fargate, Lambda, S3, SQS, & more)</li>
              <li>GCP (Cloud Run, Tasks, & more)</li>
              <li>GitHub Actions</li>
            </ul>
          </div>
        </div>
        <div>
          By leveraging battle-tested and industry-standard technologies like the ones above, teams
          can tap into a vibrant ecosystem of open source tooling, and unlock a wide pool of talent
          for future hiring. Combined with thoughtful development patterns and forward-leaning
          structural decisions, they can also ensure a solid proprietary core that will continuously
          meet business goals in tandem with company growth.
        </div>
        <div>
          <span className="font-semibold">Are you looking for engineering leadership?</span> That's
          what I do.
          <Link href="/contact">
            <a className="ml-1 underline">Get in touch</a>
          </Link>
          .
        </div>
      </div>
    </>
  )
}

export default Index
