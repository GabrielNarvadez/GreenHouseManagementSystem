-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 29, 2024 at 08:38 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `greenhouse_dashboard`
--

-- --------------------------------------------------------

--
-- Table structure for table `sensor_data`
--

CREATE TABLE `sensor_data` (
  `id` int(11) NOT NULL,
  `sensor` varchar(50) DEFAULT NULL,
  `output` varchar(50) DEFAULT NULL,
  `parameter` varchar(50) DEFAULT NULL,
  `value` float DEFAULT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sensor_data`
--

INSERT INTO `sensor_data` (`id`, `sensor`, `output`, `parameter`, `value`, `timestamp`) VALUES
(1, 'Temperature Sensor', '', 'Temperature', 24.5, '2024-06-28 19:35:42'),
(2, 'Temperature Sensor', '', 'Temperature', 24.5, '2024-07-01 06:02:21'),
(3, 'Temperature Sensor', '', 'Temperature', 22, '2024-07-01 06:32:53'),
(4, 'tmp11', '', 'Temperature', 22, '2024-07-01 06:34:55'),
(5, 'temp', 'digital', 'Celsius', 25, '2024-10-06 03:01:22'),
(6, 'tds', NULL, 'ppm', 550, '2024-10-06 08:40:55'),
(7, 'tds', NULL, 'ppm', 5000, '2024-10-06 08:47:07'),
(8, 'light_sensor', NULL, 'lm', 200, '2024-10-06 08:53:15'),
(9, 'battery_history', NULL, '%', 80, '2024-10-06 08:57:40'),
(10, 'ph_sensor', NULL, 'pH', 200, '2024-10-06 08:57:59'),
(11, 'temp', 'sensor_output_1', 'celsius', 27.5, '2024-10-14 09:36:59'),
(12, 'temp', 'sensor_output_1', 'celsius', 28.1, '2024-10-14 09:31:59'),
(13, 'temp', 'sensor_output_1', 'celsius', 26.8, '2024-10-14 09:26:59'),
(14, 'temp', 'sensor_output_1', 'celsius', 29, '2024-10-14 09:21:59'),
(15, 'temp', 'sensor_output_1', 'celsius', 27.9, '2024-10-14 09:16:59'),
(16, 'humidity', 'sensor_output_2', 'g/m3', 55.3, '2024-10-14 09:36:59'),
(17, 'humidity', 'sensor_output_2', 'g/m3', 52.6, '2024-10-14 09:31:59'),
(18, 'humidity', 'sensor_output_2', 'g/m3', 57.2, '2024-10-14 09:26:59'),
(19, 'humidity', 'sensor_output_2', 'g/m3', 53.8, '2024-10-14 09:21:59'),
(20, 'humidity', 'sensor_output_2', 'g/m3', 54.9, '2024-10-14 09:16:59'),
(21, 'temp', 'sensor_output_1', 'celsius', 40, '2024-10-14 09:43:01'),
(22, 'temp', 'sensor_output_1', 'celsius', 28.1, '2024-10-14 09:38:01'),
(23, 'temp', 'sensor_output_1', 'celsius', 29.3, '2024-10-14 09:33:01'),
(24, 'humidity', 'sensor_output_2', 'g/m3', 30, '2024-10-14 09:43:01'),
(25, 'humidity', 'sensor_output_2', 'g/m3', 54.8, '2024-10-14 09:38:01'),
(26, 'humidity', 'sensor_output_2', 'g/m3', 56.3, '2024-10-14 09:33:01'),
(27, 'tds', 'sensor_output_3', 'ppm', 500, '2024-10-14 09:43:01'),
(28, 'tds', 'sensor_output_3', 'ppm', 550, '2024-10-14 09:38:01'),
(29, 'tds', 'sensor_output_3', 'ppm', 530, '2024-10-14 09:33:01'),
(30, 'light_sensor', 'sensor_output_4', 'lm', 2000, '2024-10-14 09:43:01'),
(31, 'light_sensor', 'sensor_output_4', 'lm', 1800, '2024-10-14 09:38:01'),
(32, 'light_sensor', 'sensor_output_4', 'lm', 2100, '2024-10-14 09:33:01'),
(33, 'battery_history', 'sensor_output_5', '%', 85.6, '2024-10-14 09:43:01'),
(34, 'battery_history', 'sensor_output_5', '%', 84.9, '2024-10-14 09:38:01'),
(35, 'battery_history', 'sensor_output_5', '%', 83.4, '2024-10-14 09:33:01'),
(36, 'ph_sensor', 'sensor_output_6', 'pH', 7, '2024-10-14 09:43:01'),
(37, 'ph_sensor', 'sensor_output_6', 'pH', 6.8, '2024-10-14 09:38:01'),
(38, 'ph_sensor', 'sensor_output_6', 'pH', 7.1, '2024-10-14 09:33:01'),
(40, 'light_sensor', 'sensor_output_4', 'lm', 2200, '2024-10-22 00:12:34'),
(41, 'light_sensor', 'sensor_output_4', 'lm', 2300, '2024-10-22 00:14:10'),
(42, 'light_sensor', 'sensor_output_4', 'lm', 2400, '2024-10-22 00:16:55'),
(43, 'light_sensor', 'sensor_output_4', 'lm', 2150, '2024-10-22 00:18:44'),
(44, 'light_sensor', 'sensor_output_4', 'lm', 2250, '2024-10-22 00:20:12'),
(45, 'light_sensor', 'sensor_output_4', 'lm', 2350, '2024-10-22 00:22:30'),
(46, 'light_sensor', 'sensor_output_4', 'lm', 2500, '2024-10-22 00:24:45'),
(47, 'light_sensor', 'sensor_output_4', 'lm', 2600, '2024-10-22 00:26:33'),
(48, 'light_sensor', 'sensor_output_4', 'lm', 2450, '2024-10-22 00:28:11'),
(49, 'light_sensor', 'sensor_output_4', 'lm', 2550, '2024-10-22 00:30:59'),
(50, 'light_sensor', 'sensor_output_4', 'lm', 2650, '2024-10-22 00:32:44'),
(51, 'light_sensor', 'sensor_output_4', 'lm', 2750, '2024-10-22 00:34:30'),
(52, 'light_sensor', 'sensor_output_4', 'lm', 2850, '2024-10-22 00:36:01'),
(53, 'light_sensor', 'sensor_output_4', 'lm', 2950, '2024-10-22 00:38:14'),
(54, 'light_sensor', 'sensor_output_4', 'lm', 3000, '2024-10-22 00:40:50'),
(55, 'light_sensor', 'sensor_output_4', 'lm', 2100, '2024-10-20 01:15:34'),
(56, 'light_sensor', 'sensor_output_4', 'lm', 2200, '2024-10-19 02:20:10'),
(57, 'light_sensor', 'sensor_output_4', 'lm', 2250, '2024-10-18 03:25:55'),
(58, 'light_sensor', 'sensor_output_4', 'lm', 2300, '2024-10-17 04:30:44'),
(59, 'light_sensor', 'sensor_output_4', 'lm', 2400, '2024-10-16 05:35:12'),
(60, 'light_sensor', 'sensor_output_4', 'lm', 2350, '2024-10-15 06:40:30'),
(61, 'light_sensor', 'sensor_output_4', 'lm', 2500, '2024-10-14 07:45:45'),
(62, 'light_sensor', 'sensor_output_4', 'lm', 2550, '2024-10-13 08:50:33'),
(63, 'light_sensor', 'sensor_output_4', 'lm', 2600, '2024-10-12 09:55:11'),
(64, 'light_sensor', 'sensor_output_4', 'lm', 2650, '2024-10-11 10:00:59'),
(65, 'light_sensor', 'sensor_output_4', 'lm', 2700, '2024-10-10 11:05:44'),
(66, 'light_sensor', 'sensor_output_4', 'lm', 2750, '2024-10-09 12:10:30'),
(67, 'light_sensor', 'sensor_output_4', 'lm', 2800, '2024-10-08 13:15:01'),
(68, 'light_sensor', 'sensor_output_4', 'lm', 2900, '2024-10-07 14:20:14'),
(69, 'light_sensor', 'sensor_output_4', 'lm', 3000, '2024-10-06 15:25:50'),
(70, 'ph_sensor', 'sensor_output_6', 'pH', 2186, '2024-10-01 00:30:00'),
(71, 'ph_sensor', 'sensor_output_6', 'pH', 1842, '2024-10-02 01:15:00'),
(72, 'ph_sensor', 'sensor_output_6', 'pH', 2652, '2024-10-03 02:20:00'),
(73, 'ph_sensor', 'sensor_output_6', 'pH', 2135, '2024-10-04 03:10:00'),
(74, 'ph_sensor', 'sensor_output_6', 'pH', 2719, '2024-10-04 23:45:00'),
(75, 'ph_sensor', 'sensor_output_6', 'pH', 1590, '2024-10-06 01:50:00'),
(76, 'ph_sensor', 'sensor_output_6', 'pH', 2592, '2024-10-07 00:35:00'),
(77, 'ph_sensor', 'sensor_output_6', 'pH', 2591, '2024-10-07 23:55:00'),
(78, 'ph_sensor', 'sensor_output_6', 'pH', 2378, '2024-10-09 01:40:00'),
(79, 'ph_sensor', 'sensor_output_6', 'pH', 1315, '2024-10-10 00:25:00'),
(80, 'ph_sensor', 'sensor_output_6', 'pH', 2244, '2024-10-11 02:15:00'),
(81, 'ph_sensor', 'sensor_output_6', 'pH', 1676, '2024-10-12 03:00:00'),
(82, 'ph_sensor', 'sensor_output_6', 'pH', 1646, '2024-10-13 01:45:00'),
(83, 'ph_sensor', 'sensor_output_6', 'pH', 401, '2024-10-14 00:55:00'),
(84, 'ph_sensor', 'sensor_output_6', 'pH', 2666, '2024-10-15 02:05:00'),
(85, 'ph_sensor', 'sensor_output_6', 'pH', 930, '2024-10-16 01:20:00'),
(86, 'ph_sensor', 'sensor_output_6', 'pH', 2251, '2024-10-17 02:50:00'),
(87, 'ph_sensor', 'sensor_output_6', 'pH', 65, '2024-10-18 00:45:00'),
(88, 'ph_sensor', 'sensor_output_6', 'pH', 1971, '2024-10-19 01:30:00'),
(89, 'ph_sensor', 'sensor_output_6', 'pH', 1261, '2024-10-20 03:15:00'),
(90, 'tds_sensor', 'sensor_output_2', 'ppm', 392, '2024-10-01 00:30:00'),
(91, 'tds_sensor', 'sensor_output_2', 'ppm', 977, '2024-10-02 01:15:00'),
(92, 'tds_sensor', 'sensor_output_2', 'ppm', 909, '2024-10-03 02:20:00'),
(93, 'tds_sensor', 'sensor_output_2', 'ppm', 1613, '2024-10-04 03:10:00'),
(94, 'tds_sensor', 'sensor_output_2', 'ppm', 2540, '2024-10-04 23:45:00'),
(95, 'tds_sensor', 'sensor_output_2', 'ppm', 2260, '2024-10-06 01:50:00'),
(96, 'tds_sensor', 'sensor_output_2', 'ppm', 882, '2024-10-07 00:35:00'),
(97, 'tds_sensor', 'sensor_output_2', 'ppm', 429, '2024-10-07 23:55:00'),
(98, 'tds_sensor', 'sensor_output_2', 'ppm', 2298, '2024-10-09 01:40:00'),
(99, 'tds_sensor', 'sensor_output_2', 'ppm', 1805, '2024-10-10 00:25:00'),
(100, 'tds_sensor', 'sensor_output_2', 'ppm', 2131, '2024-10-11 02:15:00'),
(101, 'tds_sensor', 'sensor_output_2', 'ppm', 2438, '2024-10-12 03:00:00'),
(102, 'tds_sensor', 'sensor_output_2', 'ppm', 199, '2024-10-13 01:45:00'),
(103, 'tds_sensor', 'sensor_output_2', 'ppm', 2081, '2024-10-14 00:55:00'),
(104, 'tds_sensor', 'sensor_output_2', 'ppm', 1408, '2024-10-15 02:05:00'),
(105, 'tds_sensor', 'sensor_output_2', 'ppm', 796, '2024-10-16 01:20:00'),
(106, 'tds_sensor', 'sensor_output_2', 'ppm', 2556, '2024-10-17 02:50:00'),
(107, 'tds_sensor', 'sensor_output_2', 'ppm', 1992, '2024-10-18 00:45:00'),
(108, 'tds_sensor', 'sensor_output_2', 'ppm', 2293, '2024-10-19 01:30:00'),
(109, 'tds_sensor', 'sensor_output_2', 'ppm', 2687, '2024-10-20 03:15:00'),
(110, 'temp', 'sensor_output_1', 'celsius', 26.7, '2024-06-30 16:00:00'),
(111, 'temp', 'sensor_output_1', 'celsius', 28.9, '2024-07-01 16:00:00'),
(112, 'temp', 'sensor_output_1', 'celsius', 24.2, '2024-07-02 16:00:00'),
(113, 'temp', 'sensor_output_1', 'celsius', 24.3, '2024-07-03 16:00:00'),
(114, 'temp', 'sensor_output_1', 'celsius', 28.8, '2024-07-04 16:00:00'),
(115, 'temp', 'sensor_output_1', 'celsius', 21.3, '2024-07-05 16:00:00'),
(116, 'temp', 'sensor_output_1', 'celsius', 29.9, '2024-07-06 16:00:00'),
(117, 'temp', 'sensor_output_1', 'celsius', 25.7, '2024-07-07 16:00:00'),
(118, 'temp', 'sensor_output_1', 'celsius', 29, '2024-07-08 16:00:00'),
(119, 'temp', 'sensor_output_1', 'celsius', 27.6, '2024-07-09 16:00:00'),
(120, 'temp', 'sensor_output_1', 'celsius', 21, '2024-07-10 16:00:00'),
(121, 'temp', 'sensor_output_1', 'celsius', 22.2, '2024-07-11 16:00:00'),
(122, 'temp', 'sensor_output_1', 'celsius', 28.2, '2024-07-12 16:00:00'),
(123, 'temp', 'sensor_output_1', 'celsius', 24.3, '2024-07-13 16:00:00'),
(124, 'temp', 'sensor_output_1', 'celsius', 27, '2024-07-14 16:00:00'),
(125, 'temp', 'sensor_output_1', 'celsius', 22.2, '2024-07-15 16:00:00'),
(126, 'temp', 'sensor_output_1', 'celsius', 29.7, '2024-07-16 16:00:00'),
(127, 'temp', 'sensor_output_1', 'celsius', 21.9, '2024-07-17 16:00:00'),
(128, 'temp', 'sensor_output_1', 'celsius', 20.5, '2024-07-18 16:00:00'),
(129, 'temp', 'sensor_output_1', 'celsius', 26.7, '2024-07-19 16:00:00'),
(130, 'temp', 'sensor_output_1', 'celsius', 22.1, '2024-07-20 16:00:00'),
(131, 'temp', 'sensor_output_1', 'celsius', 20.3, '2024-07-21 16:00:00'),
(132, 'temp', 'sensor_output_1', 'celsius', 25.2, '2024-07-22 16:00:00'),
(133, 'temp', 'sensor_output_1', 'celsius', 25, '2024-07-23 16:00:00'),
(134, 'temp', 'sensor_output_1', 'celsius', 29.6, '2024-07-24 16:00:00'),
(135, 'temp', 'sensor_output_1', 'celsius', 23.1, '2024-07-25 16:00:00'),
(136, 'temp', 'sensor_output_1', 'celsius', 26.6, '2024-07-26 16:00:00'),
(137, 'temp', 'sensor_output_1', 'celsius', 23.5, '2024-07-27 16:00:00'),
(138, 'temp', 'sensor_output_1', 'celsius', 27.9, '2024-07-28 16:00:00'),
(139, 'temp', 'sensor_output_1', 'celsius', 29, '2024-07-29 16:00:00'),
(140, 'temp', 'sensor_output_1', 'celsius', 21.4, '2024-07-30 16:00:00'),
(141, 'temp', 'sensor_output_1', 'celsius', 29.7, '2024-07-31 16:00:00'),
(142, 'temp', 'sensor_output_1', 'celsius', 24.6, '2024-08-01 16:00:00'),
(143, 'temp', 'sensor_output_1', 'celsius', 24, '2024-08-02 16:00:00'),
(144, 'temp', 'sensor_output_1', 'celsius', 26, '2024-08-03 16:00:00'),
(145, 'temp', 'sensor_output_1', 'celsius', 28, '2024-08-04 16:00:00'),
(146, 'temp', 'sensor_output_1', 'celsius', 22, '2024-08-05 16:00:00'),
(147, 'temp', 'sensor_output_1', 'celsius', 25.9, '2024-08-06 16:00:00'),
(148, 'temp', 'sensor_output_1', 'celsius', 23.4, '2024-08-07 16:00:00'),
(149, 'temp', 'sensor_output_1', 'celsius', 29.3, '2024-08-08 16:00:00'),
(150, 'temp', 'sensor_output_1', 'celsius', 26.4, '2024-08-09 16:00:00'),
(151, 'temp', 'sensor_output_1', 'celsius', 24.2, '2024-08-10 16:00:00'),
(152, 'temp', 'sensor_output_1', 'celsius', 21.6, '2024-08-11 16:00:00'),
(153, 'temp', 'sensor_output_1', 'celsius', 25.3, '2024-08-12 16:00:00'),
(154, 'temp', 'sensor_output_1', 'celsius', 21.7, '2024-08-13 16:00:00'),
(155, 'temp', 'sensor_output_1', 'celsius', 22.8, '2024-08-14 16:00:00'),
(156, 'temp', 'sensor_output_1', 'celsius', 28.8, '2024-08-15 16:00:00'),
(157, 'temp', 'sensor_output_1', 'celsius', 25.8, '2024-08-16 16:00:00'),
(158, 'temp', 'sensor_output_1', 'celsius', 22.4, '2024-08-17 16:00:00'),
(159, 'temp', 'sensor_output_1', 'celsius', 24.7, '2024-08-18 16:00:00'),
(160, 'temp', 'sensor_output_1', 'celsius', 26.3, '2024-08-19 16:00:00'),
(161, 'temp', 'sensor_output_1', 'celsius', 27.5, '2024-08-20 16:00:00'),
(162, 'temp', 'sensor_output_1', 'celsius', 28.5, '2024-08-21 16:00:00'),
(163, 'temp', 'sensor_output_1', 'celsius', 20, '2024-08-22 16:00:00'),
(164, 'temp', 'sensor_output_1', 'celsius', 24.5, '2024-08-23 16:00:00'),
(165, 'temp', 'sensor_output_1', 'celsius', 22.6, '2024-08-24 16:00:00'),
(166, 'temp', 'sensor_output_1', 'celsius', 29.6, '2024-08-25 16:00:00'),
(167, 'temp', 'sensor_output_1', 'celsius', 29.9, '2024-08-26 16:00:00'),
(168, 'temp', 'sensor_output_1', 'celsius', 20.9, '2024-08-27 16:00:00'),
(169, 'temp', 'sensor_output_1', 'celsius', 24.8, '2024-08-28 16:00:00'),
(170, 'temp', 'sensor_output_1', 'celsius', 21.4, '2024-08-29 16:00:00'),
(171, 'temp', 'sensor_output_1', 'celsius', 22.6, '2024-08-30 16:00:00'),
(172, 'temp', 'sensor_output_1', 'celsius', 28.9, '2024-08-31 16:00:00'),
(173, 'temp', 'sensor_output_1', 'celsius', 26.7, '2024-09-01 16:00:00'),
(174, 'temp', 'sensor_output_1', 'celsius', 26.6, '2024-09-02 16:00:00'),
(175, 'temp', 'sensor_output_1', 'celsius', 23, '2024-09-03 16:00:00'),
(176, 'temp', 'sensor_output_1', 'celsius', 25.2, '2024-09-04 16:00:00'),
(177, 'temp', 'sensor_output_1', 'celsius', 27, '2024-09-05 16:00:00'),
(178, 'temp', 'sensor_output_1', 'celsius', 29.4, '2024-09-06 16:00:00'),
(179, 'temp', 'sensor_output_1', 'celsius', 26.2, '2024-09-07 16:00:00'),
(180, 'temp', 'sensor_output_1', 'celsius', 22.6, '2024-09-08 16:00:00'),
(181, 'temp', 'sensor_output_1', 'celsius', 24.6, '2024-09-09 16:00:00'),
(182, 'temp', 'sensor_output_1', 'celsius', 25.2, '2024-09-10 16:00:00'),
(183, 'temp', 'sensor_output_1', 'celsius', 22.1, '2024-09-11 16:00:00'),
(184, 'temp', 'sensor_output_1', 'celsius', 24.9, '2024-09-12 16:00:00'),
(185, 'temp', 'sensor_output_1', 'celsius', 28.2, '2024-09-13 16:00:00'),
(186, 'temp', 'sensor_output_1', 'celsius', 26.2, '2024-09-14 16:00:00'),
(187, 'temp', 'sensor_output_1', 'celsius', 26.4, '2024-09-15 16:00:00'),
(188, 'temp', 'sensor_output_1', 'celsius', 23.5, '2024-09-16 16:00:00'),
(189, 'temp', 'sensor_output_1', 'celsius', 28.4, '2024-09-17 16:00:00'),
(190, 'temp', 'sensor_output_1', 'celsius', 21.2, '2024-09-18 16:00:00'),
(191, 'temp', 'sensor_output_1', 'celsius', 21.1, '2024-09-19 16:00:00'),
(192, 'temp', 'sensor_output_1', 'celsius', 21.8, '2024-09-20 16:00:00'),
(193, 'temp', 'sensor_output_1', 'celsius', 25.6, '2024-09-21 16:00:00'),
(194, 'temp', 'sensor_output_1', 'celsius', 22.7, '2024-09-22 16:00:00'),
(195, 'temp', 'sensor_output_1', 'celsius', 26.6, '2024-09-23 16:00:00'),
(196, 'temp', 'sensor_output_1', 'celsius', 25, '2024-09-24 16:00:00'),
(197, 'temp', 'sensor_output_1', 'celsius', 25.3, '2024-09-25 16:00:00'),
(198, 'temp', 'sensor_output_1', 'celsius', 21.4, '2024-09-26 16:00:00'),
(199, 'temp', 'sensor_output_1', 'celsius', 21, '2024-09-27 16:00:00'),
(200, 'temp', 'sensor_output_1', 'celsius', 21, '2024-09-28 16:00:00'),
(201, 'temp', 'sensor_output_1', 'celsius', 22.1, '2024-09-29 16:00:00'),
(237, 'humidity', 'sensor_output_2', 'g/m3', 54.4, '2024-06-30 16:00:00'),
(238, 'humidity', 'sensor_output_2', 'g/m3', 59.7, '2024-07-01 16:00:00'),
(239, 'humidity', 'sensor_output_2', 'g/m3', 55.1, '2024-07-02 16:00:00'),
(240, 'humidity', 'sensor_output_2', 'g/m3', 56.5, '2024-07-03 16:00:00'),
(241, 'humidity', 'sensor_output_2', 'g/m3', 57.3, '2024-07-04 16:00:00'),
(242, 'humidity', 'sensor_output_2', 'g/m3', 57, '2024-07-05 16:00:00'),
(243, 'humidity', 'sensor_output_2', 'g/m3', 53, '2024-07-06 16:00:00'),
(244, 'humidity', 'sensor_output_2', 'g/m3', 54.1, '2024-07-07 16:00:00'),
(245, 'humidity', 'sensor_output_2', 'g/m3', 51.5, '2024-07-08 16:00:00'),
(246, 'humidity', 'sensor_output_2', 'g/m3', 55.2, '2024-07-09 16:00:00'),
(247, 'humidity', 'sensor_output_2', 'g/m3', 41.6, '2024-07-10 16:00:00'),
(248, 'humidity', 'sensor_output_2', 'g/m3', 42.3, '2024-07-11 16:00:00'),
(249, 'humidity', 'sensor_output_2', 'g/m3', 46.7, '2024-07-12 16:00:00'),
(250, 'humidity', 'sensor_output_2', 'g/m3', 46.7, '2024-07-13 16:00:00'),
(251, 'humidity', 'sensor_output_2', 'g/m3', 53.5, '2024-07-14 16:00:00'),
(252, 'humidity', 'sensor_output_2', 'g/m3', 47.5, '2024-07-15 16:00:00'),
(253, 'humidity', 'sensor_output_2', 'g/m3', 56.8, '2024-07-16 16:00:00'),
(254, 'humidity', 'sensor_output_2', 'g/m3', 41.5, '2024-07-17 16:00:00'),
(255, 'humidity', 'sensor_output_2', 'g/m3', 57.2, '2024-07-18 16:00:00'),
(256, 'humidity', 'sensor_output_2', 'g/m3', 41.3, '2024-07-19 16:00:00'),
(257, 'humidity', 'sensor_output_2', 'g/m3', 55.1, '2024-07-20 16:00:00'),
(258, 'humidity', 'sensor_output_2', 'g/m3', 51.7, '2024-07-21 16:00:00'),
(259, 'humidity', 'sensor_output_2', 'g/m3', 53, '2024-07-22 16:00:00'),
(260, 'humidity', 'sensor_output_2', 'g/m3', 50.1, '2024-07-23 16:00:00'),
(261, 'humidity', 'sensor_output_2', 'g/m3', 51.2, '2024-07-24 16:00:00'),
(262, 'humidity', 'sensor_output_2', 'g/m3', 45.9, '2024-07-25 16:00:00'),
(263, 'humidity', 'sensor_output_2', 'g/m3', 55.8, '2024-07-26 16:00:00'),
(264, 'humidity', 'sensor_output_2', 'g/m3', 41.4, '2024-07-27 16:00:00'),
(265, 'humidity', 'sensor_output_2', 'g/m3', 59.5, '2024-07-28 16:00:00'),
(266, 'humidity', 'sensor_output_2', 'g/m3', 53.1, '2024-07-29 16:00:00'),
(267, 'humidity', 'sensor_output_2', 'g/m3', 47.4, '2024-07-30 16:00:00'),
(268, 'humidity', 'sensor_output_2', 'g/m3', 57.4, '2024-07-31 16:00:00'),
(269, 'humidity', 'sensor_output_2', 'g/m3', 45.1, '2024-08-01 16:00:00'),
(270, 'humidity', 'sensor_output_2', 'g/m3', 53, '2024-08-02 16:00:00'),
(271, 'humidity', 'sensor_output_2', 'g/m3', 49.9, '2024-08-03 16:00:00'),
(272, 'humidity', 'sensor_output_2', 'g/m3', 50.4, '2024-08-04 16:00:00'),
(273, 'humidity', 'sensor_output_2', 'g/m3', 42.3, '2024-08-05 16:00:00'),
(274, 'humidity', 'sensor_output_2', 'g/m3', 40.2, '2024-08-06 16:00:00'),
(275, 'humidity', 'sensor_output_2', 'g/m3', 54.1, '2024-08-07 16:00:00'),
(276, 'humidity', 'sensor_output_2', 'g/m3', 49.9, '2024-08-08 16:00:00'),
(277, 'humidity', 'sensor_output_2', 'g/m3', 47.4, '2024-08-09 16:00:00'),
(278, 'humidity', 'sensor_output_2', 'g/m3', 47.2, '2024-08-10 16:00:00'),
(279, 'humidity', 'sensor_output_2', 'g/m3', 53.6, '2024-08-11 16:00:00'),
(280, 'humidity', 'sensor_output_2', 'g/m3', 46.5, '2024-08-12 16:00:00'),
(281, 'humidity', 'sensor_output_2', 'g/m3', 51.6, '2024-08-13 16:00:00'),
(282, 'humidity', 'sensor_output_2', 'g/m3', 58.6, '2024-08-14 16:00:00'),
(283, 'humidity', 'sensor_output_2', 'g/m3', 58, '2024-08-15 16:00:00'),
(284, 'humidity', 'sensor_output_2', 'g/m3', 54.5, '2024-08-16 16:00:00'),
(285, 'humidity', 'sensor_output_2', 'g/m3', 58.5, '2024-08-17 16:00:00'),
(286, 'humidity', 'sensor_output_2', 'g/m3', 48.9, '2024-08-18 16:00:00'),
(287, 'humidity', 'sensor_output_2', 'g/m3', 48.8, '2024-08-19 16:00:00'),
(288, 'humidity', 'sensor_output_2', 'g/m3', 57.6, '2024-08-20 16:00:00'),
(289, 'humidity', 'sensor_output_2', 'g/m3', 41.5, '2024-08-21 16:00:00'),
(290, 'humidity', 'sensor_output_2', 'g/m3', 54.8, '2024-08-22 16:00:00'),
(291, 'humidity', 'sensor_output_2', 'g/m3', 49.3, '2024-08-23 16:00:00'),
(292, 'humidity', 'sensor_output_2', 'g/m3', 42.3, '2024-08-24 16:00:00'),
(293, 'humidity', 'sensor_output_2', 'g/m3', 43.5, '2024-08-25 16:00:00'),
(294, 'humidity', 'sensor_output_2', 'g/m3', 50.6, '2024-08-26 16:00:00'),
(295, 'humidity', 'sensor_output_2', 'g/m3', 42.7, '2024-08-27 16:00:00'),
(296, 'humidity', 'sensor_output_2', 'g/m3', 41.4, '2024-08-28 16:00:00'),
(297, 'humidity', 'sensor_output_2', 'g/m3', 59.2, '2024-08-29 16:00:00'),
(298, 'humidity', 'sensor_output_2', 'g/m3', 51.7, '2024-08-30 16:00:00'),
(299, 'humidity', 'sensor_output_2', 'g/m3', 40.7, '2024-08-31 16:00:00'),
(300, 'humidity', 'sensor_output_2', 'g/m3', 48.6, '2024-09-01 16:00:00'),
(301, 'humidity', 'sensor_output_2', 'g/m3', 40.8, '2024-09-02 16:00:00'),
(302, 'humidity', 'sensor_output_2', 'g/m3', 58.4, '2024-09-03 16:00:00'),
(303, 'humidity', 'sensor_output_2', 'g/m3', 49.4, '2024-09-04 16:00:00'),
(304, 'humidity', 'sensor_output_2', 'g/m3', 51.8, '2024-09-05 16:00:00'),
(305, 'humidity', 'sensor_output_2', 'g/m3', 50.9, '2024-09-06 16:00:00'),
(306, 'humidity', 'sensor_output_2', 'g/m3', 59.2, '2024-09-07 16:00:00'),
(307, 'humidity', 'sensor_output_2', 'g/m3', 43.1, '2024-09-08 16:00:00'),
(308, 'humidity', 'sensor_output_2', 'g/m3', 57.8, '2024-09-09 16:00:00'),
(309, 'humidity', 'sensor_output_2', 'g/m3', 59.9, '2024-09-10 16:00:00'),
(310, 'humidity', 'sensor_output_2', 'g/m3', 45.8, '2024-09-11 16:00:00'),
(311, 'humidity', 'sensor_output_2', 'g/m3', 49.7, '2024-09-12 16:00:00'),
(312, 'humidity', 'sensor_output_2', 'g/m3', 50.7, '2024-09-13 16:00:00'),
(313, 'humidity', 'sensor_output_2', 'g/m3', 44.8, '2024-09-14 16:00:00'),
(314, 'humidity', 'sensor_output_2', 'g/m3', 51.5, '2024-09-15 16:00:00'),
(315, 'humidity', 'sensor_output_2', 'g/m3', 43.4, '2024-09-16 16:00:00'),
(316, 'humidity', 'sensor_output_2', 'g/m3', 42.5, '2024-09-17 16:00:00'),
(317, 'humidity', 'sensor_output_2', 'g/m3', 42.2, '2024-09-18 16:00:00'),
(318, 'humidity', 'sensor_output_2', 'g/m3', 43.7, '2024-09-19 16:00:00'),
(319, 'humidity', 'sensor_output_2', 'g/m3', 51.9, '2024-09-20 16:00:00'),
(320, 'humidity', 'sensor_output_2', 'g/m3', 48.4, '2024-09-21 16:00:00'),
(321, 'humidity', 'sensor_output_2', 'g/m3', 46.2, '2024-09-22 16:00:00'),
(322, 'humidity', 'sensor_output_2', 'g/m3', 46, '2024-09-23 16:00:00'),
(323, 'humidity', 'sensor_output_2', 'g/m3', 51.4, '2024-09-24 16:00:00'),
(324, 'humidity', 'sensor_output_2', 'g/m3', 58.7, '2024-09-25 16:00:00'),
(325, 'humidity', 'sensor_output_2', 'g/m3', 59.7, '2024-09-26 16:00:00'),
(326, 'humidity', 'sensor_output_2', 'g/m3', 42.1, '2024-09-27 16:00:00'),
(327, 'humidity', 'sensor_output_2', 'g/m3', 51.4, '2024-09-28 16:00:00'),
(328, 'humidity', 'sensor_output_2', 'g/m3', 50.6, '2024-09-29 16:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `system_metrics`
--

CREATE TABLE `system_metrics` (
  `id` int(11) NOT NULL,
  `metric_type` enum('battery_percentage','harvested_power','system_power_consumption','water_pump_consumption','misting_consumption','shade_net_consumption') NOT NULL,
  `metric_value` decimal(10,2) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `system_metrics`
--

INSERT INTO `system_metrics` (`id`, `metric_type`, `metric_value`, `timestamp`) VALUES
(1, 'harvested_power', 85.50, '2024-10-06 04:42:41'),
(2, 'battery_percentage', 22.00, '2024-10-06 02:00:00'),
(3, 'battery_percentage', 73.40, '2024-10-06 02:05:00'),
(4, 'battery_percentage', 72.00, '2024-10-06 02:10:00'),
(5, 'harvested_power', 250.00, '2024-10-06 02:00:00'),
(6, 'harvested_power', 255.50, '2024-10-06 02:05:00'),
(7, 'harvested_power', 260.20, '2024-10-06 02:10:00'),
(8, 'system_power_consumption', 800.50, '2024-10-06 02:00:00'),
(9, 'system_power_consumption', 810.75, '2024-10-06 02:05:00'),
(10, 'system_power_consumption', 820.30, '2024-10-06 02:10:00'),
(11, 'water_pump_consumption', 120.00, '2024-10-06 02:00:00'),
(12, 'water_pump_consumption', 125.50, '2024-10-06 02:05:00'),
(13, 'water_pump_consumption', 130.10, '2024-10-06 02:10:00'),
(14, 'misting_consumption', 60.00, '2024-10-06 02:00:00'),
(15, 'misting_consumption', 62.50, '2024-10-06 02:05:00'),
(16, 'misting_consumption', 63.80, '2024-10-06 02:10:00'),
(17, 'shade_net_consumption', 45.00, '2024-10-06 02:00:00'),
(18, 'shade_net_consumption', 46.25, '2024-10-06 02:05:00'),
(19, 'shade_net_consumption', 47.10, '2024-10-06 02:10:00'),
(20, 'battery_percentage', 100.00, '2024-10-14 07:56:22'),
(21, 'harvested_power', 496.00, '2024-10-22 08:43:00'),
(22, 'harvested_power', 137.95, '2024-10-21 08:43:00'),
(23, 'harvested_power', 101.78, '2024-10-20 08:43:00'),
(24, 'harvested_power', 495.02, '2024-10-19 08:43:00'),
(25, 'harvested_power', 569.75, '2024-10-18 08:43:00'),
(26, 'harvested_power', 263.70, '2024-10-17 08:43:00'),
(27, 'harvested_power', 509.25, '2024-10-16 08:43:00'),
(28, 'harvested_power', 155.17, '2024-10-15 08:43:00'),
(29, 'harvested_power', 148.08, '2024-10-14 08:43:00'),
(30, 'harvested_power', 174.88, '2024-10-13 08:43:00'),
(31, 'harvested_power', 330.17, '2024-10-12 08:43:00'),
(32, 'harvested_power', 526.21, '2024-10-11 08:43:00'),
(33, 'harvested_power', 540.56, '2024-10-10 08:43:00'),
(34, 'harvested_power', 524.15, '2024-10-09 08:43:00'),
(35, 'harvested_power', 399.06, '2024-10-08 08:43:00'),
(36, 'harvested_power', 322.87, '2024-10-07 08:43:00'),
(37, 'harvested_power', 317.14, '2024-10-06 08:43:00'),
(38, 'harvested_power', 517.12, '2024-10-05 08:43:00'),
(39, 'harvested_power', 534.17, '2024-10-04 08:43:00'),
(40, 'harvested_power', 519.50, '2024-10-03 08:43:00'),
(41, 'harvested_power', 164.34, '2024-08-27 08:54:13'),
(42, 'harvested_power', 585.65, '2024-09-03 08:54:13'),
(43, 'harvested_power', 35.21, '2024-09-10 08:54:13'),
(44, 'harvested_power', 219.12, '2024-09-17 08:54:13'),
(45, 'harvested_power', 389.96, '2024-09-24 08:54:13'),
(46, 'harvested_power', 92.45, '2024-10-01 08:54:13'),
(47, 'harvested_power', 492.34, '2024-10-08 08:54:13'),
(48, 'harvested_power', 384.39, '2024-10-15 08:54:13'),
(49, 'system_power_consumption', 370.74, '2024-08-27 08:54:13'),
(50, 'system_power_consumption', 392.76, '2024-09-03 08:54:13'),
(51, 'system_power_consumption', 351.55, '2024-09-10 08:54:13'),
(52, 'system_power_consumption', 79.47, '2024-09-17 08:54:13'),
(53, 'system_power_consumption', 342.70, '2024-09-24 08:54:13'),
(54, 'system_power_consumption', 475.08, '2024-10-01 08:54:13'),
(55, 'system_power_consumption', 347.31, '2024-10-08 08:54:13'),
(56, 'system_power_consumption', 311.31, '2024-10-15 08:54:13'),
(57, 'water_pump_consumption', 5.85, '2024-08-27 08:54:13'),
(58, 'water_pump_consumption', 55.67, '2024-09-03 08:54:13'),
(59, 'water_pump_consumption', 60.79, '2024-09-10 08:54:13'),
(60, 'water_pump_consumption', 136.94, '2024-09-17 08:54:13'),
(61, 'water_pump_consumption', 102.35, '2024-09-24 08:54:13'),
(62, 'water_pump_consumption', 100.90, '2024-10-01 08:54:13'),
(63, 'water_pump_consumption', 197.46, '2024-10-08 08:54:13'),
(64, 'water_pump_consumption', 84.62, '2024-10-15 08:54:13'),
(65, 'misting_consumption', 23.02, '2024-08-27 08:54:13'),
(66, 'misting_consumption', 74.73, '2024-09-03 08:54:13'),
(67, 'misting_consumption', 4.59, '2024-09-10 08:54:13'),
(68, 'misting_consumption', 98.77, '2024-09-17 08:54:13'),
(69, 'misting_consumption', 30.06, '2024-09-24 08:54:13'),
(70, 'misting_consumption', 3.99, '2024-10-01 08:54:13'),
(71, 'misting_consumption', 79.77, '2024-10-08 08:54:13'),
(72, 'misting_consumption', 86.88, '2024-10-15 08:54:13'),
(73, 'shade_net_consumption', 30.05, '2024-08-27 08:54:13'),
(74, 'shade_net_consumption', 76.52, '2024-09-03 08:54:13'),
(75, 'shade_net_consumption', 92.41, '2024-09-10 08:54:13'),
(76, 'shade_net_consumption', 32.52, '2024-09-17 08:54:13'),
(77, 'shade_net_consumption', 85.36, '2024-09-24 08:54:13'),
(78, 'shade_net_consumption', 29.25, '2024-10-01 08:54:13'),
(79, 'shade_net_consumption', 90.14, '2024-10-08 08:54:13'),
(80, 'shade_net_consumption', 62.98, '2024-10-15 08:54:13'),
(81, 'harvested_power', 496.00, '2024-10-22 08:43:00'),
(82, 'system_power_consumption', 753.10, '2024-10-20 02:00:00'),
(83, 'water_pump_consumption', 106.92, '2024-10-21 02:05:00'),
(84, 'misting_consumption', 69.37, '2024-10-22 02:10:00'),
(85, 'shade_net_consumption', 41.50, '2024-10-23 02:00:00'),
(86, 'harvested_power', 368.50, '2024-10-12 02:00:00'),
(87, 'system_power_consumption', 788.20, '2024-10-11 02:00:00'),
(88, 'water_pump_consumption', 108.77, '2024-10-10 02:05:00'),
(89, 'misting_consumption', 53.39, '2024-10-14 02:10:00'),
(90, 'shade_net_consumption', 49.70, '2024-10-16 02:00:00'),
(91, 'harvested_power', 85.50, '2024-10-06 04:42:41'),
(92, 'system_power_consumption', 820.30, '2024-10-06 02:10:00'),
(93, 'water_pump_consumption', 130.10, '2024-10-06 02:10:00'),
(94, 'misting_consumption', 63.80, '2024-10-06 02:10:00'),
(95, 'shade_net_consumption', 47.10, '2024-10-06 02:10:00'),
(96, 'harvested_power', 168.32, '2024-09-27 02:00:00'),
(97, 'system_power_consumption', 739.91, '2024-09-28 02:00:00'),
(98, 'water_pump_consumption', 128.99, '2024-09-29 02:05:00'),
(99, 'misting_consumption', 58.73, '2024-09-30 02:10:00'),
(100, 'shade_net_consumption', 42.84, '2024-10-01 02:00:00'),
(101, 'harvested_power', 121.71, '2024-09-20 02:00:00'),
(102, 'system_power_consumption', 734.60, '2024-09-21 02:00:00'),
(103, 'water_pump_consumption', 104.04, '2024-09-22 02:05:00'),
(104, 'misting_consumption', 61.95, '2024-09-23 02:10:00'),
(105, 'shade_net_consumption', 45.84, '2024-09-24 02:00:00'),
(106, 'harvested_power', 125.11, '2024-09-13 02:00:00'),
(107, 'system_power_consumption', 743.84, '2024-09-14 02:00:00'),
(108, 'water_pump_consumption', 100.23, '2024-09-15 02:05:00'),
(109, 'misting_consumption', 58.14, '2024-09-16 02:10:00'),
(110, 'shade_net_consumption', 40.12, '2024-09-17 02:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `system_status`
--

CREATE TABLE `system_status` (
  `id` int(11) NOT NULL,
  `component` varchar(50) DEFAULT NULL,
  `status` enum('ON','OFF','In Progress') NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `system_status`
--

INSERT INTO `system_status` (`id`, `component`, `status`, `timestamp`) VALUES
(1, NULL, '', '2024-07-01 06:04:40'),
(2, 'water_valve', 'ON', '2024-07-01 06:49:19'),
(3, 'shade_net', '', '2024-10-06 03:24:30'),
(4, 'shade_net', '', '2024-10-06 04:52:36'),
(5, 'shade_net', '', '2024-10-06 04:54:10'),
(6, 'shade_net', '', '2024-10-06 04:54:20'),
(7, 'shade_net', '', '2024-10-06 04:56:19'),
(8, 'shade_net', 'ON', '2024-10-06 05:01:21'),
(9, 'shade_net', 'OFF', '2024-10-06 05:01:48'),
(10, 'shade_net', 'OFF', '2024-10-06 05:01:58'),
(11, 'shade_net', 'ON', '2024-10-06 05:19:04'),
(12, 'shade_net', 'OFF', '2024-10-06 05:20:30'),
(13, 'ph_downer', 'OFF', '2024-10-06 05:30:40'),
(14, 'misting_process', 'ON', '2024-10-06 05:31:10'),
(15, 'system_status', 'ON', '2024-10-06 05:31:21');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `sensor_data`
--
ALTER TABLE `sensor_data`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `system_metrics`
--
ALTER TABLE `system_metrics`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `system_status`
--
ALTER TABLE `system_status`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `sensor_data`
--
ALTER TABLE `sensor_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=329;

--
-- AUTO_INCREMENT for table `system_metrics`
--
ALTER TABLE `system_metrics`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=111;

--
-- AUTO_INCREMENT for table `system_status`
--
ALTER TABLE `system_status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
