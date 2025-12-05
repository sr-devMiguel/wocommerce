import React from 'react'

type TextProps = {
  as?: 'h1'|'h2'|'h3'|'p'|'span'
  className?: string
  children?: React.ReactNode
}

const Text: React.FC<TextProps> = ({ as='p', className='', children }) => {
  const Tag = as as React.ElementType
  return <Tag className={className}>{children}</Tag>
}

export default Text
