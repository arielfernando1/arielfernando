import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import { AnimatePresence } from 'framer-motion'
import Chakra from '../components/chakra'
import { Analytics } from '@vercel/analytics/react'
import { NextIntlClientProvider } from 'next-intl'

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

function Website({ Component, pageProps, router }) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence
          initial={true}
          onExitComplete={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0 })
            }
          }}
        >
          <NextIntlClientProvider
            locale="en"
            timeZone="America/New_York"
            messages={pageProps.messages}
          >
            <Component {...pageProps} key={router.route} />
          </NextIntlClientProvider>
          <Analytics />
        </AnimatePresence>
      </Layout>
    </Chakra>
  )
}




export default Website
