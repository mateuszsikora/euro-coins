import { type CountrySpecs, runCountryTest } from '../run-country-tests.js';
import coins from './es.js';

const country = 'es';

const countrySpec: CountrySpecs = [
  [1999, 8, 0],
  [2005, 0, 1],
  [2007, 0, 1],
  [2009, 0, 1],
  [2010, 8, 1],
  [2011, 0, 1],
  [2012, 0, 2],
  [2013, 0, 1],
  [2014, 0, 2],
  [2015, 2, 2],
  [2016, 0, 1],
  [2017, 0, 1],
  [2018, 0, 2],
  [2019, 0, 1],
  [2020, 0, 1],
  [2021, 0, 1],
  [2022, 0, 3],
  [2023, 0, 2],
  [2024, 0, 2],
  [2025, 0, 1],
];

runCountryTest(country, countrySpec, coins);
