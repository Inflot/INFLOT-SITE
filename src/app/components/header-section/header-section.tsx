import Header from '../header/header';
import { useTranslations } from 'next-intl';

export default function HeaderLinks() {
  const l = useTranslations('lang');
  const h = useTranslations('navigation');
  const tMeta = useTranslations('meta');

  const langs = {
    RU: l('russian'),
    GB: l('english'),
    DE: l('german'),
    FR: l('french'),
    NO: l('norwegian'),
  };

  const links = {
    mission: h('mission'),
    contacts: h('contacts'),
    about: h('about'),
    staff: h('staff'),
    services: h('services'),
    surveys: h('surveys'),
    marineLinks: h('marineLinks'),
  };

  return <Header langs={langs} links={links} title={tMeta('title')}/>;
}
