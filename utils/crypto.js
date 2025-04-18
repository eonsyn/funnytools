const secret = 'lucknow-secret-key';

export const encrypt = (obj) => {
  const str = JSON.stringify(obj);
  return btoa(unescape(encodeURIComponent(str + secret)));
};

export const decrypt = (str) => {
  try {
    const decoded = decodeURIComponent(escape(atob(str)));
    const clean = decoded.replace(secret, '');
    return JSON.parse(clean);
  } catch (e) {
    return null;
  }
};
