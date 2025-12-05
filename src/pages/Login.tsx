import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../components/atoms/Button'
import Input from '../components/atoms/Input'
import Text from '../components/atoms/Text'

const Login: React.FC = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState({
    email: null as string | null,
    password: null as string | null
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setErrors(prev => ({ ...prev, [name]: null }))
  }

  const validateForm = () => {
    const newErrors = {
      email: null as string | null,
      password: null as string | null
    }

    if (!formData.email) {
      newErrors.email = 'E-mail é obrigatório'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'E-mail inválido'
    }

    if (!formData.password) {
      newErrors.password = 'Senha é obrigatória'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Senha deve ter no mínimo 6 caracteres'
    }

    setErrors(newErrors)
    return !newErrors.email && !newErrors.password
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setLoading(true)
    
    // Simulação de login
    setTimeout(() => {
      localStorage.setItem('user', JSON.stringify({
        email: formData.email,
        name: formData.email.split('@')[0]
      }))
      setLoading(false)
      navigate('/checkout')
    }, 1500)
  }

  const handleGoogleLogin = () => {
    setLoading(true)
    
    // Simulação de login com Google
    setTimeout(() => {
      localStorage.setItem('user', JSON.stringify({
        email: 'usuario@gmail.com',
        name: 'Usuário Google',
        provider: 'google'
      }))
      setLoading(false)
      navigate('/checkout')
    }, 1500)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-md w-full">
        
        {/* Card principal */}
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
          
          {/* Header */}
          <div className="text-center space-y-2">
            <Text as="h1" className="text-3xl font-bold text-gray-900">
              Bem-vindo de volta
            </Text>
            <Text as="p" className="text-gray-600">
              Entre na sua conta para continuar
            </Text>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-5">
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                E-mail
              </label>
              <Input
                type="email"
                name="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Senha
              </label>
              <Input
                type="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                error={errors.password}
              />
            </div>

            {/* Link esqueci senha */}
            <div className="flex justify-end">
              <button
                type="button"
                className="text-sm text-gray-600 hover:text-black transition"
              >
                Esqueceu a senha?
              </button>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              loading={loading}
            >
              Entrar
            </Button>
          </form>

          {/* Divisor */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">ou</span>
            </div>
          </div>

          {/* Botão Google */}
          <Button
            type="button"
            variant="outline"
            size="lg"
            fullWidth
            onClick={handleGoogleLogin}
            disabled={loading}
            leftIcon={
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
            }
          >
            Continuar com Google
          </Button>

          {/* Link para cadastro */}
          <div className="text-center pt-4">
            <Text as="p" className="text-sm text-gray-600">
              Não tem uma conta?{' '}
              <Link
                to="/register"
                className="font-semibold text-black hover:underline"
              >
                Cadastre-se
              </Link>
            </Text>
          </div>
        </div>

        {/* Nota de homologação */}
        <div className="mt-6 text-center">
          <Text as="p" className="text-xs text-gray-500">
            🔒 Ambiente de homologação • Dados não são processados
          </Text>
        </div>
      </div>
    </div>
  )
}

export default Login