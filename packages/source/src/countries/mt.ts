import { coinConfigFactory } from '../utils.js';

const { regular, commemorative } = coinConfigFactory('mt');

const regular2008 = [
  regular({
    year: 2008,
    denomination: '2euro',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/mt/Malta_2euro.jpg',
  }),
  regular({
    year: 2008,
    denomination: '1euro',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/mt/Malta_1Euro.jpg',
  }),
  regular({
    year: 2008,
    denomination: '50cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/mt/Malta_50cent.jpg',
  }),
  regular({
    year: 2008,
    denomination: '20cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/mt/Malta_20cent.jpg',
  }),
  regular({
    year: 2008,
    denomination: '10cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/mt/Malta_10cent.jpg',
  }),
  regular({
    year: 2008,
    denomination: '5cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/mt/Malta_5cent.jpg',
  }),
  regular({
    year: 2008,
    denomination: '2cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/mt/Malta_2cent.jpg',
  }),
  regular({
    year: 2008,
    denomination: '1cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/mt/Malta_1cent.jpg',
  }),
];

const commemorative2009 = [
  commemorative({
    year: 2009,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2009/joint_comm_2009_Malta.jpg',
  }),
];

const commemorative2011 = [
  commemorative({
    year: 2011,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2011/comm_2011_mt.jpg',
  }),
];

const commemorative2012 = [
  commemorative({
    year: 2012,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2012/comm_2012_mt.jpg',
  }),
  commemorative({
    year: 2012,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2012/joint_comm_2012_Malta.jpg',
    index: 1,
  }),
];

const commemorative2013 = [
  commemorative({
    year: 2013,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2013/comm_2013_Malta.jpg',
  }),
];

const commemorative2014 = [
  commemorative({
    year: 2014,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2014/comm_2014_Malta_2.jpg',
  }),
  commemorative({
    year: 2014,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2014/comm_2014_Malta.jpg',
    index: 1,
  }),
];

const commemorative2015 = [
  commemorative({
    year: 2015,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2015/joint_comm_2015_Malta.jpg',
  }),
  commemorative({
    year: 2015,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2015/comm_2015_Malta_Republic1974.jpg',
    index: 1,
  }),
  commemorative({
    year: 2015,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2015/comm_2015_Malta.jpg',
    index: 2,
  }),
];

const commemorative2016 = [
  commemorative({
    year: 2016,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2016/comm_2016_malta_solidarity.jpg',
  }),
  commemorative({
    year: 2016,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2016/comm_2016_malta.jpg',
    index: 1,
  }),
];

const commemorative2017 = [
  commemorative({
    year: 2017,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2017/comm_2017_Malta_Solidarity.jpg',
  }),
  commemorative({
    year: 2017,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2017/comm_2017_Malta_Hagar_Qim.jpg',
    index: 1,
  }),
];

const commemorative2018 = [
  commemorative({
    year: 2018,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2018/comm_2018_malta_culherit.jpg',
  }),
  commemorative({
    year: 2018,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2018/comm_2018_malta.jpg',
    index: 1,
  }),
];

const commemorative2019 = [
  commemorative({
    year: 2019,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2019/comm_2019_mt_nature_dvpt.jpg',
  }),
  commemorative({
    year: 2019,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2019/comm_2019_mt_Ta_Hagrat.jpg',
    index: 1,
  }),
];

const commemorative2020 = [
  commemorative({
    year: 2020,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2020/comm_2020_mt_children_games.jpg',
  }),
  commemorative({
    year: 2020,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2020/comm_2020_mt_skorba.jpg',
    index: 1,
  }),
];

const commemorative2021 = [
  commemorative({
    year: 2021,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2021/comm_2021_mt_tarxien_temples_1.jpg',
  }),
  commemorative({
    year: 2021,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2021/comm_2021_mt_june.jpg',
    index: 1,
  }),
];

const commemorative2022 = [
  commemorative({
    year: 2022,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2022/Malta.jpg',
  }),
  commemorative({
    year: 2022,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2022/0410-23r.jpg',
    index: 1,
  }),
  commemorative({
    year: 2022,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2022/0412-23r.jpg',
    index: 2,
  }),
];

const commemorative2023 = [
  commemorative({
    year: 2023,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2023/IMG_0041_540x540.jpg',
  }),
  commemorative({
    year: 2023,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2023/IMG_0049_540x540.jpg',
    index: 1,
  }),
];

const commemorative2024 = [
  commemorative({
    year: 2024,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2024/Malta_011.jpg',
  }),
  commemorative({
    year: 2024,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2024/Malta_021.jpg',
    index: 1,
  }),
];

const commemorative2025 = [
  commemorative({
    year: 2025,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2025/Malta_540x540.jpg',
  }),
  commemorative({
    year: 2025,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2025/Malta.jpg',
    index: 1,
  }),
];

export default [
  ...regular2008,
  ...commemorative2009,
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
