import '@/styles/globals.css'
import { ClerkProvider } from '@clerk/nextjs';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  return (
    <>
     <ClerkProvider {...pageProps}>
      <ToastContainer  className="absolute top-0 right-0 mt-8 mr-8 z-50"
        toastClassName="rounded-md shadow-md"
        bodyClassName="p-5 text-black"
        autoClose={2000}/>
      <Component {...pageProps} />
      </ClerkProvider>
    </>
  ); 
}
