export const development: boolean =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

export const APIHost = development ? '/api' : 'https://google.com';
export const APIUrl = development
  ? process.env.REACT_APP_API_URL
  : 'https://google.com';

export const ACCESS_TOKEN_KEY = 'token';
export const theme = {
  bluePrimary: '#377dff',
  greenPrimary: '#38CB89',
  redPrimary: '#FF5630',
  yellowPrimary: '#FFAB00',
  'bluePrimary-80': '#d7e5ff',
  'greenPrimary-80': '#d7f5e7',
  'redPrimary-80': '#ffddd6',
  'yellowPrimary-80': '#ffeecc',
  dark1: '#191C21',
  dark2: '#212833',
  white: '#fff',
  grayscale: '#4E5D78',
  'grayscale-80': '#717d93',
  'grayscale-60': '#959eae',
  'grayscale-40': '#b8bec9',
  'grayscale-20': '#dcdfe4',
  'grayscale-5': '#f6f7f8',
  'grayscale-3': '#fafafb',
};
