// eslint-disable-next-line @next/next/no-document-import-in-page
import NextDocument, {Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'
import theme from '../lib/theme'


export default class Document extends NextDocument {
    render (){

        return (
            <Html lang="pt-BR">
                <Head />
            <body>
                <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                <Main />
                <NextScript />
            </body>

            </Html>


        )
    }



}
