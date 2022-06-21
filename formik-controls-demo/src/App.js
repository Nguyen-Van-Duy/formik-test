import React from 'react'
import './App.css'
import FormikContainer from './components/FormikContainer'
import LoginForm from './components/LoginForm'
import RegistrationForm from './components/RegistrationForm'
import EnrollmentForm from './components/EnrollmentForm'
import { theme, ThemeProvider } from '@chakra-ui/core'
import Bootstrap from './bootstrap'

function App () {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        {/* <Bootstrap /> */}
        {/* <FormikContainer /> */}
        <LoginForm />
        {/* <RegistrationForm /> */}
        {/* <EnrollmentForm /> */}

      </div>
    </ThemeProvider>
  )
}

export default App
