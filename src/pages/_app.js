// pages/_app.js

import '@/styles/globals.css'; // Import global styles
import '@fontsource/montserrat'; // Import Montserrat font

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
