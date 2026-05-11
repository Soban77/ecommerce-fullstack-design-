# E-Commerce Website

A full-stack MERN (MongoDB, Express.js, React, Node.js) e-commerce application with authentication, product management, and shopping cart functionality.

## Features

- User authentication (register/login)
- Product browsing and search
- Shopping cart functionality
- Admin panel for product management
- Responsive design
- JWT authentication
- MongoDB database integration

## Tech Stack

- **Frontend**: React with Vite, React Router, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Authentication**: JWT tokens with bcryptjs
- **Styling**: CSS with responsive design

## Project Structure

```
E_Commerce_Website/
├── Backend/
│   ├── server.js
│   ├── models/
│   ├── routes/
│   └── seed.js
├── Frontend/
│   ├── src/
│   ├── public/
│   └── package.json
├── package.json
└── .env
```

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd E_Commerce_Website
   ```

2. **Install dependencies**
   ```bash
   # Install backend dependencies
   npm install

   # Install frontend dependencies
   npm run install-frontend
   ```

3. **Environment Setup**
   - Copy `.env` file and update with your MongoDB Atlas connection string
   - Update JWT secret and other environment variables

4. **Seed the database**
   ```bash
   npm run seed
   ```

## Running the Application

### Development Mode
```bash
# Terminal 1: Start backend server
npm run backend

# Terminal 2: Start frontend development server
npm run frontend
```

### Production Mode
```bash
# Build frontend
npm run build-frontend

# Start production server
npm start
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create product (Admin)
- `PUT /api/products/:id` - Update product (Admin)
- `DELETE /api/products/:id` - Delete product (Admin)

### Users
- `GET /api/users` - Get all users (Admin)
- `GET /api/users/:id` - Get user by ID

## Usage

1. Register a new account or login with existing credentials
2. Browse products on the home page
3. Use search functionality to find specific products
4. Add products to cart
5. View cart and proceed to checkout
6. Admin users can manage products through the admin panel

## Deployment

The application is ready for deployment on platforms like:
- Frontend: Vercel, Netlify
- Backend: Render, Heroku
- Database: MongoDB Atlas

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the ISC License.