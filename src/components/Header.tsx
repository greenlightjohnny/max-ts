import React, { useEffect } from "react"
type HeaderProps = {
  text?: string
}

const Header = (props: HeaderProps) => {
  return (
    <div>
      <p>{props.text}</p>
    </div>
  )
}

export default Header
