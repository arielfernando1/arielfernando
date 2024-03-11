import { useRouter } from 'next/router'
import Link from 'next/link'
import { Button } from '@chakra-ui/react'

export function LocaleSwitcher() {
  const { locale, locales, route } = useRouter()
  const otherLocale = locales?.find(cur => cur !== locale)
  return (
    <Link href={route} locale={otherLocale}>
      <Button>{`${otherLocale === 'en-US' ? '🇺🇸' : '🇪🇸'}`}</Button>
    </Link>
  )
}

export default LocaleSwitcher
