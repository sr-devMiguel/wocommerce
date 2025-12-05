import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../components/atoms/Button'
import Input from '../components/atoms/Input'
import Text from '../components/atoms/Text'

const Register: React.FC = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [errors, setErrors] = useState({
    name: null as string | null,
    email: null as string | null,
    password: null as string | null,
    confirmPassword: null as string | null
  })
  const [loading, setLoading] = useState(false)
  const [acceptTerms, setAcceptTerms] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setErrors(prev => ({ ...prev, [name]: null }))
  }

  const validateForm = () => {
    const newErrors = {
      name: null as string | null,
      email: null as string | null,
      password: null as string | null,
      confirmPassword: null as string | null
    }

    if (!formData.name) {
      newErrors.name = 'Nome é obrigatório'
    } else if (formData.name.length < 3) {
      newErrors.name = 'Nome deve ter no mínimo 3 caracteres'
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

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirme sua senha'
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'As senhas não coincidem'
    }

    setErrors(newErrors)
    return !newErrors.name && !newErrors.email && !newErrors.password && !newErrors.confirmPassword
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm() || !acceptTerms) {
      if (!acceptTerms) {
        alert('Você precisa aceitar os termos de uso')
      }
      return
    }

    setLoading(true)
    
    // Simulação de cadastro
    setTimeout(() => {
      localStorage.setItem('user', JSON.stringify({
        email: formData.email,
        name: formData.name
      }))
      setLoading(false)
      navigate('/checkout')
    }, 1500)
  }

  const handleGoogleRegister = () => {
    setLoading(true)
    
    // Simulação de cadastro com Google
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
              Criar conta
            </Text>
            <Text as="p" className="text-gray-600">
              Cadastre-se para continuar sua compra
            </Text>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-5">
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nome completo
              </label>
              <Input
                type="text"
                name="name"
                placeholder="Seu nome"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
              />
            </div>

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

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirmar senha
              </label>
              <Input
                type="password"
                name="confirmPassword"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
                error={errors.confirmPassword}
              />
            </div>

            {/* Checkbox de termos */}
            <div className="flex items-start">
              <input
                type="checkbox"
                id="terms"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                Eu aceito os{' '}
                <button type="button" className="text-black font-medium hover:underline">
                  termos de uso
                </button>
                {' '}e a{' '}
                <button type="button" className="text-black font-medium hover:underline">
                  política de privacidade
                </button>
              </label>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              loading={loading}
              disabled={!acceptTerms}
            >
              Criar conta
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
            onClick={handleGoogleRegister}
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

          {/* Link para login */}
          <div className="text-center pt-4">
            <Text as="p" className="text-sm text-gray-600">
              Já tem uma conta?{' '}
              <Link
                to="/login"
                className="font-semibold text-black hover:underline"
              >
                Faça login
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

export default Register