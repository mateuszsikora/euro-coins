import { coinSourceFactory } from '../coin-source-factory.js';

const { regular, commemorative } = coinSourceFactory('va');

const regular2002 = [
  regular({
    year: 2002,
    denomination: '2euro',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/va/Vaticano_2euro_2002.jpg',
  }),
  regular({
    year: 2002,
    denomination: '1euro',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/va/Vatican_1euro_2002.jpg',
  }),
  regular({
    year: 2002,
    denomination: '50cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/va/Vatican_50cent_2002.jpg',
  }),
  regular({
    year: 2002,
    denomination: '20cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/va/Vatican_20cent_2002.jpg',
  }),
  regular({
    year: 2002,
    denomination: '10cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/va/Vatican_10cent_2002.jpg',
  }),
  regular({
    year: 2002,
    denomination: '5cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/va/Vatican_5cent_2002.jpg',
  }),
  regular({
    year: 2002,
    denomination: '2cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/va/Vatican_2cent_2002.jpg',
  }),
  regular({
    year: 2002,
    denomination: '1cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/va/Vatican_1cent_2002.jpg',
  }),
];

const commemorative2004 = [
  commemorative({
    year: 2004,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2004/comm_2004_va.jpg',
  }),
];

const mixed2005 = [
  commemorative({
    year: 2005,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2005/comm_2005_va.jpg',
  }),
  regular({
    year: 2005,
    denomination: '2euro',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/va/Vaticano_2euro_SedeVacante.jpg',
  }),
  regular({
    year: 2005,
    denomination: '1euro',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/va/Vatican_1euro_SedeVacante.jpg',
  }),
  regular({
    year: 2005,
    denomination: '50cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/va/Vatican_50cent_SedeVacante.jpg',
  }),
  regular({
    year: 2005,
    denomination: '20cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/va/Vatican_20cent_SedeVacante.jpg',
  }),
  regular({
    year: 2005,
    denomination: '10cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/va/Vatican_10cent_SedeVacante.jpg',
  }),
  regular({
    year: 2005,
    denomination: '5cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/va/Vatican_5cent_SedeVacante.jpg',
  }),
  regular({
    year: 2005,
    denomination: '2cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/va/Vatican_2cent_SedeVacante.jpg',
  }),
  regular({
    year: 2005,
    denomination: '1cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/va/Vatican_1cent_SedeVacante.jpg',
  }),
];

const mixed2006 = [
  commemorative({
    year: 2006,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2006/comm_2006_va.jpg',
  }),
  regular({
    year: 2006,
    denomination: '2euro',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/va/Vaticano_2euro_2013.jpg',
  }),
  regular({
    year: 2006,
    denomination: '1euro',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/va/Vatican_1euro_2013.jpg',
  }),
  regular({
    year: 2006,
    denomination: '50cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/va/Vatican_50cent_2013.jpg',
  }),
  regular({
    year: 2006,
    denomination: '20cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/va/Vatican_20cent_2013.jpg',
  }),
  regular({
    year: 2006,
    denomination: '10cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/va/Vatican_10cent_2013.jpg',
  }),
  regular({
    year: 2006,
    denomination: '5cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/va/Vatican_5cent_2013.jpg',
  }),
  regular({
    year: 2006,
    denomination: '2cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/va/Vatican_2cent_2013.jpg',
  }),
  regular({
    year: 2006,
    denomination: '1cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/va/Vatican_1cent_2013.jpg',
  }),
];

const commemorative2007 = [
  commemorative({
    year: 2007,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2007/comm_2007_va.jpg',
  }),
];

const commemorative2008 = [
  commemorative({
    year: 2008,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2008/comm_2008_Vatican.jpg',
  }),
];

const commemorative2009 = [
  commemorative({
    year: 2009,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2009/comm_2009_va.jpg',
  }),
];

const commemorative2010 = [
  commemorative({
    year: 2010,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2010/comm_2010_va.jpg',
  }),
];

const commemorative2011 = [
  commemorative({
    year: 2011,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2011/comm_2011_va.jpg',
  }),
];

const commemorative2012 = [
  commemorative({
    year: 2012,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2012/comm_2012_va.jpg',
  }),
];

const commemorative2013 = [
  commemorative({
    year: 2013,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2013/comm_2013_Vatican.jpg',
  }),
  commemorative({
    year: 2013,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2013/comm_2013_Vatican_Rio.jpg',
    index: 1,
  }),
];

