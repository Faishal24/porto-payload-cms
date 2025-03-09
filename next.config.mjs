import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  // hostname res.cloudinary.com
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'res.cloudinary.com', port: '' }],
  },
}

export default withPayload(nextConfig)
