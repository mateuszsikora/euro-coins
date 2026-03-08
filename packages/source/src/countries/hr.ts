import { coinConfigFactory } from '../utils.js';

const { regular, commemorative } = coinConfigFactory('hr');

const mixed2023 = [
  regular({
    year: 2023,
    denomination: '2euro',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/hr/Croatia_2euro.jpg',
  }),
  regular({
    year: 2023,
    denomination: '1euro',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/hr/Croatia_1euro.jpg',
  }),
  regular({
    year: 2023,
    denomination: '50cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/hr/Croatia_50cent.jpg',
  }),
  regular({
    year: 2023,
    denomination: '20cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/hr/Croatia_20cent.jpg',
  }),
  regular({
    year: 2023,
    denomination: '10cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/hr/Croatia_10cent.jpg',
  }),
  regular({
    year: 2023,
    denomination: '5cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/hr/Croatia_5cent.jpg',
  }),
  regular({
    year: 2023,
    denomination: '2cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/hr/Croatia_2cent.jpg',
  }),
  regular({
    year: 2023,
    denomination: '1cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/hr/Croatia_1cent.jpg',
  }),
  commemorative({
    year: 2023,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2023/Croatia_introduction_euro.jpg',
  }),
];

const commemorative2024 = [
  commemorative({
    year: 2024,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2024/Croatia.jpg',
  }),
  commemorative({
    year: 2024,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2024/Croatia1.jpg',
    index: 1,
  }),
];

const commemorative2025 = [
  commemorative({
    year: 2025,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2025/Croatia_540x540.jpg',
  }),
  // TODO: Replace placeholder URL when real coin image is published by ECB
  commemorative({
    year: 2025,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2025/placeholder_coming_soon%20(1).jpg',
    index: 1,
  }),
];

export default [...mixed2023, ...commemorative2024, ...commemorative2025];
