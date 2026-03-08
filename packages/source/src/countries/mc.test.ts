import { type CountrySpecs, runCountryTest } from '../run-country-tests.js';
import coins from './mc.js';

const country = 'mc';

const countrySpec: CountrySpecs = [
  [2001, 8, 0],
  [2006, 8, 0],
  [2007, 0, 1],
  [2011, 0, 1],
  [2012, 0, 1],
  [2013, 0, 1],
  [2015, 0, 1],
  [2016, 0, 1],
  [2017, 0, 1],
  [2018, 0, 1],
  [2019, 0, 1],
  [2020, 0, 1],
  [2021, 0, 1],
  [2022, 0, 1],
  [2023, 0, 1],
  [2024, 0, 1],
  [2025, 8, 2],
];

runCountryTest(country, countrySpec, coins);
