import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

function LoginForm () {
  const initialValues = {
    email: '',
    password: ''
  }

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('Required'),
    password: Yup.string().required('Required').min(8)
  })

  const onSubmit = (values, {resetForm}) => {
    console.log('Form data', values)
    resetForm()
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {formik => {
        console.log(formik)
        return (
          <Form>
            <FormikControl
              control='input'
              // control='chakraInput'
              type='email'
              label='Email'
              name='email'
            />
            <FormikControl
              control='input'
              type='password'
              label='Password'
              name='password'
            />
            <button type='submit' disabled={!formik.isValid}>Submit</button>
            <button type='reset'>Reset</button>
          </Form>
        )
      }}
    </Formik>
  )
}

export default LoginForm