const mixed2014 = [
  commemorative({
    year: 2014,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2014/comm_2014_Vatican.jpg',
  }),
  regular({
    year: 2014,
    denomination: '2euro',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/va/Vaticano_2euro_2016.jpg',
  }),
  regular({
    year: 2014,
    denomination: '1euro',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/va/Vatican_1euro_2016.jpg',
  }),
  regular({
    year: 2014,
    denomination: '50cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/va/Vatican_50cent_2016.jpg',
  }),
  regular({
    year: 2014,
    denomination: '20cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/va/Vatican_20cent_2016.jpg',
  }),
  regular({
    year: 2014,
    denomination: '10cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/va/Vatican_10cent_2016.jpg',
  }),
  regular({
    year: 2014,
    denomination: '5cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/va/Vatican_5cent_2016.jpg',
  }),
  regular({
    year: 2014,
    denomination: '2cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/va/Vatican_2cent_2016.jpg',
  }),
  regular({
    year: 2014,
    denomination: '1cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/va/Vatican_1cent_2016.jpg',
  }),
];

const commemorative2015 = [
  commemorative({
    year: 2015,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2015/comm_2015_Vatican_City.jpg',
  }),
];

const commemorative2016 = [
  commemorative({
    year: 2016,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2016/comm_2016_vatican_mercy.jpg',
  }),
  commemorative({
    year: 2016,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2016/comm_2016_vatican_guard.jpg',
    index: 1,
  }),
];

const mixed2017 = [
  commemorative({
    year: 2017,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2017/comm_2017_Vatican_Fatima.jpg',
  }),
  commemorative({
    year: 2017,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2017/comm_2017_Vatican_Saint_Peter_Saint_Paul.jpg',
    index: 1,
  }),
  regular({
    year: 2017,
    denomination: '2euro',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/va/Vatican_2euro_2017.jpg',
  }),
  regular({
    year: 2017,
    denomination: '1euro',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/va/Vatican_1euro_2017.jpg',
  }),
  regular({
    year: 2017,
    denomination: '50cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/va/Vatican_50cent_2017.jpg',
  }),
  regular({
    year: 2017,
    denomination: '20cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/va/Vatican_20cent_2017.jpg',
  }),
  regular({
    year: 2017,
    denomination: '10cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/va/Vatican_10cent_2017.jpg',
  }),
  regular({
    year: 2017,
    denomination: '5cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/va/Vatican_5cent_2017.jpg',
  }),
  regular({
    year: 2017,
    denomination: '2cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/va/Vatican_2cent_2017.jpg',
  }),
  regular({
    year: 2017,
    denomination: '1cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/va/Vatican_1cent_2017.jpg',
  }),
];

const commemorative2018 = [
  commemorative({
    year: 2018,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2018/comm_2018_vatican_padrepio.jpg',
  }),
  commemorative({
    year: 2018,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2018/comm_2018_vatican.jpg',
    index: 1,
  }),
];

const commemorative2019 = [
  commemorative({
    year: 2019,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2019/comm_2019_vt_sistine.jpg',
  }),
  commemorative({
    year: 2019,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2019/comm_2019_vc_Vatctyst.jpg',
    index: 1,
  }),
];

const commemorative2020 = [
  commemorative({
    year: 2020,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2020/comm_2020_vc_500raphael_sanzio.jpg',
  }),
];

const commemorative2021 = [
  commemorative({
    year: 2021,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2021/2021_comm1_Vatican-dante_540x540.jpg',
  }),
  commemorative({
    year: 2021,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2021/comm_2021_va_june.jpg',
    index: 1,
  }),
];

const commemorative2023 = [
  commemorative({
    year: 2023,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2023/Vatican_Alessandro_Manzoni1.jpg',
  }),
  commemorative({
    year: 2023,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2023/IMG_0031.jpg',
    index: 1,
  }),
];

const commemorative2022 = [
  commemorative({
    year: 2022,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2022/0407-23r.jpg',
  }),
  commemorative({
    year: 2022,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2022/0408-23r.jpg',
    index: 1,
  }),
];

const commemorative2024 = [
  commemorative({
    year: 2024,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2024/placeholder_coming_soon.jpg',
  }),
  commemorative({
    year: 2024,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2024/IMG_0056-540x540.jpg',
    index: 1,
  }),
];

// ECB has not published distinct images yet; identical placeholder URLs are intentional.
const commemorative2025 = [
  commemorative({
    year: 2025,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2025/placeholder_coming_soon%20(1).jpg',
  }),
  commemorative({
    year: 2025,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2025/placeholder_coming_soon%20(1).jpg',
    index: 1,
  }),
  commemorative({
    year: 2025,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2025/placeholder_coming_soon%20(1).jpg',
    index: 2,
  }),
];

export default [
  ...regular2002,
  ...commemorative2004,
  ...mixed2005,
  ...mixed2006,
  ...commemorative2007,
  ...commemorative2008,
  ...commemorative2009,
  ...commemorative2010,
  ...commemorative2011,
  ...commemorative2012,
  ...commemorative2013,
  ...mixed2014,
  ...commemorative2015,
  ...commemorative2016,
  ...mixed2017,
  ...commemorative2018,
  ...commemorative2019,
  ...commemorative2020,
  ...commemorative2021,
  ...commemorative2022,
  ...commemorative2023,
  ...commemorative2024,
  ...commemorative2025,
];
