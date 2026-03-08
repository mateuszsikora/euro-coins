import { type CountrySpecs, runCountryTest } from '../run-country-tests.js';
import coins from './at.js';

const country = 'at';

const countrySpec: CountrySpecs = [
  [1999, 8, 0],
  [2005, 0, 1],
  [2007, 0, 1],
  [2009, 0, 1],
  [2012, 0, 1],
  [2015, 0, 1],
  [2016, 0, 1],
  [2018, 0, 1],
  [2022, 0, 1],
];

runCountryTest(country, countrySpec, coins);
