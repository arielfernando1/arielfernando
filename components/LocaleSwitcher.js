import { useRouter } from 'next/router'
import Link from 'next/link'
import { IconButton } from '@chakra-ui/react'

export function LocaleSwitcher() {
  const { locale, locales, route } = useRouter()
  const otherLocale = locales?.find(cur => cur !== locale)
  return (
    <IconButton>
      <Link href={route} locale={otherLocale}>
        {`${otherLocale === 'en-US' ? '🇺🇸' : '🇪🇸'}`}
      </Link>
    </IconButton>
  )
}

export default LocaleSwitcher
