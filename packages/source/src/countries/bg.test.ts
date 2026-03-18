import { type CountrySpecs, runCountryTest } from '../run-country-tests.js';
import coins from './bg.js';

const country = 'bg';

const countrySpec: CountrySpecs = [[2025, 8, 0]];

runCountryTest(country, countrySpec, coins);
