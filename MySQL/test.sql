/*
 Navicat Premium Data Transfer

 Source Server         : MySQL57
 Source Server Type    : MySQL
 Source Server Version : 50731
 Source Host           : localhost:3306
 Source Schema         : test

 Target Server Type    : MySQL
 Target Server Version : 50731
 File Encoding         : 65001

 Date: 05/01/2022 12:15:18
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for dept
-- ----------------------------
DROP TABLE IF EXISTS `dept`;
CREATE TABLE `dept` (
  `deptno` int(11) NOT NULL,
  `dname` varchar(50) DEFAULT NULL,
  `loc` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`deptno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dept
-- ----------------------------
BEGIN;
INSERT INTO `dept` VALUES (10, '教研部', '北京');
INSERT INTO `dept` VALUES (20, '学工部', '上海');
INSERT INTO `dept` VALUES (30, '销售部', '广州');
INSERT INTO `dept` VALUES (40, '财务部', '武汉');
COMMIT;

-- ----------------------------
-- Table structure for emp
-- ----------------------------
DROP TABLE IF EXISTS `emp`;
CREATE TABLE `emp` (
  `empno` int(11) NOT NULL,
  `ename` varchar(50) DEFAULT NULL,
  `job` varchar(50) DEFAULT NULL,
  `mgr` int(11) DEFAULT NULL,
  `hiredate` date DEFAULT NULL,
  `sal` decimal(7,2) DEFAULT NULL,
  `COMM` decimal(7,2) DEFAULT NULL,
  `deptno` int(11) DEFAULT NULL,
  PRIMARY KEY (`empno`),
  KEY `fk_emp` (`mgr`),
  CONSTRAINT `fk_emp` FOREIGN KEY (`mgr`) REFERENCES `emp` (`empno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of emp
-- ----------------------------
BEGIN;
INSERT INTO `emp` VALUES (1001, '甘宁', '文员', 1013, '2000-12-17', 8000.00, NULL, 20);
INSERT INTO `emp` VALUES (1002, '黛绮丝', '销售员', 1006, '2001-02-20', 16000.00, 3000.00, 30);
INSERT INTO `emp` VALUES (1003, '殷天正', '销售员', 1006, '2001-02-22', 12500.00, 5000.00, 30);
INSERT INTO `emp` VALUES (1004, '刘备', '经理', 1009, '2001-04-02', 29750.00, NULL, 20);
INSERT INTO `emp` VALUES (1005, '谢逊', '销售员', 1006, '2001-09-28', 12500.00, 14000.00, 30);
INSERT INTO `emp` VALUES (1006, '关羽', '经理', 1009, '2001-05-01', 28500.00, NULL, 30);
INSERT INTO `emp` VALUES (1007, '张飞', '经理', 1009, '2001-09-01', 24500.00, NULL, 10);
INSERT INTO `emp` VALUES (1008, '诸葛亮', '分析师', 1004, '2007-04-19', 30000.00, NULL, 20);
INSERT INTO `emp` VALUES (1009, '曾阿牛', '董事长', NULL, '2001-11-17', 50000.00, NULL, 10);
INSERT INTO `emp` VALUES (1010, '韦一笑', '销售员', 1006, '2001-09-08', 15000.00, 0.00, 30);
INSERT INTO `emp` VALUES (1011, '周泰', '文员', 1008, '2007-05-23', 11000.00, NULL, 20);
INSERT INTO `emp` VALUES (1012, '程普', '文员', 1006, '2001-12-03', 9500.00, NULL, 30);
INSERT INTO `emp` VALUES (1013, '庞统', '分析师', 1004, '2001-12-03', 30000.00, NULL, 20);
INSERT INTO `emp` VALUES (1014, '黄盖', '文员', 1007, '2002-01-23', 13000.00, NULL, 10);
COMMIT;

-- ----------------------------
-- Table structure for salgrade
-- ----------------------------
DROP TABLE IF EXISTS `salgrade`;
CREATE TABLE `salgrade` (
  `grade` int(11) NOT NULL,
  `losal` int(11) DEFAULT NULL,
  `hisal` int(11) DEFAULT NULL,
  PRIMARY KEY (`grade`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of salgrade
-- ----------------------------
BEGIN;
INSERT INTO `salgrade` VALUES (1, 7000, 12000);
INSERT INTO `salgrade` VALUES (2, 12010, 14000);
INSERT INTO `salgrade` VALUES (3, 14010, 20000);
INSERT INTO `salgrade` VALUES (4, 20010, 30000);
INSERT INTO `salgrade` VALUES (5, 30010, 99990);
COMMIT;

-- ----------------------------
-- Table structure for sta
-- ----------------------------
DROP TABLE IF EXISTS `sta`;
CREATE TABLE `sta` (
  `year` varchar(255) DEFAULT NULL,
  `month` varchar(255) DEFAULT NULL,
  `amount` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sta
-- ----------------------------
BEGIN;
INSERT INTO `sta` VALUES ('1991', '1', '1.1');
INSERT INTO `sta` VALUES ('1991', '2', '1.2');
INSERT INTO `sta` VALUES ('1991', '3', '1.3');
INSERT INTO `sta` VALUES ('1991', '4', '1.4');
INSERT INTO `sta` VALUES ('1992', '1', '2.1');
INSERT INTO `sta` VALUES ('1992', '2', '2.2');
INSERT INTO `sta` VALUES ('1992', '3', '2.3');
INSERT INTO `sta` VALUES ('1992', '4', '2.4');
COMMIT;

-- ----------------------------
-- Table structure for stu
-- ----------------------------
DROP TABLE IF EXISTS `stu`;
CREATE TABLE `stu` (
  `name` varchar(255) DEFAULT NULL,
  `kecheng` varchar(255) DEFAULT NULL,
  `fenshu` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of stu
-- ----------------------------
BEGIN;
INSERT INTO `stu` VALUES ('张三', '语文', '81');
INSERT INTO `stu` VALUES ('张三', '数学', '75');
INSERT INTO `stu` VALUES ('李四', '语文', '76');
INSERT INTO `stu` VALUES ('李四', '数学', '90');
INSERT INTO `stu` VALUES ('王五', '语文', '81');
INSERT INTO `stu` VALUES ('王五', '数学', '100');
INSERT INTO `stu` VALUES ('王五', '英语', '90');
COMMIT;

-- ----------------------------
-- Table structure for stu_score
-- ----------------------------
DROP TABLE IF EXISTS `stu_score`;
CREATE TABLE `stu_score` (
  `自动编号` int(20) NOT NULL AUTO_INCREMENT,
  `学号` int(255) DEFAULT NULL,
  `姓名` varchar(255) DEFAULT NULL,
  `课程编号` varchar(255) DEFAULT NULL,
  `课程名称` varchar(255) DEFAULT NULL,
  `分数` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`自动编号`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of stu_score
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for t_newgood
-- ----------------------------
DROP TABLE IF EXISTS `t_newgood`;
CREATE TABLE `t_newgood` (
  `id` int(11) DEFAULT NULL,
  `good_name` varchar(255) DEFAULT NULL,
  `good_desc` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_newgood
-- ----------------------------
BEGIN;
INSERT INTO `t_newgood` VALUES (NULL, '好', '123', 1.00);
INSERT INTO `t_newgood` VALUES (NULL, '哈', '321', 2.00);
INSERT INTO `t_newgood` VALUES (NULL, '哈', '321', 2.00);
COMMIT;

-- ----------------------------
-- Table structure for t_score
-- ----------------------------
DROP TABLE IF EXISTS `t_score`;
CREATE TABLE `t_score` (
  `name` varchar(20) DEFAULT NULL,
  `Subject` varchar(10) DEFAULT NULL,
  `Fraction` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_score
-- ----------------------------
BEGIN;
INSERT INTO `t_score` VALUES ('王海', '语文', 86);
INSERT INTO `t_score` VALUES ('王海', '数学', 83);
INSERT INTO `t_score` VALUES ('王海', '英语', 93);
INSERT INTO `t_score` VALUES ('陶俊', '语文', 88);
INSERT INTO `t_score` VALUES ('陶俊', '数学', 84);
INSERT INTO `t_score` VALUES ('陶俊', '英语', 94);
INSERT INTO `t_score` VALUES ('刘可', '语文', 80);
INSERT INTO `t_score` VALUES ('刘可', '数学', 86);
INSERT INTO `t_score` VALUES ('刘可', '英语', 88);
INSERT INTO `t_score` VALUES ('李春', '语文', 89);
INSERT INTO `t_score` VALUES ('李春', '数学', 80);
INSERT INTO `t_score` VALUES ('李春', '英语', 87);
COMMIT;

-- ----------------------------
-- Table structure for team
-- ----------------------------
DROP TABLE IF EXISTS `team`;
CREATE TABLE `team` (
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of team
-- ----------------------------
BEGIN;
INSERT INTO `team` VALUES ('a');
INSERT INTO `team` VALUES ('b');
INSERT INTO `team` VALUES ('c');
INSERT INTO `team` VALUES ('d');
COMMIT;

-- ----------------------------
-- Table structure for testdb
-- ----------------------------
DROP TABLE IF EXISTS `testdb`;
CREATE TABLE `testdb` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `AccID` varchar(255) DEFAULT NULL,
  `Occmonth` int(11) DEFAULT NULL,
  `DebitOccur` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of testdb
-- ----------------------------
BEGIN;
INSERT INTO `testdb` VALUES (1, '101', 1, '2');
INSERT INTO `testdb` VALUES (2, '101', 2, '2');
INSERT INTO `testdb` VALUES (3, '101', 3, '2');
INSERT INTO `testdb` VALUES (4, '102', 1, '1');
INSERT INTO `testdb` VALUES (5, '102', 2, '2');
INSERT INTO `testdb` VALUES (6, '102', 3, '3');
INSERT INTO `testdb` VALUES (7, '103', 1, '3');
INSERT INTO `testdb` VALUES (8, '103', 2, '3');
INSERT INTO `testdb` VALUES (9, '103', 3, '3');
COMMIT;

-- ----------------------------
-- Table structure for ttt
-- ----------------------------
DROP TABLE IF EXISTS `ttt`;
CREATE TABLE `ttt` (
  `自动编号` int(255) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`自动编号`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ttt
-- ----------------------------
BEGIN;
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
