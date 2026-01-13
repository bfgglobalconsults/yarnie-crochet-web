import 'dotenv/config'
import { getPayload } from 'payload'
import config from './src/payload.config'

const updateAdmin = async () => {
  const payload = await getPayload({ config: await config })

  try {
    // Find the existing user
    const existingUsers = await payload.find({
      collection: 'users',
      limit: 1,
    })

    if (existingUsers.docs.length === 0) {
      console.log('❌ No users found in the database.')
      process.exit(1)
    }

    const userId = existingUsers.docs[0].id

    // Update the user with new email and password
    await payload.update({
      collection: 'users',
      id: userId,
      data: {
        email: 'yarniecrochet01@gmail.com',
        password: 'admin123',
        roles: ['admin'],
      },
    })

    console.log('✅ Admin user updated successfully!')
    console.log('Email: yarniecrochet01@gmail.com')
    console.log('Password: admin123')
    console.log('\nYou can now log in at http://localhost:3000/admin')

    process.exit(0)
  } catch (error) {
    console.error('Error updating admin:', error)
    process.exit(1)
  }
}

updateAdmin()
