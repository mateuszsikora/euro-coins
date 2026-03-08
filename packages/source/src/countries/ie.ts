import { coinConfigFactory } from '../utils.js';

const { regular, commemorative } = coinConfigFactory('ie');

const regular2002 = [
  regular({
    year: 2002,
    denomination: '2euro',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/ie/Ireland_2euro.jpg',
  }),
  regular({
    year: 2002,
    denomination: '1euro',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/ie/Ireland_1euro.jpg',
  }),
  regular({
    year: 2002,
    denomination: '50cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/ie/Ireland_50cent.jpg',
  }),
  regular({
    year: 2002,
    denomination: '20cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/ie/Ireland_20cent.jpg',
  }),
  regular({
    year: 2002,
    denomination: '10cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/ie/Ireland_10cent.jpg',
  }),
  regular({
    year: 2002,
    denomination: '5cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/ie/Ireland_5cent.jpg',
  }),
  regular({
    year: 2002,
    denomination: '2cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/ie/Ireland_2cent.jpg',
  }),
  regular({
    year: 2002,
    denomination: '1cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/ie/Ireland_1cent.jpg',
  }),
];

const commemorative2007 = [
  commemorative({
    year: 2007,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2007/joint_comm_2007_Ireland.jpg',
  }),
];

const commemorative2009 = [
  commemorative({
    year: 2009,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2009/joint_comm_2009_Ireland.jpg',
  }),
];

const commemorative2012 = [
  commemorative({
    year: 2012,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2012/joint_comm_2012_Ireland.jpg',
  }),
];

const commemorative2015 = [
  commemorative({
    year: 2015,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2015/joint_comm_2015_Ireland.jpg',
  }),
];

const commemorative2016 = [
  commemorative({
    year: 2016,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2016/comm_2016_ireland.jpg',
  }),
];

const commemorative2019 = [
  commemorative({
    year: 2019,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2019/comm_2019_ie_100anniv_Irishparliament.jpg',
  }),
];

const commemorative2022 = [
  commemorative({
    year: 2022,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2022/Ireland.jpg',
  }),
];

const commemorative2023 = [
  commemorative({
    year: 2023,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2023/IMG_0033_540x540.jpg',
  }),
];

export default [
  ...regular2002,
  ...commemorative2007,
  ...commemorative2009,
  ...commemorative2012,
  ...commemorative2015,
  ...commemorative2016,
  ...commemorative2019,
  ...commemorative2022,
  ...commemorative2023,
];
