import { type CountrySpecs, runCountryTest } from '../run-country-tests.js';
import coins from './lv.js';

const country = 'lv';

const countrySpec: CountrySpecs = [
  [2014, 8, 1],
  [2015, 0, 3],
  [2016, 0, 2],
  [2017, 0, 2],
  [2018, 0, 2],
  [2019, 0, 1],
  [2020, 0, 1],
  [2021, 0, 1],
  [2022, 0, 2],
  [2023, 0, 1],
  [2024, 0, 1],
];

runCountryTest(country, countrySpec, coins);
