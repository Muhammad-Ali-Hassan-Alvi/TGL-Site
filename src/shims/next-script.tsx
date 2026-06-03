import { useEffect } from 'react'

type ScriptProps = {
  id?: string
  src?: string
  strategy?: 'afterInteractive' | 'lazyOnload' | 'beforeInteractive'
  type?: string
  children?: string
}

export default function Script({ id, src, type, children }: ScriptProps) {
  useEffect(() => {
    if (!src && !children) return
    const script = document.createElement('script')
    if (id) script.id = id
    if (src) script.src = src
    if (type) script.type = type
    if (children) script.text = children
    document.body.appendChild(script)
    return () => {
      script.remove()
    }
  }, [id, src, type, children])

  return null
}
