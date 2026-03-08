import { coinConfigFactory } from '../utils.js';

const { regular, commemorative } = coinConfigFactory('fr');

const regular1999 = [
  regular({
    year: 1999,
    denomination: '2euro',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/fr/France_2euro.jpg',
  }),
  regular({
    year: 1999,
    denomination: '1euro',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/fr/France_1Euro.jpg',
  }),
  regular({
    year: 1999,
    denomination: '50cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/fr/France_50cent.jpg',
  }),
  regular({
    year: 1999,
    denomination: '20cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/fr/France_20cent.jpg',
  }),
  regular({
    year: 1999,
    denomination: '10cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/fr/France_10cent.jpg',
  }),
  regular({
    year: 1999,
    denomination: '5cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/fr/France_5cent.jpg',
  }),
  regular({
    year: 1999,
    denomination: '2cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/fr/France_2cent.jpg',
  }),
  regular({
    year: 1999,
    denomination: '1cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/fr/France_1cent.jpg',
  }),
];

const mixed2022 = [
  commemorative({
    year: 2022,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2022/France.jpg',
  }),
  commemorative({
    year: 2022,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2022/FR-chirac.jpg',
    index: 1,
  }),
  commemorative({
    year: 2022,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2022/0402-23r.jpg',
    index: 2,
  }),
  regular({
    year: 2022,
    denomination: '2euro',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/fr/France_2euro_2022.jpg',
  }),
  regular({
    year: 2022,
    denomination: '1euro',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/fr/France_1euro_2022.jpg',
  }),
];

const commemorative2023 = [
  commemorative({
    year: 2023,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2023/0405-23r.jpg',
  }),
  commemorative({
    year: 2023,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2023/IMG_0021.jpg',
    index: 1,
  }),
];

const mixed2024 = [
  commemorative({
    year: 2024,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2024/2024_comm_France1.JPG',
  }),
  commemorative({
    year: 2024,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2024/IMG_0044-540x540_2.jpg',
    index: 1,
  }),
  regular({
    year: 2024,
    denomination: '50cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/fr/France_50cent_2024.jpg',
  }),
  regular({
    year: 2024,
    denomination: '20cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/fr/France_20cent_2024.jpg',
  }),
  regular({
    year: 2024,
    denomination: '10cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/fr/France_10cent_2024.jpg',
  }),
];

const commemorative2007 = [
  commemorative({
    year: 2007,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2007/joint_comm_2007_France.jpg',
  }),
];

const commemorative2008 = [
  commemorative({
    year: 2008,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2008/comm_2008_France1.jpg',
  }),
];

const commemorative2009 = [
  commemorative({
    year: 2009,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2009/joint_comm_2009_France.jpg',
  }),
];

const commemorative2010 = [
  commemorative({
    year: 2010,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2010/comm_2010_fr.jpg',
  }),
];

const commemorative2011 = [
  commemorative({
    year: 2011,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2011/comm_2011_fr.jpg',
  }),
];

const commemorative2012 = [
  commemorative({
    year: 2012,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2012/comm_2012_fr.jpg',
  }),
  commemorative({
    year: 2012,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2012/joint_comm_2012_France.jpg',
    index: 1,
  }),
];

const commemorative2013 = [
  commemorative({
    year: 2013,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2013/comm_2013_fr.jpg',
  }),
  commemorative({
    year: 2013,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2013/comm_2013_fr_2.jpg',
    index: 1,
  }),
];

const commemorative2014 = [
  commemorative({
    year: 2014,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2014/comm_2014_France_2.jpg',
  }),
  commemorative({
    year: 2014,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2014/comm_2014_France.jpg',
    index: 1,
  }),
];

const commemorative2015 = [
  commemorative({
    year: 2015,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2015/joint_comm_2015_France.jpg',
  }),
  commemorative({
    year: 2015,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2015/comm_2015_France_Liberte.jpg',
    index: 1,
  }),
  commemorative({
    year: 2015,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2015/comm_2015_France_peace.jpg',
    index: 2,
  }),
];

const commemorative2016 = [
  commemorative({
    year: 2016,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2016/comm_2016_france_mitterand.jpg',
  }),
  commemorative({
    year: 2016,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2016/comm_2016_france.jpg',
    index: 1,
  }),
];

const commemorative2017 = [
  commemorative({
    year: 2017,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2017/comm_2017_France_pink_ribbon.jpg',
  }),
  commemorative({
    year: 2017,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2017/comm_2017_france_centenary.jpg',
    index: 1,
  }),
];

const commemorative2018 = [
  commemorative({
    year: 2018,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2018/comm_2018_france.jpg',
  }),
  commemorative({
    year: 2018,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2018/comm_2018_france_cornflower.jpg',
    index: 1,
  }),
];

const commemorative2019 = [
  commemorative({
    year: 2019,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2019/comm_2019_fr_30anniv_fallBerlinwall.jpg',
  }),
  commemorative({
    year: 2019,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2019/comm_2019_fr_60annivAsterix.jpg',
    index: 1,
  }),
];

const commemorative2020 = [
  commemorative({
    year: 2020,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2020/comm_2020_fr_medical_research.jpg',
  }),
  commemorative({
    year: 2020,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2020/comm_2020_fr_charles_de_gaulle.jpg',
    index: 1,
  }),
];

const commemorative2021 = [
  commemorative({
    year: 2021,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2021/2021_comm_France1-olympics%20540x540.jpg',
  }),
  commemorative({
    year: 2021,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2021/comm_2021_fr_unicef.jpg',
    index: 1,
  }),
];

const commemorative2025 = [
  commemorative({
    year: 2025,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2025/placeholder_coming_soon%20(1).jpg',
  }),
  commemorative({
    year: 2025,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2025/IMG_0147_540x540.jpg',
    index: 1,
  }),
];

export default [
  ...regular1999,
  ...commemorative2007,
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
  ...mixed2022,
  ...commemorative2023,
  ...mixed2024,
  ...commemorative2025,
];
