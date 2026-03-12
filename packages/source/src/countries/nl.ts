import { coinSourceFactory } from '../coin-source-factory.js';

const { regular, commemorative } = coinSourceFactory('nl');

const regular2000 = [
  regular({
    year: 2000,
    denomination: '2euro',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/nl/Netherlands_2euro_2001.jpg',
  }),
  regular({
    year: 2000,
    denomination: '1euro',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/nl/Netherlands_1euro_2000.jpg',
  }),
  regular({
    year: 2000,
    denomination: '50cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/nl/Netherlands_50cents_2000.jpg',
  }),
  regular({
    year: 2000,
    denomination: '20cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/nl/Netherlands_20cent_2000.jpg',
  }),
  regular({
    year: 2000,
    denomination: '10cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/nl/Netherlands_10cent_2000.jpg',
  }),
  regular({
    year: 2000,
    denomination: '5cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/nl/Netherlands_5cent_2000.jpg',
  }),
  regular({
    year: 2000,
    denomination: '2cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/nl/Netherlands_2cent_2000.jpg',
  }),
  regular({
    year: 2000,
    denomination: '1cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/nl/Netherlands_1cent_2000.jpg',
  }),
];

const mixed2014 = [
  commemorative({
    year: 2014,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2014/comm_2014_Netherlands.jpg',
  }),
  regular({
    year: 2014,
    denomination: '2euro',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/nl/Netherlands_2Euro.jpg',
  }),
  regular({
    year: 2014,
    denomination: '1euro',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/nl/Netherlands_1euro_2014.jpg',
  }),
  regular({
    year: 2014,
    denomination: '50cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/nl/Netherlands_50cent.jpg',
  }),
  regular({
    year: 2014,
    denomination: '20cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/nl/Netherlands_20cent.jpg',
  }),
  regular({
    year: 2014,
    denomination: '10cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/nl/Netherlands_10cent.jpg',
  }),
  regular({
    year: 2014,
    denomination: '5cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/nl/Netherlands_5cent_2014.jpg',
  }),
  regular({
    year: 2014,
    denomination: '2cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/nl/Netherlands_2cent_2014.jpg',
  }),
  regular({
    year: 2014,
    denomination: '1cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/nl/Netherlands_1cent_2014.jpg',
  }),
];

const commemorative2007 = [
  commemorative({
    year: 2007,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2007/joint_comm_2007_Netherlands.jpg',
  }),
];

const commemorative2009 = [
  commemorative({
    year: 2009,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2009/joint_comm_2009_Netherlands.jpg',
  }),
];

const commemorative2011 = [
  commemorative({
    year: 2011,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2011/comm_2011_nl.jpg',
  }),
];

const commemorative2012 = [
  commemorative({
    year: 2012,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2012/joint_comm_2012_Netherlands.jpg',
  }),
];

const commemorative2013 = [
  commemorative({
    year: 2013,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2013/comm_2013_Netherlands.jpg',
  }),
  commemorative({
    year: 2013,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2013/comm_2013_Netherlands_Abdication.jpg',
    index: 1,
  }),
];

const commemorative2015 = [
  commemorative({
    year: 2015,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2015/joint_comm_2015_Nederland.jpg',
  }),
];

const commemorative2022 = [
  commemorative({
    year: 2022,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2022/Netherlands.jpg',
  }),
];

export default [
  ...regular2000,
  ...mixed2014,
  ...commemorative2007,
  ...commemorative2009,
  ...commemorative2011,
  ...commemorative2012,
  ...commemorative2013,
  ...commemorative2015,
  ...commemorative2022,
];
