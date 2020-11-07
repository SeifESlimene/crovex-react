-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jul 10, 2020 at 10:16 PM
-- Server version: 5.7.23
-- PHP Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pjdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `customer_table`
--

DROP TABLE IF EXISTS `customer_table`;
CREATE TABLE IF NOT EXISTS `customer_table` (
  `id` int(11) NOT NULL,
  `first_name` text CHARACTER SET utf8mb4 NOT NULL,
  `last_name` text CHARACTER SET utf8mb4 NOT NULL,
  `email` text CHARACTER SET utf8mb4 NOT NULL,
  `phone` int(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `employees_table`
--

DROP TABLE IF EXISTS `employees_table`;
CREATE TABLE IF NOT EXISTS `employees_table` (
  `id` int(11) NOT NULL,
  `employee` text CHARACTER SET utf8mb4 NOT NULL,
  `email` text CHARACTER SET utf8mb4 NOT NULL,
  `phone` int(11) NOT NULL,
  `position` text CHARACTER SET utf8mb4 NOT NULL,
  `salary` varchar(30) CHARACTER SET utf8mb4 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `machine_table`
--

DROP TABLE IF EXISTS `machine_table`;
CREATE TABLE IF NOT EXISTS `machine_table` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT,
  `brand` varchar(20) CHARACTER SET utf8mb4 NOT NULL,
  `machine_type` varchar(20) CHARACTER SET utf8mb4 NOT NULL,
  `diameter` varchar(20) CHARACTER SET utf8mb4 NOT NULL,
  `gauge` varchar(30) CHARACTER SET utf8mb4 NOT NULL,
  `feeders` varchar(30) CHARACTER SET utf8mb4 NOT NULL,
  `needles` varchar(30) CHARACTER SET utf8mb4 NOT NULL,
  `camtracks` varchar(30) CHARACTER SET utf8mb4 NOT NULL,
  `belt` varchar(30) CHARACTER SET utf8mb4 NOT NULL,
  `machine_nb` varchar(30) CHARACTER SET utf8mb4 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `machine_table`
--

INSERT INTO `machine_table` (`id`, `brand`, `machine_type`, `diameter`, `gauge`, `feeders`, `needles`, `camtracks`, `belt`, `machine_nb`) VALUES
(1, '  Jumberca', '   jersey', '  17', '24', '40', '1360', '5', '  4800/4600', '5'),
(2, '     Jumberca', '     jersey', '  17', '24', '40', '1500', '3', '   4800/4600', '3'),
(4, ' Jumberca', '  jersey', '17', ' 24', '40', ' 1360', '5', '4800/4600', '5'),
(6, 'Jumberca', 'jersey', '17', ' 24', '40', ' 1360', '5', '4800/4600', '5');

-- --------------------------------------------------------

--
-- Table structure for table `order_fabric`
--

DROP TABLE IF EXISTS `order_fabric`;
CREATE TABLE IF NOT EXISTS `order_fabric` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `order_id` text CHARACTER SET utf8mb4 NOT NULL,
  `customer` text CHARACTER SET utf8mb4 NOT NULL,
  `fabric_type` text CHARACTER SET utf8mb4 NOT NULL,
  `machine` int(10) NOT NULL,
  `roll_quantity` int(10) NOT NULL,
  `fabric_weight` int(30) NOT NULL,
  `yarn_lot` int(30) NOT NULL,
  `fabric_color` text CHARACTER SET utf8mb4 NOT NULL,
  `order_date` date NOT NULL,
  `order_price` int(11) NOT NULL,
  `unit_price` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `order_fabric`
--

INSERT INTO `order_fabric` (`id`, `order_id`, `customer`, `fabric_type`, `machine`, `roll_quantity`, `fabric_weight`, `yarn_lot`, `fabric_color`, `order_date`, `order_price`, `unit_price`) VALUES
(1, ' OR-20-001', 'cus1', ' cotton', 23, 31, 300, 1788906, ' white', '2018-11-10', 300, 1500),
(3, ' OR-20-002', ' cus1', ' cotton', 23, 25, 3000, 17889061, ' white', '2020-01-25', 15000, 1000),
(4, '     OR-20-003', 'cus2', '    poly', 18, 27, 420, 17889061, '    black', '2020-01-23', 420000, 1000);

-- --------------------------------------------------------

--
-- Table structure for table `payment_table`
--

DROP TABLE IF EXISTS `payment_table`;
CREATE TABLE IF NOT EXISTS `payment_table` (
  `id` int(11) NOT NULL,
  `payment` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `register_table`
--

DROP TABLE IF EXISTS `register_table`;
CREATE TABLE IF NOT EXISTS `register_table` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` text CHARACTER SET utf8mb4 NOT NULL,
  `email` text CHARACTER SET utf8mb4 NOT NULL,
  `password` text CHARACTER SET utf8mb4 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `register_table`
--

INSERT INTO `register_table` (`id`, `username`, `email`, `password`) VALUES
(1, 'med', ' med_rk@outlook.com', ' 123'),
(2, 'med', ' kacemora@gmail.com', '  123'),
(3, 'med', 'med@gg', '123'),
(4, '    med', '    kacemora@gmail.co', '123');

-- --------------------------------------------------------

--
-- Table structure for table `register_table1`
--

DROP TABLE IF EXISTS `register_table1`;
CREATE TABLE IF NOT EXISTS `register_table1` (
  `username` text CHARACTER SET utf8mb4 NOT NULL,
  `email_login` varchar(30) CHARACTER SET utf8mb4 DEFAULT NULL,
  `password_login` varchar(30) CHARACTER SET utf8mb4 NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `register_table1`
--

INSERT INTO `register_table1` (`username`, `email_login`, `password_login`, `id`) VALUES
('med', ' ', ' 1234', 4),
('med', 'kacemora@gmail.com', ' 123', 6),
('    med', 'med_rk@outlook.com', ' 123   ', 8),
(' med', ' med@g.com', ' 123', 9);

-- --------------------------------------------------------

--
-- Table structure for table `register_table2`
--

DROP TABLE IF EXISTS `register_table2`;
CREATE TABLE IF NOT EXISTS `register_table2` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) CHARACTER SET utf8mb4 NOT NULL,
  `email` varchar(50) CHARACTER SET utf8mb4 NOT NULL,
  `password` varchar(50) CHARACTER SET utf8mb4 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `register_table2`
--

INSERT INTO `register_table2` (`id`, `username`, `email`, `password`) VALUES
(1, '  med', 'med@gg', '  1234'),
(2, 'med', 'med_rk@outlook.com', '123'),
(3, 'med', 'med_rk@outlook.com', '123'),
(4, 'med', 'med_rk@outlook.com', '123'),
(5, 'med', 'med_rk@outlook.com', '123'),
(6, 'med', 'med_rk@outlook.com', '123'),
(7, 'med', 'med_rk@outlook.com', '123'),
(8, 'med', 'med_rk@outlook.com', '123'),
(9, '    med', '  med_rk@outlook.com', '1234'),
(10, '    med', '   kacemora@gmail.com', ' 123'),
(11, '  ', '  med_rk@outlook.com', '  12345');

-- --------------------------------------------------------

--
-- Table structure for table `sparepart_table`
--

DROP TABLE IF EXISTS `sparepart_table`;
CREATE TABLE IF NOT EXISTS `sparepart_table` (
  `brand` varchar(30) CHARACTER SET utf8mb4 NOT NULL,
  `machine_type` varchar(30) CHARACTER SET utf8mb4 NOT NULL,
  `needle1` varchar(30) CHARACTER SET utf8mb4 NOT NULL,
  `needle2` varchar(30) CHARACTER SET utf8mb4 NOT NULL,
  `needle3` varchar(30) CHARACTER SET utf8mb4 NOT NULL,
  `needle4` varchar(30) CHARACTER SET utf8mb4 NOT NULL,
  `sinker` varchar(30) CHARACTER SET utf8mb4 NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sparepart_table`
--

INSERT INTO `sparepart_table` (`brand`, `machine_type`, `needle1`, `needle2`, `needle3`, `needle4`, `sinker`, `id`) VALUES
('Jumberca', 'jersey', ' vota-76.48.50.15', '  ', '  ', '  ', '  ', 1),
('  Jumberca', ' jersey', ' vota-76.48.50.15', ' ', ' ', ' ', ' ', 4);

-- --------------------------------------------------------

--
-- Table structure for table `stock_fabric`
--

DROP TABLE IF EXISTS `stock_fabric`;
CREATE TABLE IF NOT EXISTS `stock_fabric` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `customer` varchar(20) CHARACTER SET utf8mb4 NOT NULL,
  `fabric_type` varchar(20) CHARACTER SET utf8mb4 NOT NULL,
  `machine` int(10) NOT NULL,
  `fabric_weight` int(10) NOT NULL,
  `cut_date` date NOT NULL,
  `fabric_color` varchar(20) CHARACTER SET utf8mb4 NOT NULL,
  `fabric_unit_price` int(10) NOT NULL,
  `yarn_lot` varchar(30) CHARACTER SET utf8mb4 NOT NULL,
  `yarn_count` varchar(10) CHARACTER SET utf8mb4 NOT NULL,
  `gauge` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `stock_fabric`
--

INSERT INTO `stock_fabric` (`id`, `customer`, `fabric_type`, `machine`, `fabric_weight`, `cut_date`, `fabric_color`, `fabric_unit_price`, `yarn_lot`, `yarn_count`, `gauge`) VALUES
(1, '  samir ', '  polyster', 23, 3000, '2020-01-03', '  red', 18000, '1788905', '30/1', 22),
(2, 'cus4', 'cotton', 17, 280, '2020-05-23', 'white', 1000, ' U2A59061', '30/1', 24);

-- --------------------------------------------------------

--
-- Table structure for table `stock_yarn`
--

DROP TABLE IF EXISTS `stock_yarn`;
CREATE TABLE IF NOT EXISTS `stock_yarn` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `customer` text CHARACTER SET utf8mb4 NOT NULL,
  `yarn_type` text CHARACTER SET utf8mb4 NOT NULL,
  `yarn_count` text CHARACTER SET utf8mb4 NOT NULL,
  `yarn_color` text CHARACTER SET utf8mb4 NOT NULL,
  `delivery_date` date NOT NULL,
  `yarn_lot` text CHARACTER SET utf8mb4 NOT NULL,
  `yarn_weight` int(11) NOT NULL,
  `yarn_unit_price` int(11) NOT NULL,
  `action` longblob NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `stock_yarn`
--

INSERT INTO `stock_yarn` (`id`, `customer`, `yarn_type`, `yarn_count`, `yarn_color`, `delivery_date`, `yarn_lot`, `yarn_weight`, `yarn_unit_price`, `action`) VALUES
(14, ' cus1', '   Cotton', '  30/1', '  White', '2020-04-17', '6P360', 1000, 1000, ''),
(15, 'cus3', 'Cotton', '30/1', 'White', '2020-04-03', 'U2A59061', 1000, 1000, ''),
(16, ' cus4', ' Cotton', ' 30/1', ' White', '2020-04-04', 'U2A59061', 1000, 1000, ''),
(18, 'Ali chemli', 'Cotton', '30', 'blue', '2020-07-17', ' 17889061', 2, 3, ''),
(20, 'dfgsdfg', 'dfgfds', 'gdfs', 'dfgdfs', '2020-07-24', 'fdgdf', 2, 2, ''),
(21, 'dfgsdfg', 'dfgfds', 'gdfs', 'dfgdfs', '2020-07-24', 'fdgdf', 2, 2, ''),
(22, 'dsftgdfg', 'fdsgdsfgfds', 'dfsg', 'dfgdfsg', '2020-07-09', 'g', 1, 1, ''),
(23, 'dsftgdfg', 'fdsgdsfgfds', 'dfsg', 'dfgdfsg', '2020-07-09', 'g', 1, 1, '');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
