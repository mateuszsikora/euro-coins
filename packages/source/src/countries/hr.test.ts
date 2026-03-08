import { type CountrySpecs, runCountryTest } from '../run-country-tests.js';
import coins from './hr.js';

const country = 'hr';

const countrySpec: CountrySpecs = [
  [2023, 8, 1],
  [2024, 0, 2],
  [2025, 0, 2],
];

runCountryTest(country, countrySpec, coins);
