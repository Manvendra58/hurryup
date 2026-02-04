# HurryUp - Organic Vegetable Selling Platform

A modern, user-friendly platform connecting customers with farmers for direct organic vegetable sales. Built with React, TypeScript, Vite, and Tailwind CSS.

## 🌱 Features

### Three User Portals:

1. **Customer Portal** 🛒
   - Browse organic vegetables from verified farmers
   - Add products to cart
   - Category filtering
   - Direct farmer connection
   - Easy checkout process

2. **Farmer Portal** 👨‍🌾
   - Add and manage products
   - View and manage orders
   - Track revenue and statistics
   - Verification status display
   - Product inventory management

3. **Admin Portal** 👨‍💼
   - Verify farmer accounts
   - Manage all farmers
   - Approve/reject products
   - Monitor platform activities
   - View platform statistics

## 🚀 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Context API** - State management

## 📦 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
hurryup/
├── src/
│   ├── components/          # Reusable components
│   │   └── ProductCard.tsx
│   ├── context/             # Auth context for state management
│   │   └── AuthContext.tsx
│   ├── pages/               # Page components
│   │   ├── LandingPage.tsx  # Home page with role selection
│   │   ├── Login.tsx        # Login page
│   │   ├── Register.tsx     # Registration page
│   │   ├── customer/        # Customer portal
│   │   │   └── CustomerDashboard.tsx
│   │   ├── farmer/          # Farmer portal
│   │   │   └── FarmerDashboard.tsx
│   │   └── admin/           # Admin portal
│   │       └── AdminDashboard.tsx
│   ├── types/               # TypeScript type definitions
│   │   └── index.ts
│   ├── App.tsx              # Main app with routing
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── index.html               # HTML template
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript config
├── vite.config.ts           # Vite config
└── tailwind.config.js       # Tailwind config
```

## 🎨 Features Overview

### Landing Page
- Beautiful hero section
- Role selection cards (Customer, Farmer, Admin)
- Feature highlights
- Easy navigation to login/register

### Authentication
- Role-based login and registration
- Separate portals for each user type
- Protected routes
- Session management

### Customer Features
- Product browsing with categories
- Shopping cart functionality
- Product filtering
- Organic product badges
- Direct farmer information

### Farmer Features
- Product management (add/delete)
- Order management
- Revenue tracking
- Verification status
- Inventory management

### Admin Features
- Farmer verification system
- Product approval/rejection
- Platform statistics
- User management
- Activity monitoring

## 🔐 User Roles

### Customer
- Browse and purchase organic vegetables
- View farmer information
- Manage shopping cart
- Checkout orders

### Farmer
- List products for sale
- Manage inventory
- View customer orders
- Track sales and revenue
- Wait for admin verification

### Admin
- Verify farmer accounts
- Approve/reject products
- Monitor platform activities
- Manage all users
- View platform analytics

## 🎯 Usage

1. **As a Customer:**
   - Visit the landing page
   - Click "Login as Customer" or register
   - Browse products by category
   - Add items to cart
   - Proceed to checkout

2. **As a Farmer:**
   - Register or login as a farmer
   - Add your products
   - Wait for admin verification
   - Manage orders and inventory

3. **As an Admin:**
   - Login to admin portal
   - Review pending farmer verifications
   - Approve/reject products
   - Monitor platform activities

## 🛠️ Customization

### Colors
The platform uses green as the primary color scheme. You can customize colors in `tailwind.config.js`.

### Components
All components are modular and can be easily customized in their respective files.

### Styling
- Global styles: `src/index.css`
- Component styles: Tailwind classes in components
- Custom utilities: Add to `@layer components` in `index.css`

## 📝 Notes

- This is a frontend-only implementation
- Authentication is mocked (no backend)
- Data is stored in component state (not persistent)
- For production, connect to a backend API

## 📄 License

MIT

## 🙏 Contributing

Feel free to submit issues and enhancement requests!
