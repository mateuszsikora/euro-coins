import { coinSourceFactory } from '../coin-source-factory.js';

const { regular } = coinSourceFactory('bg');

const regular2025 = [
  regular({
    year: 2025,
    denomination: '2euro',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/bg/Bulgaria_2euro.jpg',
  }),
  regular({
    year: 2025,
    denomination: '1euro',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/bg/Bulgaria_1euro.jpg',
  }),
  regular({
    year: 2025,
    denomination: '50cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/bg/Bulgaria_50cent.jpg',
  }),
  regular({
    year: 2025,
    denomination: '20cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/bg/Bulgaria_20cent.jpg',
  }),
  regular({
    year: 2025,
    denomination: '10cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/bg/Bulgaria_10cent.jpg',
  }),
  regular({
    year: 2025,
    denomination: '5cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/bg/Bulgaria_5cent.jpg',
  }),
  regular({
    year: 2025,
    denomination: '2cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/bg/Bulgaria_2cent.jpg',
  }),
  regular({
    year: 2025,
    denomination: '1cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/bg/Bulgaria_1cent.jpg',
  }),
];

export default [...regular2025];
