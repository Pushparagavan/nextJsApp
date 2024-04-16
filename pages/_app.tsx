import { AppProps } from "next/app";
import ReduxWrapper from "./reduxWrapper";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReduxWrapper>
      <Component {...pageProps} />
    </ReduxWrapper>
  );
}

export default MyApp;
