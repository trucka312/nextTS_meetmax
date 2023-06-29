import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../redux/reducer';
import rootSaga from '../redux/saga';

interface AppProps {
    Component: React.ComponentType<any>;
    pageProps: any;
}

const sagaMiddleware = createSagaMiddleware();

// create store here
const makeStore = () => {
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  return store;
};

const App = ({ Component, pageProps }: AppProps) => (
  <Provider store={makeStore()}>
    <Component {...pageProps} />
  </Provider>
);

export default createWrapper(makeStore).withRedux(App);