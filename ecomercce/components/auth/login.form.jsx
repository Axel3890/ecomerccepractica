import React from 'react'
import { CardWrapper } from './card-wrapper'

export const LoginForm = () => {
  return (
    <CardWrapper
    headerLabel="Welcome back"
    backButtonLabel="No tienes una cuenta?"
    backButtonHref="/auth/register"
    showSocial>
        Hola
    </CardWrapper>
  )
}
