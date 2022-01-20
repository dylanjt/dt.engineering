import { useState } from 'react'
import { FormiumForm, defaultComponents } from '@formium/react'

import { formium } from '../lib/formium'

const components = {
  ...defaultComponents,
  TextInput: (props) => (
    <input
      {...props}
      className="border border-purple-300 bg-gray-900 p-1 rounded-sm outline-none caret-purple-300 w-full text-sm placeholder:text-gray-500"
    />
  ),
  Textarea: (props) => (
    <textarea
      {...props}
      className="border border-purple-300 bg-gray-900 p-1 rounded-sm outline-none w-full h-32 text-sm"
    />
  ),
  SubmitButton: (props) => (
    <button
      {...props}
      className="bg-purple-600 hover:bg-purple-700 disabled:bg-purple-300 p-1 rounded-md text-white"
    >
      Submit
    </button>
  ),
  FormControl: ({ children, description, error, label, labelFor }) => (
    <div className="mb-2 w-full sm:w-80">
      <div className="flex flex-row items-center justify-between gap-1">
        {label && <label htmlFor={labelFor}>{label}</label>}
        {error && <div className="text-sm text-red-400">{error}</div>}
      </div>
      <div>{children}</div>
    </div>
  ),
}

const GetInTouch = ({ form }) => {
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      {!submitted && (
        <FormiumForm
          data={form}
          components={components}
          onSubmit={async (values) => {
            await formium.submitForm('get-in-touch', values)
            setSubmitted(true)
          }}
        />
      )}
      {submitted && <div>Thank you. I will review your message and get back to you shortly.</div>}
    </>
  )
}

export default GetInTouch
