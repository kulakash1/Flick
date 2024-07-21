const bcrypt = require('bcrypt');
const userSchema = require('../Models/user/user');  // Adjust the path as needed
const { v4: uuidv4 } = require('uuid');

async function createTestUser() {
    const password = 'password123';
    const hashedPassword = await bcrypt.hash(password, 8);

    await userSchema.create({
        id: uuidv4(),
        name: 'Test User',
        username: 'testuser',
        email: 'test@example.com',
        mobileNumber: 1234567890,
        password: hashedPassword,
        verified: true
    });

    console.log('Test user created with password:', password);
}

createTestUser();
