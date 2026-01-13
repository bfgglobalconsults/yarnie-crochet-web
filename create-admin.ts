import 'dotenv/config'
import { getPayload } from 'payload'
import config from './src/payload.config'

const createAdmin = async () => {
  const payload = await getPayload({ config: await config })

  try {
    // First, check if any users exist
    const existingUsers = await payload.find({
      collection: 'users',
      limit: 1,
    })

    if (existingUsers.docs.length > 0) {
      console.log('⚠️  Users already exist in the database.')
      console.log('Existing user email:', existingUsers.docs[0].email)
      console.log('\nTry logging in with the credentials from the seed output.')
      process.exit(0)
    }

    await payload.create({
      collection: 'users',
      data: {
        email: 'yarniecrochet01@gmail.com',
        password: 'admin123',
        roles: ['admin'],
      },
    })

    console.log('✅ Admin user created successfully!')
    console.log('Email: yarniecrochet01@gmail.com')
    console.log('Password: admin123')
    console.log('\nYou can now log in at http://localhost:3000/admin')

    process.exit(0)
  } catch (error) {
    console.error('Error creating admin:', error)
    process.exit(1)
  }
}

createAdmin()
