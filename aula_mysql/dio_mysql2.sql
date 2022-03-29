-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 17, 2022 at 10:53 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dio_mysql2`
--

-- --------------------------------------------------------

--
-- Table structure for table `canais`
--

CREATE TABLE `canais` (
  `id_canal` int(11) NOT NULL,
  `nome_canal` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `canais`
--

INSERT INTO `canais` (`id_canal`, `nome_canal`) VALUES
(1, 'React'),
(2, 'PHP'),
(3, 'CSS3'),
(4, 'HTML5');

-- --------------------------------------------------------

--
-- Table structure for table `videos`
--

CREATE TABLE `videos` (
  `id_video` int(11) NOT NULL,
  `nome_video` varchar(100) NOT NULL,
  `autor_video` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `videos`
--

INSERT INTO `videos` (`id_video`, `nome_video`, `autor_video`) VALUES
(1, 'Login com React', 'React'),
(2, 'Componentes com React', 'React'),
(3, 'Listas com PHP', 'PHP'),
(4, 'Funções com PHP', 'PHP'),
(5, 'Páginas com HTML', 'HTML');

-- --------------------------------------------------------

--
-- Table structure for table `videos_canais`
--

CREATE TABLE `videos_canais` (
  `id_canais_video` int(11) NOT NULL,
  `fk_canal` int(11) NOT NULL,
  `fk_video` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `videos_canais`
--

INSERT INTO `videos_canais` (`id_canais_video`, `fk_canal`, `fk_video`) VALUES
(1, 2, 4),
(2, 2, 3),
(3, 1, 1),
(4, 1, 2),
(5, 4, 5);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `canais`
--
ALTER TABLE `canais`
  ADD PRIMARY KEY (`id_canal`);

--
-- Indexes for table `videos`
--
ALTER TABLE `videos`
  ADD PRIMARY KEY (`id_video`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `canais`
--
ALTER TABLE `canais`
  MODIFY `id_canal` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `videos`
--
ALTER TABLE `videos`
  MODIFY `id_video` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
