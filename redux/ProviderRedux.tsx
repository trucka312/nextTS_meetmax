'use client';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/utils/constants';
import store from '@/redux/store';
interface AppProps {
  children: React.ReactNode;
}
// create store here
const ProviderRedux = ({ children }: AppProps) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </Provider>
);

export default ProviderRedux;
