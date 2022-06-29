import type { AppProps } from 'next/app'
import {ChakraProvider} from "@chakra-ui/provider";
import {themes} from "../themes";


function MyApp({ Component, pageProps }: AppProps) {
  return(
      <ChakraProvider resetCSS theme={themes}>
        <Component {...pageProps} />
      </ChakraProvider>
  )
}

export default MyApp
