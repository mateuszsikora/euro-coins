import { coinConfigFactory } from '../utils.js';

const { regular, commemorative } = coinConfigFactory('lv');

const mixed2014 = [
  regular({
    year: 2014,
    denomination: '2euro',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/lv/Latvia_2euro.jpg',
  }),
  regular({
    year: 2014,
    denomination: '1euro',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/lv/Latvia_1euro.jpg',
  }),
  regular({
    year: 2014,
    denomination: '50cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/lv/Latvia_50cent.jpg',
  }),
  regular({
    year: 2014,
    denomination: '20cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/lv/Latvia_20cent.jpg',
  }),
  regular({
    year: 2014,
    denomination: '10cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/lv/Latvia_10cent.jpg',
  }),
  regular({
    year: 2014,
    denomination: '5cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/lv/Latvia_5cent.jpg',
  }),
  regular({
    year: 2014,
    denomination: '2cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/lv/Latvia_2cent.jpg',
  }),
  regular({
    year: 2014,
    denomination: '1cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/lv/Latvia_1cent.jpg',
  }),
  commemorative({
    year: 2014,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2014/comm_2014_Latvia.jpg',
  }),
];

const commemorative2015 = [
  commemorative({
    year: 2015,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2015/comm_2015_Latvia_Stork.jpg',
  }),
  commemorative({
    year: 2015,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2015/joint_comm_2015_Latvia.jpg',
    index: 1,
  }),
  commemorative({
    year: 2015,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2015/comm_2015_Latvia.jpg',
    index: 2,
  }),
];

const commemorative2016 = [
  commemorative({
    year: 2016,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2016/comm_2016_latvia_vidzeme.jpg',
  }),
  commemorative({
    year: 2016,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2016/comm_2016_latvia_agriculture.jpg',
    index: 1,
  }),
];

const commemorative2017 = [
  commemorative({
    year: 2017,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2017/comm_2017_Latvia_Latgale.jpg',
  }),
  commemorative({
    year: 2017,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2017/comm_2017_Latvia_Kurzeme.jpg',
    index: 1,
  }),
];

const commemorative2018 = [
  commemorative({
    year: 2018,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2018/comm_2018_latvia_zemgale.jpg',
  }),
  commemorative({
    year: 2018,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2018/comm_2018_latvia_joint.jpg',
    index: 1,
  }),
];

const commemorative2019 = [
  commemorative({
    year: 2019,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2019/comm_2019_lv_rising_sun.jpg',
  }),
];

const commemorative2020 = [
  commemorative({
    year: 2020,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2020/comm_2020_lv_latgalian_ceramics.jpg',
  }),
];

const commemorative2021 = [
  commemorative({
    year: 2021,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2021/comm_2021_lv_100_anniversary_iure.jpg',
  }),
];

const commemorative2022 = [
  commemorative({
    year: 2022,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2022/Latvia.jpg',
  }),
  commemorative({
    year: 2022,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2022/0427-23r.jpg',
    index: 1,
  }),
];

const commemorative2023 = [
  commemorative({
    year: 2023,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2023/coins7.jpg',
  }),
];

const commemorative2024 = [
  commemorative({
    year: 2024,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2024/Latvia.jpg',
  }),
];

export default [
  ...mixed2014,
  ...commemorative2015,
  ...commemorative2016,
  ...commemorative2017,
  ...commemorative2018,
  ...commemorative2019,
  ...commemorative2020,
  ...commemorative2021,
  ...commemorative2022,
  ...commemorative2023,
  ...commemorative2024,
];
