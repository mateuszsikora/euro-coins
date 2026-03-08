import { type CountrySpecs, runCountryTest } from '../run-country-tests.js';
import coins from './ad.js';

const country = 'ad';

const countrySpec: CountrySpecs = [
  [2014, 8, 1],
  [2015, 0, 2],
  [2016, 0, 2],
  [2017, 0, 2],
  [2018, 0, 2],
  [2019, 0, 2],
  [2020, 0, 2],
  [2021, 0, 2],
  [2022, 0, 2],
  [2023, 0, 2],
  [2024, 0, 2],
  [2025, 0, 2],
];

runCountryTest(country, countrySpec, coins);
