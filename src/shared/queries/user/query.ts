import ApiService from '../../utils/api/api-service'
import { GET_USERS } from '../../utils/api/constants'
import User from '../../types/user/user.interface'
import { PaginatedRequest } from '../../types/pagination/paginated-request.interface'
import { onUsersSort } from '../../../modules/home/utils/helper'

export const queryGetUsers = async (params: any) => {
  const response = await ApiService<PaginatedRequest<User>>({
    method: 'GET',
    url: GET_USERS,
    params,
  })

  return onUsersSort(response.data)
}
