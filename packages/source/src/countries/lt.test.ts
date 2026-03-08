import { type CountrySpecs, runCountryTest } from '../run-country-tests.js';
import coins from './lt.js';

const country = 'lt';

const countrySpec: CountrySpecs = [
  [2015, 8, 2],
  [2016, 0, 1],
  [2017, 0, 1],
  [2018, 0, 2],
  [2019, 0, 2],
  [2020, 0, 2],
  [2021, 0, 2],
  [2022, 0, 3],
  [2023, 0, 1],
  [2024, 0, 1],
  [2025, 0, 2],
];

runCountryTest(country, countrySpec, coins);
