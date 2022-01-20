import Head from 'next/head'

import { formium } from '../lib/formium'
import GetInTouchForm from '../components/get-in-touch-form'

const Contact = ({ form }) => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <div className="space-y-4">
        <div className="font-semibold text-base">Contact</div>
        <GetInTouchForm form={form} />
        <div>
          You can also
          <a className="ml-1 underline" href="https://www.linkedin.com/in/dylan-taylor-7b163884/">
            connect with me on LinkedIn
          </a>
          .
        </div>
      </div>
    </>
  )
}

export default Contact

export const getStaticProps = async (context) => {
  const form = await formium.getFormBySlug('get-in-touch')
  return { props: { form } }
}
