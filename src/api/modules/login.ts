import http from '@/api'
import { Login } from '@/api/interface'
import { Menu } from '@/api/interface/system'

// 用户登录
export const loginApi = (params: Login.ReqLoginForm) => {
  return http.post<Login.ResLogin>('/mock/login', params)
}

// 获取用户信息
export const getUserInfoApi = (userId: number) => {
  return http.get<Login.Userinfo>(`/mock/user/${userId}`)
}

// 获取菜单列表
export const getAuthMenuListApi = () => {
  return http.get<Menu[]>(`/mock/menu/list`)
}
