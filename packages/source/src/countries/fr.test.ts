import { type CountrySpecs, runCountryTest } from '../run-country-tests.js';
import coins from './fr.js';

const country = 'fr';

const countrySpec: CountrySpecs = [
  [1999, 8, 0],
  [2007, 0, 1],
  [2008, 0, 1],
  [2009, 0, 1],
  [2010, 0, 1],
  [2011, 0, 1],
  [2012, 0, 2],
  [2013, 0, 2],
  [2014, 0, 2],
  [2015, 0, 3],
  [2016, 0, 2],
  [2017, 0, 2],
  [2018, 0, 2],
  [2019, 0, 2],
  [2020, 0, 2],
  [2021, 0, 2],
  [2022, 2, 3],
  [2023, 0, 2],
  [2024, 3, 2],
  [2025, 0, 2],
];

runCountryTest(country, countrySpec, coins);
