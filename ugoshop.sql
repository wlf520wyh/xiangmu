/*
Navicat MySQL Data Transfer

Source Server         : h5_1810
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : ugoshop

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-12-29 00:11:02
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for car
-- ----------------------------
DROP TABLE IF EXISTS `car`;
CREATE TABLE `car` (
  `sid` varchar(50) DEFAULT NULL,
  `fid` varchar(50) DEFAULT NULL,
  `sum` varchar(50) DEFAULT NULL,
  `cid` int(10) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`cid`),
  KEY `sid` (`sid`),
  KEY `fid` (`fid`)
) ENGINE=MyISAM AUTO_INCREMENT=70 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of car
-- ----------------------------
INSERT INTO `car` VALUES ('13', '25', '2', '66');
INSERT INTO `car` VALUES ('24', '25', '2', '67');
INSERT INTO `car` VALUES ('12', '25', '1', '68');

-- ----------------------------
-- Table structure for f_user
-- ----------------------------
DROP TABLE IF EXISTS `f_user`;
CREATE TABLE `f_user` (
  `fid` int(10) NOT NULL AUTO_INCREMENT,
  `fname` varchar(50) NOT NULL,
  `fpws` varchar(50) NOT NULL,
  PRIMARY KEY (`fid`)
) ENGINE=MyISAM AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of f_user
-- ----------------------------
INSERT INTO `f_user` VALUES ('25', '1314520', '123456');

-- ----------------------------
-- Table structure for ulist
-- ----------------------------
DROP TABLE IF EXISTS `ulist`;
CREATE TABLE `ulist` (
  `SID` int(10) NOT NULL AUTO_INCREMENT,
  `STAG` varchar(255) DEFAULT NULL,
  `SNAME` varchar(255) DEFAULT NULL,
  `SCON` varchar(255) DEFAULT NULL,
  `PRICE` varchar(255) DEFAULT NULL,
  `URL` varchar(255) DEFAULT NULL,
  `DIAN` varchar(50) NOT NULL,
  PRIMARY KEY (`SID`)
) ENGINE=MyISAM AUTO_INCREMENT=58 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ulist
-- ----------------------------
INSERT INTO `ulist` VALUES ('12', 'PHARMALAB', '新西兰原装进口Pharmalab 亚麻籽麦片家庭组', '新西兰原装进口，原料纯净无污染，食用放心。 2、富含可溶性膳食纤维燕麦β-葡聚糖。 3、所添加的10%亚麻籽，经过工艺处理后，植物中omega-6被完全释放，植物中omega-3被人体完全吸收。', '131400', '../img/goods2', '1');
INSERT INTO `ulist` VALUES ('13', '瑞琪奥兰', '新西兰原装进口瑞琪奥兰麦卢卡蜂蜜UMF10+优享组', '这款蜂蜜是麦卢卡花成熟酿造，保持麦卢卡因子的高效活性，一定要长期坚持食用才有好的效果，刚入门的时候吃5+就好，平时自己吃，还是喜欢吃10+的蜂蜜，口感比较好，价格也是实惠的', '52000', '../img/goods3', '1');
INSERT INTO `ulist` VALUES ('14', '薇美丽朔', '薇美丽朔酵素原液丽人组', '薇美丽朔酵素原液是台湾原产原装进口，主品+赠品共3瓶酵素原液，每瓶300ML，经常食用可以补充身体所需营养。可以直接饮用，也可以用温开水稀释，每天喝1-3次就可以。', '84600', '../img/goods4', '2');
INSERT INTO `ulist` VALUES ('15', '欧乐', '西班牙进口 欧乐草莓果酱340g*3', '草莓果酱，你懂我的意思吧！', '9600', '../img/goods5', '2');
INSERT INTO `ulist` VALUES ('16', 'Go Ahead', 'go ahead果悠萃酸奶涂层饼干礼盒分享组', '鲜果酸奶配小麦，低卡健康之选;浓香酥脆的酸奶外皮和果粒夹心带来全新味蕾体验;独立小包装，随身携带最佳选择;早餐下午茶零食最佳', '6900', '../img/goods6', '1');
INSERT INTO `ulist` VALUES ('22', 'PHARMALAB', '新西兰原装进口Pharmalab 亚麻籽麦片家庭组', '新西兰原装进口，原料纯净无污染，食用放心。 2、富含可溶性膳食纤维燕麦β-葡聚糖。 3、所添加的10%亚麻籽，经过工艺处理后，植物中omega-6被完全释放，植物中omega-3被人体完全吸收。', '62000', '../img/goods2', '1');
INSERT INTO `ulist` VALUES ('23', '瑞琪奥兰', '新西兰原装进口瑞琪奥兰麦卢卡蜂蜜UMF10+优享组', '这款蜂蜜是麦卢卡花成熟酿造，保持麦卢卡因子的高效活性，一定要长期坚持食用才有好的效果，刚入门的时候吃5+就好，平时自己吃，还是喜欢吃10+的蜂蜜，口感比较好，价格也是实惠的', '92000', '../img/goods3', '1');
INSERT INTO `ulist` VALUES ('24', '薇美丽朔', '薇美丽朔酵素原液丽人组', '薇美丽朔酵素原液是台湾原产原装进口，主品+赠品共3瓶酵素原液，每瓶300ML，经常食用可以补充身体所需营养。可以直接饮用，也可以用温开水稀释，每天喝1-3次就可以。', '52000', '../img/goods4', '1');
INSERT INTO `ulist` VALUES ('25', '欧乐', '西班牙进口 欧乐草莓果酱340g*3', '草莓果酱，你懂我的意思吧！', '9900', '../img/goods5', '1');
INSERT INTO `ulist` VALUES ('26', 'Go Ahead', 'go ahead果悠萃酸奶涂层饼干礼盒分享组', '鲜果酸奶配小麦，低卡健康之选;浓香酥脆的酸奶外皮和果粒夹心带来全新味蕾体验;独立小包装，随身携带最佳选择;早餐下午茶零食最佳', '99800', '../img/goods6', '1');
INSERT INTO `ulist` VALUES ('27', 'PHARMALAB', '新西兰原装进口Pharmalab 亚麻籽麦片家庭组', '新西兰原装进口，原料纯净无污染，食用放心。 2、富含可溶性膳食纤维燕麦β-葡聚糖。 3、所添加的10%亚麻籽，经过工艺处理后，植物中omega-6被完全释放，植物中omega-3被人体完全吸收。', '12800', '../img/goods2', '1');
INSERT INTO `ulist` VALUES ('28', '瑞琪奥兰', '新西兰原装进口瑞琪奥兰麦卢卡蜂蜜UMF10+优享组', '这款蜂蜜是麦卢卡花成熟酿造，保持麦卢卡因子的高效活性，一定要长期坚持食用才有好的效果，刚入门的时候吃5+就好，平时自己吃，还是喜欢吃10+的蜂蜜，口感比较好，价格也是实惠的', '9.900', '../img/goods3', '1');
INSERT INTO `ulist` VALUES ('29', '薇美丽朔', '薇美丽朔酵素原液丽人组', '薇美丽朔酵素原液是台湾原产原装进口，主品+赠品共3瓶酵素原液，每瓶300ML，经常食用可以补充身体所需营养。可以直接饮用，也可以用温开水稀释，每天喝1-3次就可以。', '8.900', '../img/goods4', '1');
INSERT INTO `ulist` VALUES ('30', '欧乐', '西班牙进口 欧乐草莓果酱340g*3', '草莓果酱，你懂我的意思吧！', '34700', '../img/goods5', '1');
INSERT INTO `ulist` VALUES ('31', 'Go Ahead', 'go ahead果悠萃酸奶涂层饼干礼盒分享组', '鲜果酸奶配小麦，低卡健康之选;浓香酥脆的酸奶外皮和果粒夹心带来全新味蕾体验;独立小包装，随身携带最佳选择;早餐下午茶零食最佳', '7800', '../img/goods6', '1');
INSERT INTO `ulist` VALUES ('32', 'Go Ahead', 'go ahead果悠萃酸奶涂层饼干礼盒分享组', '鲜果酸奶配小麦，低卡健康之选;浓香酥脆的酸奶外皮和果粒夹心带来全新味蕾体验;独立小包装，随身携带最佳选择;早餐下午茶零食最佳', '71000', '../img/goods6', '1');
INSERT INTO `ulist` VALUES ('33', '欧乐', '西班牙进口 欧乐草莓果酱340g*3', '草莓果酱，你懂我的意思吧！', '34500', '../img/goods5', '1');
INSERT INTO `ulist` VALUES ('34', '瑞琪奥兰', '新西兰原装进口瑞琪奥兰麦卢卡蜂蜜UMF10+优享组', '这款蜂蜜是麦卢卡花成熟酿造，保持麦卢卡因子的高效活性，一定要长期坚持食用才有好的效果，刚入门的时候吃5+就好，平时自己吃，还是喜欢吃10+的蜂蜜，口感比较好，价格也是实惠的', '8100', '../img/goods3', '1');
INSERT INTO `ulist` VALUES ('35', 'PHARMALAB', '新西兰原装进口Pharmalab 亚麻籽麦片家庭组', '新西兰原装进口，原料纯净无污染，食用放心。 2、富含可溶性膳食纤维燕麦β-葡聚糖。 3、所添加的10%亚麻籽，经过工艺处理后，植物中omega-6被完全释放，植物中omega-3被人体完全吸收。', '66600', '../img/goods2', '1');
INSERT INTO `ulist` VALUES ('36', '薇美丽朔', '薇美丽朔酵素原液丽人组', '薇美丽朔酵素原液是台湾原产原装进口，主品+赠品共3瓶酵素原液，每瓶300ML，经常食用可以补充身体所需营养。可以直接饮用，也可以用温开水稀释，每天喝1-3次就可以。', '45600', '../img/goods4', '1');
INSERT INTO `ulist` VALUES ('37', '薇美丽朔', '薇美丽朔酵素原液丽人组', '薇美丽朔酵素原液是台湾原产原装进口，主品+赠品共3瓶酵素原液，每瓶300ML，经常食用可以补充身体所需营养。可以直接饮用，也可以用温开水稀释，每天喝1-3次就可以。', '45600', '../img/goods4', '1');
INSERT INTO `ulist` VALUES ('38', '瑞琪奥兰', '新西兰原装进口瑞琪奥兰麦卢卡蜂蜜UMF10+优享组', '这款蜂蜜是麦卢卡花成熟酿造，保持麦卢卡因子的高效活性，一定要长期坚持食用才有好的效果，刚入门的时候吃5+就好，平时自己吃，还是喜欢吃10+的蜂蜜，口感比较好，价格也是实惠的', '88800', '../img/goods3', '1');
INSERT INTO `ulist` VALUES ('39', '瑞琪奥兰', '新西兰原装进口瑞琪奥兰麦卢卡蜂蜜UMF10+优享组', '这款蜂蜜是麦卢卡花成熟酿造，保持麦卢卡因子的高效活性，一定要长期坚持食用才有好的效果，刚入门的时候吃5+就好，平时自己吃，还是喜欢吃10+的蜂蜜，口感比较好，价格也是实惠的', '88800', '../img/goods3', '1');
INSERT INTO `ulist` VALUES ('40', 'PHARMALAB', '新西兰原装进口Pharmalab 亚麻籽麦片家庭组', '新西兰原装进口，原料纯净无污染，食用放心。 2、富含可溶性膳食纤维燕麦β-葡聚糖。 3、所添加的10%亚麻籽，经过工艺处理后，植物中omega-6被完全释放，植物中omega-3被人体完全吸收。', '29800', '../img/goods2', '1');
INSERT INTO `ulist` VALUES ('41', 'PHARMALAB', '新西兰原装进口Pharmalab 亚麻籽麦片家庭组', '新西兰原装进口，原料纯净无污染，食用放心。 2、富含可溶性膳食纤维燕麦β-葡聚糖。 3、所添加的10%亚麻籽，经过工艺处理后，植物中omega-6被完全释放，植物中omega-3被人体完全吸收。', '29800', '../img/goods2', '1');
INSERT INTO `ulist` VALUES ('42', 'PHARMALAB', '新西兰原装进口Pharmalab 亚麻籽麦片家庭组', '新西兰原装进口，原料纯净无污染，食用放心。 2、富含可溶性膳食纤维燕麦β-葡聚糖。 3、所添加的10%亚麻籽，经过工艺处理后，植物中omega-6被完全释放，植物中omega-3被人体完全吸收。', '29800', '../img/goods2', '1');
INSERT INTO `ulist` VALUES ('43', 'PHARMALAB', '新西兰原装进口Pharmalab 亚麻籽麦片家庭组', '新西兰原装进口，原料纯净无污染，食用放心。 2、富含可溶性膳食纤维燕麦β-葡聚糖。 3、所添加的10%亚麻籽，经过工艺处理后，植物中omega-6被完全释放，植物中omega-3被人体完全吸收。', '29800', '../img/goods2', '1');
INSERT INTO `ulist` VALUES ('44', 'PHARMALAB', '新西兰原装进口Pharmalab 亚麻籽麦片家庭组', '新西兰原装进口，原料纯净无污染，食用放心。 2、富含可溶性膳食纤维燕麦β-葡聚糖。 3、所添加的10%亚麻籽，经过工艺处理后，植物中omega-6被完全释放，植物中omega-3被人体完全吸收。', '29800', '../img/goods2', '1');
INSERT INTO `ulist` VALUES ('45', 'PHARMALAB', '新西兰原装进口Pharmalab 亚麻籽麦片家庭组', '新西兰原装进口，原料纯净无污染，食用放心。 2、富含可溶性膳食纤维燕麦β-葡聚糖。 3、所添加的10%亚麻籽，经过工艺处理后，植物中omega-6被完全释放，植物中omega-3被人体完全吸收。', '29800', '../img/goods2', '1');
INSERT INTO `ulist` VALUES ('46', 'PHARMALAB', '新西兰原装进口Pharmalab 亚麻籽麦片家庭组', '新西兰原装进口，原料纯净无污染，食用放心。 2、富含可溶性膳食纤维燕麦β-葡聚糖。 3、所添加的10%亚麻籽，经过工艺处理后，植物中omega-6被完全释放，植物中omega-3被人体完全吸收。', '29800', '../img/goods2', '1');
INSERT INTO `ulist` VALUES ('47', '薇美丽朔', '薇美丽朔酵素原液丽人组', '薇美丽朔酵素原液是台湾原产原装进口，主品+赠品共3瓶酵素原液，每瓶300ML，经常食用可以补充身体所需营养。可以直接饮用，也可以用温开水稀释，每天喝1-3次就可以。', '56700', '../img/goods4', '1');
INSERT INTO `ulist` VALUES ('48', '薇美丽朔', '薇美丽朔酵素原液丽人组', '薇美丽朔酵素原液是台湾原产原装进口，主品+赠品共3瓶酵素原液，每瓶300ML，经常食用可以补充身体所需营养。可以直接饮用，也可以用温开水稀释，每天喝1-3次就可以。', '45600', '../img/goods4', '1');
INSERT INTO `ulist` VALUES ('49', '薇美丽朔', '薇美丽朔酵素原液丽人组', '薇美丽朔酵素原液是台湾原产原装进口，主品+赠品共3瓶酵素原液，每瓶300ML，经常食用可以补充身体所需营养。可以直接饮用，也可以用温开水稀释，每天喝1-3次就可以。', '4300', '../img/goods4', '1');
INSERT INTO `ulist` VALUES ('50', '薇美丽朔', '薇美丽朔酵素原液丽人组', '薇美丽朔酵素原液是台湾原产原装进口，主品+赠品共3瓶酵素原液，每瓶300ML，经常食用可以补充身体所需营养。可以直接饮用，也可以用温开水稀释，每天喝1-3次就可以。', '8200', '../img/goods4', '1');
INSERT INTO `ulist` VALUES ('51', '欧乐', '西班牙进口 欧乐草莓果酱340g*3', '草莓果酱，你懂我的意思吧！', '34500', '../img/goods5', '1');
INSERT INTO `ulist` VALUES ('52', '欧乐', '西班牙进口 欧乐草莓果酱340g*3', '草莓果酱，你懂我的意思吧！', '85600', '../img/goods5', '1');
INSERT INTO `ulist` VALUES ('53', '欧乐', '西班牙进口 欧乐草莓果酱340g*3', '草莓果酱，你懂我的意思吧！', '92000', '../img/goods5', '1');
INSERT INTO `ulist` VALUES ('54', '欧乐', '西班牙进口 欧乐草莓果酱340g*3', '草莓果酱，你懂我的意思吧！', '34500', '../img/goods5', '1');
INSERT INTO `ulist` VALUES ('55', '欧乐', '西班牙进口 欧乐草莓果酱340g*3', '草莓果酱，你懂我的意思吧！', '72000', '../img/goods5', '1');
INSERT INTO `ulist` VALUES ('56', '薇美丽朔', '薇美丽朔酵素原液丽人组', '薇美丽朔酵素原液是台湾原产原装进口，主品+赠品共3瓶酵素原液，每瓶300ML，经常食用可以补充身体所需营养。可以直接饮用，也可以用温开水稀释，每天喝1-3次就可以。', '82000', '../img/goods4', '1');
SET FOREIGN_KEY_CHECKS=1;
