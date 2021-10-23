import { format } from 'date-fns'
const getLocale = (locale) => import(`date-fns/locale/${locale}/index.js`)

export const formatDate = (date, formatStyle, locale) => {
  const lc = getLocale(locale)
  const lclize = lc.localize
  return format(date, formatStyle, {
    lc,
    lclize
  })
}