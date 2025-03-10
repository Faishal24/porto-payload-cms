// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Posts } from './collections/Posts'
import { uploadthingStorage } from '@payloadcms/storage-uploadthing'
import { Projects } from './collections/Projects'
import { Certificates } from './collections/Certificates'
import { Education } from './collections/Education'
import { Work } from './collections/Work'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users, Media, Posts, Projects, Certificates, Education, Work
  ],
  cors: '*',
  editor: lexicalEditor(),
  globals: [
    {
      slug: 'about',
      access: {
          read: () => true,
      },
      fields: [
          {
              name: 'name',
              type: 'text',
          },
          {
              name: 'bio',
              type: 'text',
          },
          {
            name: 'birthday',
            type: 'text',
          },
          {
            name: 'location',
            type: 'text',
          },
          {
            name: 'about me',
            type: 'textarea',
          },
          {
            name: 'web development',
            type: 'text',
          },
          {
            name: 'mobile development',
            type: 'text',
          },
          {
            name: 'other',
            type: 'textarea',
          }
      ]
    }
  ],
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    uploadthingStorage({
      collections: {
        media: true,
      },
      options: {
        token: process.env.UPLOADTHING_TOKEN,
        acl: 'public-read',
      }
    })
  ],
})
