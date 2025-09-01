# STL Telecommunication App

A comprehensive telecommunications application built with React and Node.js, featuring bill management, payment processing, and customer management capabilities.

## 🚀 Features

- **Bill Management**: Complete billing system for telecommunications services
- **Payment Processing**: Integrated payment system using Stripe
- **Customer Dashboard**: User-friendly interface for customers to manage their accounts
- **Multi-tier Architecture**: Separate frontend and backend services for scalability

## 📁 Project Structure

```
stl-telecommunication-app/
├── Bill_Management/
│   ├── Payment/              # Backend payment service
│   └── paymentfront/         # Payment frontend interface
└── front-end/                # Main customer dashboard
```

## 🛠️ Technology Stack

### Frontend
- **React 18.2.0**: Modern React with hooks and functional components
- **React Router DOM**: Client-side routing
- **Chakra UI & Bootstrap**: UI component libraries
- **Stripe React Components**: Payment interface integration
- **Axios**: HTTP client for API communication

### Backend
- **Node.js**: Runtime environment
- **Express.js**: Web application framework
- **PostgreSQL**: Database for data persistence
- **Stripe**: Payment processing
- **CORS**: Cross-origin resource sharing
- **Cookie Parser**: Session management

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- PostgreSQL database
- Stripe account for payment processing

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Iflal/stl-telecommunication-app.git
   cd stl-telecommunication-app
   ```

2. **Setup Payment Backend**
   ```bash
   cd Bill_Management/Payment
   npm install
   npm start
   ```

3. **Setup Payment Frontend**
   ```bash
   cd Bill_Management/paymentfront
   npm install
   npm start
   ```

4. **Setup Main Frontend**
   ```bash
   cd front-end
   npm install
   npm start
   ```

### Environment Variables

Create `.env` files in the respective directories with the following variables:

**Bill_Management/Payment/.env**
```
DATABASE_URL=your_postgresql_connection_string
STRIPE_SECRET_KEY=your_stripe_secret_key
PORT=5252
```

**Bill_Management/paymentfront/.env**
```
REACT_APP_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
REACT_APP_API_URL=http://localhost:5252
```

## 🏗️ Architecture

### Payment Service
- **Backend**: Express.js server handling payment processing
- **Frontend**: React application for payment interface
- **Integration**: Stripe for secure payment processing

### Main Application
- **Frontend**: Customer dashboard and service management
- **Components**: Built with React and modern UI libraries
- **Routing**: Multi-page application with React Router

## 📱 Usage

1. **Start the Backend Services**: Run the payment backend service first
2. **Launch Frontend Applications**: Start both the main frontend and payment frontend
3. **Access the Application**: Navigate to the frontend URLs to interact with the system

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Iflal** - [GitHub Profile](https://github.com/Iflal)

## 🐛 Issues

If you encounter any issues or have suggestions, please [create an issue](https://github.com/Iflal/stl-telecommunication-app/issues) on GitHub.

---

*Last updated: October 2024*
