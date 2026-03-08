import { type CountrySpecs, runCountryTest } from '../run-country-tests.js';
import coins from './va.js';

const country = 'va';

const countrySpec: CountrySpecs = [
  [2002, 8, 0],
  [2004, 0, 1],
  [2005, 8, 1],
  [2006, 8, 1],
  [2007, 0, 1],
  [2008, 0, 1],
  [2009, 0, 1],
  [2010, 0, 1],
  [2011, 0, 1],
  [2012, 0, 1],
  [2013, 0, 2],
  [2014, 8, 1],
  [2015, 0, 1],
  [2016, 0, 2],
  [2017, 8, 2],
  [2018, 0, 2],
  [2019, 0, 2],
  [2020, 0, 1],
  [2021, 0, 2],
  [2022, 0, 2],
  [2023, 0, 2],
  [2024, 0, 2],
  [2025, 0, 3],
];

runCountryTest(country, countrySpec, coins);
