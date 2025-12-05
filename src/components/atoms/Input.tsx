import React from 'react'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: string | null
}

const Input: React.FC<InputProps> = ({ error=null, ...rest }) => {
  return (
    <div>
      <input
        className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-offset-1"
        {...rest}
      />
      {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
    </div>
  )
}

export default Input
