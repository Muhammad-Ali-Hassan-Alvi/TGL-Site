import { useLocation, useNavigate, useParams } from 'react-router-dom'

export function usePathname() {
  return useLocation().pathname
}

export function useRouter() {
  const navigate = useNavigate()
  return {
    push: (to: string) => navigate(to),
    replace: (to: string) => navigate(to, { replace: true }),
    back: () => navigate(-1),
  }
}

export function useSearchParams() {
  const location = useLocation()
  return new URLSearchParams(location.search)
}

export function useParamsCompat() {
  return useParams()
}

export function notFound() {
  // In a Vite/React Router app, redirect to 404 page
  if (typeof window !== 'undefined') {
    window.location.href = '/404';
  }
  throw new Error('NEXT_NOT_FOUND');
}
