import { useLocation, Navigate, Outlet } from 'react-router-dom'
import { useQueryClient } from 'react-query'
import { useR } from '../hooks/users'
import useAuth from '../hooks/useAuth'

const RequireAuth = ({ allowedRoles }) => {
  const qC = useQueryClient()
  const {
    data: user,
    error,
    isLoading,
    isFetching
  } = useR()
  const location = useLocation()

  return (
    user?.roles?.find(role => allowedRoles?.includes(role))
      ? <Outlet />
      : auth?.user
        ? <Navigate to="/unauthorized" state={{ from: location }} replace />
        :<Navigate to='/login' state={{ from: location }} replace />
        )
}

export default RequireAuth