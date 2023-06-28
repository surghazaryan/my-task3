import React, { useContext } from 'react'
import LanguageContext from '../../context/LanguageContext'

export default function Header() {
    const str = useContext(LanguageContext)
  return (
    <div>
      head
      {str}
    </div>
  )
}
