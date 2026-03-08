import { type CountrySpecs, runCountryTest } from '../run-country-tests.js';
import coins from './nl.js';

const country = 'nl';

const countrySpec: CountrySpecs = [
  [2000, 8, 0],
  [2007, 0, 1],
  [2009, 0, 1],
  [2011, 0, 1],
  [2012, 0, 1],
  [2013, 0, 2],
  [2014, 8, 1],
  [2015, 0, 1],
  [2022, 0, 1],
];

runCountryTest(country, countrySpec, coins);
