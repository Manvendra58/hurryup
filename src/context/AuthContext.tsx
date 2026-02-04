import { createContext, useContext, useState, ReactNode } from 'react'

export type UserRole = 'customer' | 'farmer' | 'admin'

export interface User {
  id: string
  name: string
  email: string
  role: UserRole
  verified?: boolean // For farmers
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string, role: UserRole) => boolean
  register: (name: string, email: string, password: string, role: UserRole) => boolean
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('user')
    return savedUser ? JSON.parse(savedUser) : null
  })

  const login = (email: string, password: string, role: UserRole): boolean => {
    // Mock authentication - in production, this would call an API
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    const foundUser = users.find(
      (u: User & { password: string }) =>
        u.email === email && u.password === password && u.role === role
    )

    if (foundUser) {
      const { password, ...userWithoutPassword } = foundUser
      setUser(userWithoutPassword)
      localStorage.setItem('user', JSON.stringify(userWithoutPassword))
      return true
    }
    return false
  }

  const register = (name: string, email: string, password: string, role: UserRole): boolean => {
    // Mock registration - in production, this would call an API
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    
    if (users.some((u: User & { password: string }) => u.email === email)) {
      return false // Email already exists
    }

    const newUser: User & { password: string } = {
      id: Date.now().toString(),
      name,
      email,
      password,
      role,
      verified: role === 'farmer' ? false : undefined, // Farmers need verification
    }

    users.push(newUser)
    localStorage.setItem('users', JSON.stringify(users))

    const { password: _, ...userWithoutPassword } = newUser
    setUser(userWithoutPassword)
    localStorage.setItem('user', JSON.stringify(userWithoutPassword))
    return true
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
