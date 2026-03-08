import { type CountrySpecs, runCountryTest } from '../run-country-tests.js';
import coins from './ie.js';

const country = 'ie';

const countrySpec: CountrySpecs = [
  [2002, 8, 0],
  [2007, 0, 1],
  [2009, 0, 1],
  [2012, 0, 1],
  [2015, 0, 1],
  [2016, 0, 1],
  [2019, 0, 1],
  [2022, 0, 1],
  [2023, 0, 1],
];

runCountryTest(country, countrySpec, coins);
