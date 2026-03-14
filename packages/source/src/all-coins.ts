import type { CoinSource } from './coin-source.js';
import ad from './countries/ad.js';
import at from './countries/at.js';
import be from './countries/be.js';
import cy from './countries/cy.js';
import de from './countries/de.js';
import ee from './countries/ee.js';
import es from './countries/es.js';
import fi from './countries/fi.js';
import fr from './countries/fr.js';
import gr from './countries/gr.js';
import hr from './countries/hr.js';
import ie from './countries/ie.js';
import it from './countries/it.js';
import lt from './countries/lt.js';
import lu from './countries/lu.js';
import lv from './countries/lv.js';
import mc from './countries/mc.js';
import mt from './countries/mt.js';
import nl from './countries/nl.js';
import pt from './countries/pt.js';
import si from './countries/si.js';
import sk from './countries/sk.js';
import sm from './countries/sm.js';
import va from './countries/va.js';

/** Returns all coin sources across all 24 eurozone countries. */
export function getAllCoins(): CoinSource[] {
  return [
    ...ad,
    ...at,
    ...be,
    ...cy,
    ...de,
    ...es,
    ...ee,
    ...fi,
    ...fr,
    ...gr,
    ...hr,
    ...ie,
    ...it,
    ...lt,
    ...lu,
    ...lv,
    ...mc,
    ...mt,
    ...nl,
    ...pt,
    ...si,
    ...sk,
    ...sm,
    ...va,
  ];
}
