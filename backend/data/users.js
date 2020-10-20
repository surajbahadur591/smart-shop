import bcrypt from 'bcryptjs'



const users = [
    {
        name: 'Admin user',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'John',
        email: 'john@example.com',
        password: bcrypt.hashSync('123456', 10),
        
    },
    {
        name: 'Wick',
        email: 'wick@example.com',
        password: bcrypt.hashSync('123456', 10),
        
    }
]

export default users