import { coinConfigFactory } from '../utils.js';

const { regular, commemorative } = coinConfigFactory('be');

const regular1999 = [
  regular({
    year: 1999,
    denomination: '2euro',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/be/Belgium_2euroAl.jpg',
  }),
  regular({
    year: 1999,
    denomination: '1euro',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/be/Belgium_1euro.jpg',
  }),
  regular({
    year: 1999,
    denomination: '50cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/be/Belgium_50cent_2002.jpg',
  }),
  regular({
    year: 1999,
    denomination: '20cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/be/Belgium_20cent_2002.jpg',
  }),
  regular({
    year: 1999,
    denomination: '10cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/be/Belgium_10cent_1999.jpg',
  }),
  regular({
    year: 1999,
    denomination: '5cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/be/Belgium_5cent_1999.jpg',
  }),
  regular({
    year: 1999,
    denomination: '2cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/be/Belgium_2cent_2000.jpg',
  }),
  regular({
    year: 1999,
    denomination: '1cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/be/Belgium_1cent_2000.jpg',
  }),
];

// ECB image filenames may contain different years (design/asset dates).
// The year field represents the coin issuance year.
const regular2008 = [
  regular({
    year: 2008,
    denomination: '2euro',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/be/Belgium_2euro_2008.jpg',
  }),
  regular({
    year: 2008,
    denomination: '1euro',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/be/Belgium_1euro_2011.jpg',
  }),
  regular({
    year: 2008,
    denomination: '50cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/be/Belgium_50cent_2008.jpg',
  }),
  regular({
    year: 2008,
    denomination: '20cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/be/Belgium_20cent_2009.jpg',
  }),
  regular({
    year: 2008,
    denomination: '10cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/be/Belgium_10cent_2008.jpg',
  }),
  regular({
    year: 2008,
    denomination: '5cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/be/Belgium_5cent_2011.jpg',
  }),
  regular({
    year: 2008,
    denomination: '2cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/be/Belgium_2cent_2013.jpg',
  }),
  regular({
    year: 2008,
    denomination: '1cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/be/Belgium_1cent_2013.jpg',
  }),
  commemorative({
    year: 2008,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2008/comm_2008_Belgium.jpg',
  }),
];

const regular2014 = [
  regular({
    year: 2014,
    denomination: '2euro',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/be/Belgium_2euro_2014ph.jpg',
  }),
  regular({
    year: 2014,
    denomination: '1euro',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/be/Belgium_1euro_2014.jpg',
  }),
  regular({
    year: 2014,
    denomination: '50cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/be/Belgium_50cent_2014.jpg',
  }),
  regular({
    year: 2014,
    denomination: '20cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/be/Belgium_20cent_2014.jpg',
  }),
  regular({
    year: 2014,
    denomination: '10cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/be/Belgium_2014_10cent.jpg',
  }),
  regular({
    year: 2014,
    denomination: '5cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/be/Belgium_5cent_2014.jpg',
  }),
  regular({
    year: 2014,
    denomination: '2cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/be/Belgium_2cent_2014.jpg',
  }),
  regular({
    year: 2014,
    denomination: '1cent',
    url: 'https://www.ecb.europa.eu/euro/coins/common/shared/img/be/Belgium_1cent_2014.jpg',
  }),
  commemorative({
    year: 2014,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2014/comm_2014_Belgium_Cross.jpg',
  }),
  commemorative({
    year: 2014,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2014/comm_2014_Belgium.jpg',
    index: 1,
  }),
];

const commemorative2005 = [
  commemorative({
    year: 2005,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2005/comm_2005_be.jpg',
  }),
];

const commemorative2006 = [
  commemorative({
    year: 2006,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2006/comm_2006_be.jpg',
  }),
];

const commemorative2007 = [
  commemorative({
    year: 2007,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2007/joint_comm_2007_Belgium.jpg',
  }),
];

