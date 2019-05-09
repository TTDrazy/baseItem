/*
Navicat MySQL Data Transfer

Source Server         : localhost_mysql
Source Server Version : 80015
Source Host           : localhost:3306
Source Database       : schoolinfo

Target Server Type    : MYSQL
Target Server Version : 80015
File Encoding         : 65001

Date: 2019-05-09 17:22:26
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for `teacherinfo`
-- ----------------------------
DROP TABLE IF EXISTS `teacherinfo`;
CREATE TABLE `teacherinfo` (
  `id` varchar(10) NOT NULL,
  `name` varchar(20) NOT NULL,
  `sex` varchar(4) NOT NULL,
  `birthday` datetime DEFAULT NULL,
  `address` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `num` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of teacherinfo
-- ----------------------------
INSERT INTO `teacherinfo` VALUES ('1000', '欧阳宝贝', '女', '1997-01-08 00:00:00', '陕西西安');
INSERT INTO `teacherinfo` VALUES ('1001', '张冰霜', '女', '1996-05-23 00:00:00', '北京');
INSERT INTO `teacherinfo` VALUES ('1003', '唐笑', '女', '1982-11-08 00:00:00', '上海');
INSERT INTO `teacherinfo` VALUES ('1004', '蓝莓', '女', '1992-02-03 00:00:00', '江苏南京');
INSERT INTO `teacherinfo` VALUES ('1005', '于晓梅', '女', '1997-09-17 00:00:00', '湖北武汉');
INSERT INTO `teacherinfo` VALUES ('1006', '徐美丽', '女', '1998-12-08 00:00:00', '上海');
INSERT INTO `teacherinfo` VALUES ('1007', '郭爽', '女', '1996-10-18 00:00:00', '陕西西安');
INSERT INTO `teacherinfo` VALUES ('1008', '曹平', '男', '1991-02-22 00:00:00', '北京市朝阳区');
INSERT INTO `teacherinfo` VALUES ('1009', '李壮', '男', '1993-06-10 00:00:00', '北京市朝阳区');
INSERT INTO `teacherinfo` VALUES ('1010', '张星', '男', '1996-07-13 00:00:00', '陕西西安');
INSERT INTO `teacherinfo` VALUES ('1011', '刘美红', '女', '1991-09-16 00:00:00', '陕西西安');
INSERT INTO `teacherinfo` VALUES ('1012', '王城', '男', '1999-11-09 00:00:00', '北京市朝阳区');
INSERT INTO `teacherinfo` VALUES ('1013', '李东旭', '男', '1995-12-05 00:00:00', '北京市朝阳区');
INSERT INTO `teacherinfo` VALUES ('1014', '王勤学', '男', '1997-08-13 00:00:00', '北京市朝阳区');
