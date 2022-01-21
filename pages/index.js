import Link from 'next/link'

const Index = ({ form }) => {
  return (
    <>
      <div className="space-y-4">
        <div className="font-semibold text-base">Hi there, my name is Dylan Taylor.</div>
        <div>I'm a fullstack engineer in Washington, DC.</div>
        <div>
          I help SaaS teams build foundational software systems that are intuitive, maintainable,
          and flexible to evolving needs. With 7+ years of industry experience, these are some of
          the technologies I most often use:
        </div>
        <div className="flex flex-row gap-4 font-mono text-purple-300 text-sm overflow-x-auto">
          <div className="shrink-0">
            <span className="font-semibold underline">Frontend</span>
            <ul>
              <li>React</li>
              <li>Next.js</li>
              <li>Typescript</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div className="shrink-0">
            <span className="font-semibold underline">Backend</span>
            <ul>
              <li>Node.js</li>
              <li>Rust</li>
              <li>Go</li>
            </ul>
          </div>
          <div className="shrink-0">
            <span className="font-semibold underline">Data Store</span>
            <ul>
              <li>PostgreSQL</li>
              <li>Elasticsearch</li>
              <li>Redis</li>
            </ul>
          </div>
          <div className="shrink-0">
            <span className="font-semibold underline">Cloud</span>
            <ul>
              <li>AWS (Fargate, Lambda, S3, SQS, & more)</li>
              <li>GCP (Cloud Run, Tasks, & more)</li>
              <li>GitHub Actions</li>
            </ul>
          </div>
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
