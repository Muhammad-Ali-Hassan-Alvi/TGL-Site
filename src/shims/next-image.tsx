import type { CSSProperties, ImgHTMLAttributes } from 'react'

type NextImageLikeProps = ImgHTMLAttributes<HTMLImageElement> & {
  fill?: boolean
  priority?: boolean
  unoptimized?: boolean
  sizes?: string
}

export default function Image({
  src,
  alt = '',
  width,
  height,
  className,
  style,
  fill,
  sizes,
  priority,
  unoptimized,
  ...rest
}: NextImageLikeProps) {
  const mergedStyle: CSSProperties = fill
    ? { position: 'absolute', inset: 0, width: '100%', height: '100%', ...style }
    : style ?? {}

  return (
    <img
      src={typeof src === 'string' ? src : ''}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      className={className}
      style={mergedStyle}
      sizes={sizes}
      {...rest}
    />
  )
}
