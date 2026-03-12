import { coinSourceFactory } from '../coin-source-factory.js';

const { regular, commemorative } = coinSourceFactory('si');

const mixed2007 = [
  regular({
    year: 2007,
    denomination: '2euro',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/sl/Slovenia_2Euro.jpg',
  }),
  regular({
    year: 2007,
    denomination: '1euro',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/sl/Slovenia_1Euro.jpg',
  }),
  regular({
    year: 2007,
    denomination: '50cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/sl/Slovenia_50cent.jpg',
  }),
  regular({
    year: 2007,
    denomination: '20cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/sl/Slovenia_20cent.jpg',
  }),
  regular({
    year: 2007,
    denomination: '10cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/sl/Slovenia_10cent.jpg',
  }),
  regular({
    year: 2007,
    denomination: '5cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/sl/Slovenia_5cent.jpg',
  }),
  regular({
    year: 2007,
    denomination: '2cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/sl/Slovenia_2cent.jpg',
  }),
  regular({
    year: 2007,
    denomination: '1cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/sl/Slovenia_1cent.jpg',
  }),
  commemorative({
    year: 2007,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2007/joint_comm_2007_Slovenia.jpg',
  }),
];

const commemorative2008 = [
  commemorative({
    year: 2008,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2008/comm_2008_Slovenia.jpg',
  }),
];

const commemorative2009 = [
  commemorative({
    year: 2009,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2009/joint_comm_2009_Slovenia.jpg',
  }),
];

const commemorative2010 = [
  commemorative({
    year: 2010,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2010/comm_2010_sl.jpg',
  }),
];

const commemorative2011 = [
  commemorative({
    year: 2011,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2011/comm_2011_sl.jpg',
  }),
];

const commemorative2012 = [
  commemorative({
    year: 2012,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2012/joint_comm_2012_Slovenia.jpg',
  }),
];

const commemorative2013 = [
  commemorative({
    year: 2013,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2013/comm_2013_sl.jpg',
  }),
];

const commemorative2014 = [
  commemorative({
    year: 2014,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2014/comm_2014_Slovenia.jpg',
  }),
];

const commemorative2015 = [
  commemorative({
    year: 2015,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2015/joint_comm_2015_Slovenia.jpg',
  }),
  commemorative({
    year: 2015,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2015/comm_2015_Slovenia.jpg',
    index: 1,
  }),
];

const commemorative2016 = [
  commemorative({
    year: 2016,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2016/comm_2016_slovenia_independence.jpg',
  }),
];

const commemorative2017 = [
  commemorative({
    year: 2017,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2017/comm_2017_slovenia_anniversary.jpg',
  }),
];

const commemorative2018 = [
  commemorative({
    year: 2018,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2018/comm_2018_slovenia_bee.jpg',
  }),
];

const commemorative2019 = [
  commemorative({
    year: 2019,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2019/comm_2019_sv_100anni_university_ljublja.jpg',
  }),
];

const commemorative2020 = [
  commemorative({
    year: 2020,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2020/comm_2020_sl_birth_bohoric.jpg',
  }),
];

const commemorative2021 = [
  commemorative({
    year: 2021,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2021/SL_Oct21.jpg',
  }),
];

const commemorative2022 = [
  commemorative({
    year: 2022,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2022/Slovenia.jpg',
  }),
  commemorative({
    year: 2022,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2022/SL-slovenia.jpg',
    index: 1,
  }),
];

const commemorative2023 = [
  commemorative({
    year: 2023,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2023/coins14.jpg',
  }),
];

const commemorative2024 = [
  commemorative({
    year: 2024,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2024/Slovenia.jpg',
  }),
];

const commemorative2025 = [
  commemorative({
    year: 2025,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2025/placeholder_coming_soon%20(1).jpg',
  }),
];

export default [
  ...mixed2007,
  ...commemorative2008,
  ...commemorative2009,
  ...commemorative2010,
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
