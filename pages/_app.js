import { DefaultSeo } from 'next-seo';
// import { persistor, store } from '../store';
// import { Provider, useSelector } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import SEO from '../next-seo.config';
import '../styles/bootstrap.min.css';
import '../styles/style.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import { ConfigProvider } from 'antd';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import theme from '../utils/themeConfig';
import DefaultLayout from '../components/layouts/DefaultLayout';


const LoadApp = ({ Component, pageProps }) => {
  // const { theme } = useSelector((state) => state.app);
  // useEffect(() => {
  //   AOS.init(); // Initialize AOS globally
  // }, []);

  return (
    <>
      <DefaultSeo {...SEO} />
      {/* <ConfigProvider
        theme={{
          token: theme,
        }}
      >
      </ConfigProvider> */}
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
      {/* <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      /> */}
    </>
  );
};

const MyApp = ({ Component, pageProps }) => {
  return (
    // <Provider store={store}>
    //   <PersistGate loading={null} persistor={persistor}>
    //   </PersistGate>
    // </Provider>
    <LoadApp Component={Component} pageProps={pageProps} />
  );
};

export default MyApp;
