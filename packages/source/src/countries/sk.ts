import { coinConfigFactory } from '../utils.js';

const { regular, commemorative } = coinConfigFactory('sk');

const mixed2009 = [
  regular({
    year: 2009,
    denomination: '2euro',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/sk/Slovakia_2Euro.jpg',
  }),
  regular({
    year: 2009,
    denomination: '1euro',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/sk/Slovakia_1Euro.jpg',
  }),
  regular({
    year: 2009,
    denomination: '50cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/sk/Slovakia_50cent.jpg',
  }),
  regular({
    year: 2009,
    denomination: '20cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/sk/Slovakia_20cent.jpg',
  }),
  regular({
    year: 2009,
    denomination: '10cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/sk/Slovakia_10cent.jpg',
  }),
  regular({
    year: 2009,
    denomination: '5cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/sk/Slovakia_5cent.jpg',
  }),
  regular({
    year: 2009,
    denomination: '2cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/sk/Slovakia_2cent.jpg',
  }),
  regular({
    year: 2009,
    denomination: '1cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/sk/Slovakia_1cent.jpg',
  }),
  commemorative({
    year: 2009,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2009/comm_2009_sk.jpg',
  }),
  commemorative({
    year: 2009,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2009/joint_comm_2009_Slovakia.jpg',
    index: 1,
  }),
];

const commemorative2011 = [
  commemorative({
    year: 2011,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2011/comm_2011_sk.jpg',
  }),
];

const commemorative2012 = [
  commemorative({
    year: 2012,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2012/joint_comm_2012_Slovakia.jpg',
  }),
];

const commemorative2013 = [
  commemorative({
    year: 2013,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2013/comm_2013_sk.jpg',
  }),
];

const commemorative2014 = [
  commemorative({
    year: 2014,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2014/comm_2014_Slovakia.jpg',
  }),
];

const commemorative2015 = [
  commemorative({
    year: 2015,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2015/comm_2015_Slovakia.jpg',
  }),
  commemorative({
    year: 2015,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2015/joint_comm_2015_Slovakia.jpg',
    index: 1,
  }),
];

const commemorative2016 = [
  commemorative({
    year: 2016,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2016/comm_2016_slovakia_presidency.jpg',
  }),
];

const commemorative2017 = [
  commemorative({
    year: 2017,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2017/comm_2017_slovakia_university.jpg',
  }),
];

const commemorative2018 = [
  commemorative({
    year: 2018,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2018/comm_2018_slovakia_anniversary.jpg',
  }),
];

const commemorative2019 = [
  commemorative({
    year: 2019,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2019/comm_2019_sk_100annivdeathMRS.jpg',
  }),
];

const commemorative2020 = [
  commemorative({
    year: 2020,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2020/comm_2020_sk_anniversary_oecd.jpg',
  }),
];

const commemorative2021 = [
  commemorative({
    year: 2021,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2021/comm_2021_sk_november.jpg',
  }),
];

const commemorative2022 = [
  commemorative({
    year: 2022,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2022/Slovakia.jpg',
  }),
  commemorative({
    year: 2022,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2022/0441-23r.jpg',
    index: 1,
  }),
];

const commemorative2023 = [
  commemorative({
    year: 2023,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2023/0443-23r.jpg',
  }),
  commemorative({
    year: 2023,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2023/IMG_0049.jpg',
    index: 1,
  }),
];

const commemorative2024 = [
  commemorative({
    year: 2024,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2024/Slovakia1.jpg',
  }),
];

const commemorative2025 = [
  commemorative({
    year: 2025,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2025/Slovakia.jpg',
  }),
];

export default [
  ...mixed2009,
  ...commemorative2011,
  ...commemorative2012,
  ...commemorative2013,
  ...commemorative2014,
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
  ...commemorative2025,
];
