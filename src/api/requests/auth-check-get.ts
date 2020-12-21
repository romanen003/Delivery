import { request } from '../utils/request';

export type AuthCheckGetRequestType = {
  login: string,
  password: string
}

export const authCheckGetRequest = ({ login, password }:AuthCheckGetRequestType) => request.request({
    url: '/api/auth/check-auth',
    method: request.method.POST,
    useFormData: true,
    body: { login, password }
});