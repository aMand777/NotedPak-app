import jwt from 'jsonwebtoken';

export const validateTokenExp = (token) => {
  try {
    const { exp } = jwt.decode(token);
    if (Date.now() >= exp * 1000) {
      return false;
    }
  } catch (err) {
    return false;
  }
  return true;
}

export const isUserLogin = (token) => {
  const {_id} = jwt.decode(token)
  if (_id.length === 24) {
    return true
  }
  return false
}