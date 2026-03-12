import { coinSourceFactory } from '../coin-source-factory.js';

const { regular, commemorative } = coinSourceFactory('at');

const regular1999 = [
  regular({
    year: 1999,
    denomination: '2euro',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/at/Austria_2Euro.jpg',
  }),
  regular({
    year: 1999,
    denomination: '1euro',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/at/Austria_1Euro.jpg',
  }),
  regular({
    year: 1999,
    denomination: '50cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/at/Austria_50cent.jpg',
  }),
  regular({
    year: 1999,
    denomination: '20cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/at/Austria_20cent.jpg',
  }),
  regular({
    year: 1999,
    denomination: '10cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/at/Austria_10cent.jpg',
  }),
  regular({
    year: 1999,
    denomination: '5cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/at/Austria_5cent.jpg',
  }),
  regular({
    year: 1999,
    denomination: '2cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/at/Austria_2cent.jpg',
  }),
  regular({
    year: 1999,
    denomination: '1cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/at/Austria_1cent.jpg',
  }),
];

const commemorative2005 = [
  commemorative({
    year: 2005,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2005/comm_2005_at.jpg',
  }),
];

const commemorative2007 = [
  commemorative({
    year: 2007,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2007/joint_comm_2007_Austria.jpg',
  }),
];

const commemorative2009 = [
  commemorative({
    year: 2009,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2009/joint_comm_2009_Austria.jpg',
  }),
];

const commemorative2012 = [
  commemorative({
    year: 2012,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2012/joint_comm_2012_Austria.jpg',
  }),
];

const commemorative2015 = [
  commemorative({
    year: 2015,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2015/joint_comm_2015_Austria.jpg',
  }),
];

const commemorative2016 = [
  commemorative({
    year: 2016,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2016/comm_2016_austria.jpg',
  }),
];

const commemorative2018 = [
  commemorative({
    year: 2018,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2018/comm_2017_Austria_100years.jpg',
  }),
];

const commemorative2022 = [
  commemorative({
    year: 2022,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2022/Austria1.jpg',
  }),
];

export default [
  ...regular1999,
  ...commemorative2005,
  ...commemorative2007,
  ...commemorative2009,
  ...commemorative2012,
  ...commemorative2015,
  ...commemorative2016,
  ...commemorative2018,
  ...commemorative2022,
];
