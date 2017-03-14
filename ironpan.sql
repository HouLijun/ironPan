-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2017-03-14 13:22:05
-- 服务器版本： 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `ironpan`
--

-- --------------------------------------------------------

--
-- 表的结构 `admin_user`
--

CREATE TABLE IF NOT EXISTS `admin_user` (
  `id` int(12) NOT NULL AUTO_INCREMENT,
  `account` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `hash` varchar(255) NOT NULL,
  `pw` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- 转存表中的数据 `admin_user`
--

INSERT INTO `admin_user` (`id`, `account`, `password`, `hash`, `pw`) VALUES
(1, 'admin', 'e10adc3949ba59abbe56e057f20f883e', '271f7fcb664f8838c3382c92a86e9ff4', '123456');

-- --------------------------------------------------------

--
-- 表的结构 `banner`
--

CREATE TABLE IF NOT EXISTS `banner` (
  `id` int(12) NOT NULL AUTO_INCREMENT,
  `url` varchar(255) NOT NULL,
  `color` varchar(255) NOT NULL,
  `position` int(12) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- 转存表中的数据 `banner`
--

INSERT INTO `banner` (`id`, `url`, `color`, `position`) VALUES
(1, '/public/images/banner1.png', '#eee', 2),
(2, '/public/images/banner2.png', '#eeeeee', 1);

-- --------------------------------------------------------

--
-- 表的结构 `food_cate`
--

CREATE TABLE IF NOT EXISTS `food_cate` (
  `id` int(12) NOT NULL AUTO_INCREMENT,
  `cName` varchar(255) NOT NULL,
  `eName` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- 转存表中的数据 `food_cate`
--

INSERT INTO `food_cate` (`id`, `cName`, `eName`) VALUES
(1, '铁锅美食', 'Pan food');

-- --------------------------------------------------------

--
-- 表的结构 `food_detail`
--

CREATE TABLE IF NOT EXISTS `food_detail` (
  `id` int(12) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `sources` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `insertTime` datetime(6) NOT NULL,
  `detail` longtext NOT NULL,
  `thumb` varchar(255) NOT NULL,
  `cate_id` int(12) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cate_id` (`cate_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- 表的结构 `news_cate`
--

CREATE TABLE IF NOT EXISTS `news_cate` (
  `id` int(12) NOT NULL AUTO_INCREMENT,
  `cName` varchar(255) NOT NULL,
  `eName` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- 转存表中的数据 `news_cate`
--

INSERT INTO `news_cate` (`id`, `cName`, `eName`) VALUES
(1, '媒体报道', 'Media reports'),
(2, '专家观点', 'Expert opinion'),
(3, '美食活动', 'Gourmet activity'),
(4, '你问我答', 'Latest content');

-- --------------------------------------------------------

--
-- 表的结构 `news_detail`
--

CREATE TABLE IF NOT EXISTS `news_detail` (
  `id` int(12) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `sources` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `insertTime` datetime(6) NOT NULL,
  `detail` longtext NOT NULL,
  `thumb` varchar(255) NOT NULL,
  `cate_id` int(12) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cate_id` (`cate_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- 转存表中的数据 `news_detail`
--

INSERT INTO `news_detail` (`id`, `title`, `sources`, `author`, `insertTime`, `detail`, `thumb`, `cate_id`) VALUES
(1, '炒菜用铁锅最安全', '网络征集', '张萌', '2017-03-05 00:00:00.000000', '用铁锅做饭，会补充人类身体必不可少的铁元素。', '1.png', 1),
(2, '安全可靠', '网络征集', '李彤', '2017-03-05 00:00:00.000000', '铁锅不会出现因为高温而爆裂的情况，对人身安全带来极大的保证。', '1.png', 2);

-- --------------------------------------------------------

--
-- 表的结构 `product_cate`
--

CREATE TABLE IF NOT EXISTS `product_cate` (
  `id` int(12) NOT NULL AUTO_INCREMENT,
  `cName` varchar(255) NOT NULL,
  `eName` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

--
-- 转存表中的数据 `product_cate`
--

INSERT INTO `product_cate` (`id`, `cName`, `eName`) VALUES
(1, '炒锅系列', 'Chinese pan SERIES'),
(2, '煎锅系列', 'FRYING PAN SERIES'),
(3, '烤锅系列', 'Baking pan series'),
(4, '炖锅系列', 'Stew pan series'),
(5, '老式铁锅', 'THE OLD IRON PAN'),
(6, '珐琅铸铁锅', 'ENAMEL IRON PAN');

-- --------------------------------------------------------

--
-- 表的结构 `product_detail`
--

CREATE TABLE IF NOT EXISTS `product_detail` (
  `id` int(12) NOT NULL AUTO_INCREMENT,
  `cName` varchar(255) NOT NULL,
  `eName` varchar(255) NOT NULL,
  `original_price` varchar(255) NOT NULL,
  `current_price` varchar(255) NOT NULL,
  `cn_price` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  `thumb` varchar(255) NOT NULL,
  `label` varchar(255) NOT NULL,
  `detail` longtext NOT NULL,
  `cate_id` int(12) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cate_id` (`cate_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- 转存表中的数据 `product_detail`
--

INSERT INTO `product_detail` (`id`, `cName`, `eName`, `original_price`, `current_price`, `cn_price`, `link`, `thumb`, `label`, `detail`, `cate_id`) VALUES
(2, 'asdasd', 'asdas', 'asd', 'asd', 'q', '1', 'i_5_2071341132x1339914791_21.jpg', 'ds', 'hello', 1);

-- --------------------------------------------------------

--
-- 表的结构 `product_img`
--

CREATE TABLE IF NOT EXISTS `product_img` (
  `id` int(12) NOT NULL AUTO_INCREMENT,
  `img` varchar(255) NOT NULL,
  `position` int(12) NOT NULL,
  `product_id` int(12) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- 表的结构 `upkeep_cate`
--

CREATE TABLE IF NOT EXISTS `upkeep_cate` (
  `id` int(12) NOT NULL AUTO_INCREMENT,
  `cName` varchar(255) NOT NULL,
  `eName` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- 转存表中的数据 `upkeep_cate`
--

INSERT INTO `upkeep_cate` (`id`, `cName`, `eName`) VALUES
(1, '锅具特点', 'Pan characteristic'),
(2, '如何除锈', 'How to bring'),
(3, '如何开锅', 'How to clear'),
(4, '如何防锈', 'How to rust'),
(5, '注意事项', 'Announcements');

-- --------------------------------------------------------

--
-- 表的结构 `upkeep_detail`
--

CREATE TABLE IF NOT EXISTS `upkeep_detail` (
  `id` int(12) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `sources` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `insertTime` datetime(6) NOT NULL,
  `detail` longtext NOT NULL,
  `thumb` varchar(255) NOT NULL,
  `cate_id` int(12) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cate_id` (`cate_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- 转存表中的数据 `upkeep_detail`
--

INSERT INTO `upkeep_detail` (`id`, `title`, `sources`, `author`, `insertTime`, `detail`, `thumb`, `cate_id`) VALUES
(1, '炒菜用铁锅最安全', '网络征集', '张萌', '2017-03-05 00:00:00.000000', '用铁锅做饭，会补充人类身体必不可少的铁元素。', '1.png', 1),
(2, '安全可靠', '网络征集', '李彤', '2017-03-05 00:00:00.000000', '铁锅不会出现因为高温而爆裂的情况，对人身安全带来极大的保证。', '1.png', 2);

-- --------------------------------------------------------

--
-- 表的结构 `video`
--

CREATE TABLE IF NOT EXISTS `video` (
  `id` int(12) NOT NULL AUTO_INCREMENT,
  `url` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=17 ;

--
-- 转存表中的数据 `video`
--

INSERT INTO `video` (`id`, `url`) VALUES
(16, 'http://player.youku.com/player.php/sid/XNzM5MTIyMjIw/v.swf');

--
-- 限制导出的表
--

--
-- 限制表 `food_detail`
--
ALTER TABLE `food_detail`
  ADD CONSTRAINT `food_detail_ibfk_1` FOREIGN KEY (`cate_id`) REFERENCES `food_cate` (`id`);

--
-- 限制表 `news_detail`
--
ALTER TABLE `news_detail`
  ADD CONSTRAINT `news_detail_ibfk_1` FOREIGN KEY (`cate_id`) REFERENCES `news_cate` (`id`);

--
-- 限制表 `product_detail`
--
ALTER TABLE `product_detail`
  ADD CONSTRAINT `product_detail_ibfk_1` FOREIGN KEY (`cate_id`) REFERENCES `product_cate` (`id`);

--
-- 限制表 `product_img`
--
ALTER TABLE `product_img`
  ADD CONSTRAINT `product_img_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product_detail` (`id`);

--
-- 限制表 `upkeep_detail`
--
ALTER TABLE `upkeep_detail`
  ADD CONSTRAINT `upkeep_detail_ibfk_1` FOREIGN KEY (`cate_id`) REFERENCES `upkeep_cate` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
