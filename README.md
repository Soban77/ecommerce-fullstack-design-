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
- **Security**: Helmet, Rate limiting, CORS
- **Performance**: Compression, Static file serving

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
├── Dockerfile
├── docker-compose.yml
├── Procfile
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
   # Install all dependencies (backend + frontend)
   npm run install-all

   # Or install separately:
   npm install                    # Backend dependencies
   npm run install-frontend       # Frontend dependencies
   ```

3. **Environment Setup**
   - Copy `.env.example` to `.env`
   - Update environment variables:
     ```bash
     MONGODB_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret_key
     FRONTEND_URL=https://your-frontend-domain.com  # For production
     ```

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
# Build and start production server
npm run production
```

The application will be available at:
- Frontend: http://localhost:5173 (development) / your-domain (production)
- Backend API: http://localhost:5000 (development) / your-domain/api (production)

## Deployment

### Option 1: Heroku Deployment

1. **Install Heroku CLI**
   ```bash
   npm install -g heroku
   ```

2. **Login to Heroku**
   ```bash
   heroku login
   ```

3. **Create Heroku app**
   ```bash
   heroku create your-app-name
   ```

4. **Set environment variables**
   ```bash
   heroku config:set NODE_ENV=production
   heroku config:set MONGODB_URI=your_mongodb_uri
   heroku config:set JWT_SECRET=your_jwt_secret
   heroku config:set FRONTEND_URL=https://your-app-name.herokuapp.com
   ```

5. **Deploy**
   ```bash
   git push heroku main
   ```

### Option 2: Docker Deployment

1. **Build and run with Docker Compose**
   ```bash
   docker-compose up --build
   ```

2. **Or build and run manually**
   ```bash
   docker build -t ecommerce-app .
   docker run -p 5000:5000 --env-file .env ecommerce-app
   ```

### Option 3: VPS/Cloud Server

1. **Install Node.js and MongoDB**
2. **Clone repository**
3. **Install dependencies**: `npm run install-all`
4. **Build frontend**: `npm run build-frontend`
5. **Set environment variables**
6. **Start application**: `npm start`
7. **Use PM2 for process management**:
   ```bash
   npm install -g pm2
   pm2 start Backend/server.js --name "ecommerce-app"
   pm2 startup
   pm2 save
   ```

### Option 4: Vercel + Railway

1. **Deploy backend to Railway**
   - Connect GitHub repository
   - Set environment variables
   - Deploy

2. **Deploy frontend to Vercel**
   - Connect GitHub repository
   - Set `REACT_APP_API_URL` to Railway backend URL
   - Deploy

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | 5000 |
| `NODE_ENV` | Environment mode | development |
| `MONGODB_URI` | MongoDB connection string | - |
| `JWT_SECRET` | JWT signing secret | - |
| `FRONTEND_URL` | Frontend URL for CORS | - |
| `REACT_APP_API_URL` | API URL for frontend | http://localhost:5000 |

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/verify` - Verify token

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create product (Admin)
- `PUT /api/products/:id` - Update product (Admin)
- `DELETE /api/products/:id` - Delete product (Admin)

### Users
- `GET /api/users` - Get all users (Admin)

## Usage

1. Register a new account or login with existing credentials
2. Browse products on the home page
3. Use search functionality to find specific products
4. Add products to cart
5. View cart and proceed to checkout
6. Admin users can manage products through the admin panel

## Security Features

- **Helmet**: Security headers
- **Rate Limiting**: API rate limiting (100 requests/15min)
- **CORS**: Cross-origin resource sharing configuration
- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcryptjs for password security
- **Input Validation**: Request size limits

## Performance Optimizations

- **Compression**: Gzip compression for responses
- **Static File Serving**: Efficient static file delivery
- **Database Indexing**: Optimized MongoDB queries
- **Caching**: Browser caching for static assets

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the ISC License.
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