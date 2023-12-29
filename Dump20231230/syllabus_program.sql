-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: syllabus
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `program`
--

DROP TABLE IF EXISTS `program`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `program` (
  `color` int NOT NULL AUTO_INCREMENT,
  `gun` varchar(255) NOT NULL,
  `baslangic` int NOT NULL,
  PRIMARY KEY (`color`),
  UNIQUE KEY `color_UNIQUE` (`color`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `program`
--

LOCK TABLES `program` WRITE;
/*!40000 ALTER TABLE `program` DISABLE KEYS */;
INSERT INTO `program` VALUES (1,'Salı',8),(2,'Perşembe',8),(3,'Pazartesi',8),(4,'Cuma',8),(5,'Çarşamba',8),(6,'Salı',9),(7,'Perşembe',9),(8,'Pazartesi',9),(9,'Cuma',9),(10,'Çarşamba',9),(11,'Salı',10),(12,'Perşembe',10),(13,'Pazartesi',10),(14,'Cuma',10),(15,'Çarşamba',10),(16,'Salı',11),(17,'Perşembe',11),(18,'Pazartesi',11),(19,'Cuma',11),(20,'Çarşamba',11),(21,'Salı',12),(22,'Perşembe',12),(23,'Pazartesi',12),(24,'Cuma',12),(25,'Çarşamba',12),(26,'Salı',13),(27,'Perşembe',13),(28,'Pazartesi',13),(29,'Cuma',13),(30,'Çarşamba',13),(31,'Salı',14),(32,'Perşembe',14),(33,'Pazartesi',14),(34,'Cuma',14),(35,'Çarşamba',14),(36,'Salı',15),(37,'Perşembe',15),(38,'Pazartesi',15),(39,'Cuma',15),(40,'Çarşamba',15),(41,'Salı',16),(42,'Perşembe',16),(43,'Pazartesi',16),(44,'Cuma',16),(45,'Çarşamba',16);
/*!40000 ALTER TABLE `program` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-30  0:56:59