const commemorative2009 = [
  commemorative({
    year: 2009,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2009/comm_2009_be.jpg',
  }),
  commemorative({
    year: 2009,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2009/joint_comm_2009_Belgium.jpg',
    index: 1,
  }),
];

const commemorative2010 = [
  commemorative({
    year: 2010,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2010/comm_2010_be.jpg',
  }),
];

const commemorative2011 = [
  commemorative({
    year: 2011,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2011/comm_2011_be.jpg',
  }),
];

const commemorative2012 = [
  commemorative({
    year: 2012,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2012/comm_2012_be.jpg',
  }),
  commemorative({
    year: 2012,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2012/joint_comm_2012_Belgium.jpg',
    index: 1,
  }),
];

const commemorative2013 = [
  commemorative({
    year: 2013,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2013/comm_2013_Belgium.jpg',
  }),
];

const commemorative2015 = [
  commemorative({
    year: 2015,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2015/joint_comm_2015_Belgium.jpg',
  }),
  commemorative({
    year: 2015,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2015/comm_2015_Belgium.jpg',
    index: 1,
  }),
];

const commemorative2016 = [
  commemorative({
    year: 2016,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2016/comm_2016_belgium_children.jpg',
  }),
  commemorative({
    year: 2016,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2016/comm_2016_belgium.jpg',
    index: 1,
  }),
];

const commemorative2017 = [
  commemorative({
    year: 2017,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2017/comm_2017_Belgium_Ghent.jpg',
  }),
  commemorative({
    year: 2017,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2017/comm_2017_belgium_liege.jpg',
    index: 1,
  }),
];

const commemorative2018 = [
  commemorative({
    year: 2018,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2018/comm_2018_belgium_esro2bsat.jpg',
  }),
  commemorative({
    year: 2018,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2018/comm_2018_belgium.jpg',
    index: 1,
  }),
];

const commemorative2019 = [
  commemorative({
    year: 2019,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2019/comm_2019_belgium_25anniv_EMI.jpg',
  }),
  commemorative({
    year: 2019,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2019/comm_2019_450anniv_PieterBreugeltheelder.jpg',
    index: 1,
  }),
];

const commemorative2020 = [
  commemorative({
    year: 2020,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2020/comm_2020_be_janvaneyck.jpg',
  }),
  commemorative({
    year: 2020,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2020/comm_2020_be_iyph.jpg',
    index: 1,
  }),
];

const commemorative2021 = [
  commemorative({
    year: 2021,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2021/comm_2021_be_autumn.jpg',
  }),
  commemorative({
    year: 2021,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2021/2021_comm_BelgiumLuxembourg-union_540x540.jpg',
    index: 1,
  }),
];

const commemorative2022 = [
  commemorative({
    year: 2022,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2022/Belgium1.jpg',
  }),
  commemorative({
    year: 2022,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2022/0435-23r.jpg',
    index: 1,
  }),
];

const commemorative2023 = [
  commemorative({
    year: 2023,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2023/coins3.jpg',
  }),
  commemorative({
    year: 2023,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2023/coins6.jpg',
    index: 1,
  }),
];

const commemorative2024 = [
  commemorative({
    year: 2024,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2024/2024_comm_Belgium2.jpg',
  }),
  commemorative({
    year: 2024,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2024/IMG_0032-540x540_2.jpg',
    index: 1,
  }),
];

const commemorative2025 = [
  commemorative({
    year: 2025,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2025/Belgium_540x540.jpg',
  }),
  commemorative({
    year: 2025,
    url: 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2025/Belgium.jpg',
    index: 1,
  }),
];

export default [
  ...regular1999,
  ...commemorative2005,
  ...commemorative2006,
  ...commemorative2007,
  ...regular2008,
  ...commemorative2009,
  ...commemorative2010,
  ...commemorative2011,
  ...commemorative2012,
  ...commemorative2013,
  ...regular2014,
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
