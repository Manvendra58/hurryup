export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  farmerId: string
  farmerName: string
  stock: number
  organic: boolean
  approved?: boolean // For admin approval
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface Order {
  id: string
  customerId: string
  customerName: string
  farmerId: string
  farmerName: string
  items: CartItem[]
  total: number
  status: 'pending' | 'confirmed' | 'delivered' | 'cancelled'
  date: string
}
