import { useState, useEffect, useRef } from 'react'

export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const isOpenRef = useRef(false)

  const toggle = (event) => {
    if (event) {
      event.preventDefault()
      event.stopPropagation()
    }
    setIsOpen((prev) => {
      const next = !prev
      isOpenRef.current = next
      document.body.style.overflow = next ? 'hidden' : ''
      return next
    })
  }

  const close = () => {
    setIsOpen(false)
    isOpenRef.current = false
    document.body.style.overflow = ''
  }

  const open = () => {
    setIsOpen(true)
    isOpenRef.current = true
    document.body.style.overflow = 'hidden'
  }

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const navbar = document.querySelector('.navbar')
      if (navbar && !navbar.contains(event.target) && isOpenRef.current) {
        close()
      }
    }

    document.addEventListener('click', handleOutsideClick)
    return () => {
      document.removeEventListener('click', handleOutsideClick)
      document.body.style.overflow = ''
    }
  }, [])

  return { isOpen, toggle, close, open }
}
