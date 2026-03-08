import { type CountrySpecs, runCountryTest } from '../run-country-tests.js';
import coins from './si.js';

const country = 'si';

const countrySpec: CountrySpecs = [
  [2007, 8, 1],
  [2008, 0, 1],
  [2009, 0, 1],
  [2010, 0, 1],
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
  [2023, 0, 1],
  [2024, 0, 1],
  [2025, 0, 1],
];

runCountryTest(country, countrySpec, coins);
