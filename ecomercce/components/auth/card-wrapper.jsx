import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card'
import { Header } from './header'
import { Social } from './social'
import { BackButton } from './back-button'

export const CardWrapper = ({children, headerLabel, backButtonLabel, backButtonHref, showSocial}) => {
  return (
    <Card className="w-[400px] shadow-md">
        <CardHeader>
            <Header label={headerLabel}></Header>
        </CardHeader>
        <CardContent>
        {children}
        </CardContent>
        {showSocial && ( 
          <CardFooter>
            <Social></Social>
          </CardFooter>
        )}
        <CardFooter>
          <BackButton label={backButtonLabel}
            href={backButtonHref}
          >

          </BackButton>
        </CardFooter>
    </Card>
  )
}
