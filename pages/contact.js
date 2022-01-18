import Head from 'next/head'

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact - DT</title>
      </Head>
      <div className="space-y-4">
        <div className="font-semibold text-base">Contact</div>
        <div>
          I am generally open to new opportunities, projects, and other inquiries. To limit spam, my
          email is encoded in the base64 string below.
        </div>
        <div>
          <code className="bg-gray-800 p-2 text-xs shadow">ZHlsYW5AZHQuZW5naW5lZXJpbmc=</code>
        </div>
      </div>
    </>
  )
}

export default Contact
