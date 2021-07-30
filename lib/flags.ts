import FR from '../public/img/country-flags/FR.svg';
import UK from '../public/img/country-flags/GB.svg';


const flags = {
  'fr': FR,
  'uk': UK
};

export function getFlag (country: string): any {
  if (flags[country]) return flags[country];

  return flags['fr'];
}