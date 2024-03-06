import { useRouter } from 'next/router'
import Link from 'next/link'
import { IconButton, useColorModeValue } from '@chakra-ui/react'

export function LocaleSwitcher() {
  const { locale, locales, route } = useRouter()
  const otherLocale = locales?.find(cur => cur !== locale)
  return (
    <IconButton 
    aria-label='Toggle theme'
    colorScheme={useColorModeValue('purple', 'orange')}>
      <Link href={route} locale={otherLocale}>
        {`${otherLocale === 'en-US' ? '🇺🇸' : '🇪🇸'}`}
      </Link>
    </IconButton>
  )
}

export default LocaleSwitcher
