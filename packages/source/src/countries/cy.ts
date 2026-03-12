import { coinSourceFactory } from '../coin-source-factory.js';

const { regular, commemorative } = coinSourceFactory('cy');

const regular2008 = [
  regular({
    year: 2008,
    denomination: '2euro',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/cy/Cyprus_2Euro.jpg',
  }),
  regular({
    year: 2008,
    denomination: '1euro',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/cy/Cyprus_1euro.jpg',
  }),
  regular({
    year: 2008,
    denomination: '50cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/cy/Cyprus_50cent.jpg',
  }),
  regular({
    year: 2008,
    denomination: '20cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/cy/Cyprus_20cent.jpg',
  }),
  regular({
    year: 2008,
    denomination: '10cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/cy/Cyprus_10cent.jpg',
  }),
  regular({
    year: 2008,
    denomination: '5cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/cy/Cyprus_5cent.jpg',
  }),
  regular({
    year: 2008,
    denomination: '2cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/cy/Cyprus_2cent.jpg',
  }),
  regular({
    year: 2008,
    denomination: '1cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/cy/Cyprus_1cent.jpg',
  }),
];

const commemorative2009 = [
  commemorative({
    year: 2009,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2009/joint_comm_2009_Cyprus.jpg',
  }),
];

const commemorative2012 = [
  commemorative({
    year: 2012,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2012/joint_comm_2012_Cyprus.jpg',
  }),
];

const commemorative2015 = [
  commemorative({
    year: 2015,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2015/joint_comm_2015_Cyprus.jpg',
  }),
];

const commemorative2017 = [
  commemorative({
    year: 2017,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2017/comm_2017_Cyprus_Paphos.jpg',
  }),
];

const commemorative2020 = [
  commemorative({
    year: 2020,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2020/comm_2020_cy_institute_neurology.jpg',
  }),
];

const commemorative2022 = [
  commemorative({
    year: 2022,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2022/Cyprus1.jpg',
  }),
];

const commemorative2023 = [
  commemorative({
    year: 2023,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2023/IMG_0029_540x5402.jpg',
  }),
];

const commemorative2024 = [
  commemorative({
    year: 2024,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2024/Cyprus.jpg',
  }),
];

export default [
  ...regular2008,
  ...commemorative2009,
  ...commemorative2012,
  ...commemorative2015,
  ...commemorative2017,
  ...commemorative2020,
  ...commemorative2022,
  ...commemorative2023,
  ...commemorative2024,
];
