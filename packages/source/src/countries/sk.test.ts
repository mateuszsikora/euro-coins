import { type CountrySpecs, runCountryTest } from '../run-country-tests.js';
import coins from './sk.js';

const country = 'sk';

const countrySpec: CountrySpecs = [
  [2009, 8, 2],
  [2011, 0, 1],
  [2012, 0, 1],
  [2013, 0, 1],
  [2014, 0, 1],
  [2015, 0, 2],
  [2016, 0, 1],
  [2017, 0, 1],
  [2018, 0, 1],
  [2019, 0, 1],
  [2020, 0, 1],
  [2021, 0, 1],
  [2022, 0, 2],
  [2023, 0, 2],
  [2024, 0, 1],
  [2025, 0, 1],
];

runCountryTest(country, countrySpec, coins);
