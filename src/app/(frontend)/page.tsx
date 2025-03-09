import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'

import config from '@/payload.config'
import './styles.css'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })
  return (
    <div className="home">
      <div className="content">
        <picture>
          <Image
            alt="Payload Logo"
            height={100}
            width={100}
            src="https://res.cloudinary.com/dpabcvivg/image/upload/v1741476441/ico_transparent_bgzfo0.png"
          />
        </picture>
        {!user && <h1>Who?</h1>}
        {user && <h1>Atmin sudah datang!</h1>}
        <div className="links">
          <a
            className="admin"
            href={payloadConfig.routes.admin}
          >
            {user ? 'Dashboard Atmin' : 'Pintu Atmin'}
          </a>
        </div>
      </div>
    </div>
  )
}
