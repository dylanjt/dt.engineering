import Head from 'next/head'

const Index = () => {
  return (
    <>
      <Head>
        <title>DT</title>
      </Head>
      <div className="space-y-4">
        <div className="font-semibold text-base">Hi there, my name is Dylan Taylor.</div>
        <div>I'm a software engineer in Washington, DC.</div>
        <div>
          I help teams build performant systems that are approachable to fresh eyes, maintainable
          down the road, and flexible to evolving needs. Feel free to connect with me on
          <a className="pl-1 underline" href="https://www.linkedin.com/in/dylan-taylor-7b163884/">
            LinkedIn
          </a>
          .
        </div>
      </div>
    </>
  )
}

export default Index
