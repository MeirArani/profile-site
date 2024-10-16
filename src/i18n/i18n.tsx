import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
 
// Can be imported from a shared config
const locales = ['en', 'ja'];
 
export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) 
    {
      console.log(`Hell of a ${JSON.stringify(locale)}`);  
      notFound();
    }
 
  return {
    defaultTranslationValues: {
      i: (chunks) => <i>{chunks}</i>,
      value: 123
    },
    messages: (await import(`../messages/${locale}.json`)).default
  };
});