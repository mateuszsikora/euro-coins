import { type CountrySpecs, runCountryTest } from '../run-country-tests.js';
import coins from './de.js';

const country = 'de';

const countrySpec: CountrySpecs = [
  [2002, 8, 0],
  [2006, 0, 1],
  [2007, 0, 2],
  [2008, 0, 1],
  [2009, 0, 2],
  [2010, 0, 1],
  [2011, 0, 1],
  [2012, 0, 2],
  [2013, 0, 2],
  [2014, 0, 1],
  [2015, 0, 3],
  [2016, 0, 1],
  [2017, 0, 1],
  [2018, 0, 2],
  [2019, 0, 2],
  [2020, 0, 2],
  [2021, 0, 1],
  [2022, 0, 2],
  [2023, 0, 2],
  [2024, 0, 2],
  [2025, 0, 1],
];

runCountryTest(country, countrySpec, coins);
