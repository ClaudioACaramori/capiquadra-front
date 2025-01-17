import ApiService from '../api.service';

// const UsersResource = {
//   login: (params) => ApiService.post('v1/users/sign_in', params),
//   fbLogin: (params) => ApiService.post('v1/users/facebook_auth', params),
//   googleLogin: (params) => ApiService.post('v1/users/google_auth', params),
//   appleLogin: (params) => ApiService.post('v1/users/apple_auth', params),
//   show: () => ApiService.get('v1/users/me'),
//   register: (params) => ApiService.post('v1/users', params),
// };

// export default UsersResource;

const ReservationsResource = {
  index: (params) => ApiService.get('v1/reservations', params),
  create: (params) => ApiService.post('v1/reservations', params),
  destroy: (id) => ApiService.delete(`v1/reservations/${id}`),
};

export default ReservationsResource;