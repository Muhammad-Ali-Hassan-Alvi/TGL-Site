import { Link as RouterLink } from 'react-router-dom'
import type { AnchorHTMLAttributes, ReactNode } from 'react'

type LinkProps = {
  href: string
  children: ReactNode
  className?: string
  style?: React.CSSProperties
  target?: string
  rel?: string
  onClick?: AnchorHTMLAttributes<HTMLAnchorElement>['onClick']
}

export default function Link({
  href,
  children,
  className,
  style,
  target,
  rel,
  onClick,
}: LinkProps) {
  const isExternal = /^https?:\/\//.test(href)
  if (isExternal || target === '_blank') {
    return (
      <a href={href} className={className} style={style} target={target} rel={rel} onClick={onClick}>
        {children}
      </a>
    )
  }
  return (
    <RouterLink to={href} className={className} style={style} onClick={onClick}>
      {children}
    </RouterLink>
  )
}
