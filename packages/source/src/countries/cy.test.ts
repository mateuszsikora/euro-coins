import { type CountrySpecs, runCountryTest } from '../run-country-tests.js';
import coins from './cy.js';

const country = 'cy';

const countrySpec: CountrySpecs = [
  [2008, 8, 0],
  [2009, 0, 1],
  [2012, 0, 1],
  [2015, 0, 1],
  [2017, 0, 1],
  [2020, 0, 1],
  [2022, 0, 1],
  [2023, 0, 1],
  [2024, 0, 1],
];

runCountryTest(country, countrySpec, coins);
