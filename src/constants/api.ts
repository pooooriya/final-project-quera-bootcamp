type apiUrlType = {
  [t in string]: string;
};

export const APIURL: apiUrlType = {
  Login: '/accounts/login/',
  Register: '/accounts'
};
