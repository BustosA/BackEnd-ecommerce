CREATE DATABASE IF NOT EXISTS ecommerce_hardware;

-- Seleccionar la base de datos
USE ecommerce_hardware;

-- Crear la tabla de productos
CREATE TABLE IF NOT EXISTS products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  stock INT NOT NULL,
  category VARCHAR(50) NOT NULL,
  image_url VARCHAR(255)
);

-- Ejemplos de inserción de productos con stock
INSERT INTO products (name, description, price, stock, category, image_url) VALUES
('Intel Core i7-10700K', 'Procesador de 8 núcleos y 16 hilos.', 399.99, 10, 'Procesadores', 'https://http2.mlstatic.com/D_NQ_NP_600668-MLA43003993305_082020-O.webp'),
('AMD Ryzen 5 5600X', 'Procesador de 6 núcleos y 12 hilos.', 299.99, 15, 'Procesadores', 'https://http2.mlstatic.com/D_NQ_NP_806834-MLA44347094824_122020-O.webp'),
('Intel Core i9-11900K', 'Procesador de 8 núcleos y 16 hilos de última generación.', 549.99, 5, 'Procesadores', 'https://http2.mlstatic.com/D_NQ_NP_677183-MLA54812400475_042023-W.webp'),
('AMD Ryzen 9 5950X', 'Procesador de 16 núcleos y 32 hilos para alto rendimiento.', 799.99, 8, 'Procesadores', 'https://http2.mlstatic.com/D_NQ_NP_998316-MLA45171395779_032021-O.webp'),
('Intel Core i5-11600K', 'Procesador de 6 núcleos y 12 hilos para juegos.', 269.99, 20, 'Procesadores', 'https://http2.mlstatic.com/D_NQ_NP_874088-MLA71412071931_082023-O.webp');

INSERT INTO products (name, description, price, stock, category, image_url) VALUES
('ASUS ROG Strix Z590-E Gaming', 'Placa base ATX con chipset Z590.', 299.99, 50, 'Motherboards', 'https://http2.mlstatic.com/D_NQ_NP_769887-MLU54962907736_042023-O.webp'),
('GIGABYTE B450 AORUS Elite', 'Placa base ATX con soporte para procesadores Ryzen.', 129.99, 50, 'Motherboards', 'https://http2.mlstatic.com/D_NQ_NP_845563-MLA47726218462_102021-O.webp'),
('MSI MPG B550 Gaming Edge WiFi', 'Placa base ATX con conectividad WiFi 6.', 189.99, 50, 'Motherboards', 'https://http2.mlstatic.com/D_NQ_NP_800950-MLA51448935512_092022-O.webpi'),
('ASRock B550M-ITX/ac', 'Placa base Mini-ITX con chipset B550.', 159.99, 50, 'Motherboards', 'https://http2.mlstatic.com/D_NQ_NP_873403-MLA43708152302_102020-O.webp'),
('EVGA Z590 FTW WiFi 6', 'Placa base ATX de alta gama con WiFi 6 integrado.', 349.99, 50, 'Motherboards', 'https://http2.mlstatic.com/D_NQ_NP_935004-MLA47191962020_082021-O.webp');

INSERT INTO products (name, description, price, stock, category, image_url) VALUES
('NVIDIA GeForce RTX 3080', 'Tarjeta gráfica de gama alta con 10 GB de memoria GDDR6X.', 699.99, 50, 'Placas de Videos', 'https://http2.mlstatic.com/D_NQ_NP_942095-MLA48655068009_122021-O.webp'),
('AMD Radeon RX 6700 XT', 'Tarjeta gráfica para juegos de alta calidad.', 499.99, 50, 'Placas de Videos', 'https://http2.mlstatic.com/D_NQ_NP_718028-MLA52678578740_122022-O.webp'),
('NVIDIA GeForce GTX 1660 Super', 'Tarjeta gráfica para juegos de gama media.', 249.99, 50, 'Placas de Videos', 'https://http2.mlstatic.com/D_NQ_NP_985068-MLU70795235183_072023-O.webp'),
('ASUS TUF Gaming GeForce RTX 3060', 'Tarjeta gráfica con refrigeración avanzada y diseño resistente.', 429.99, 50, 'Placas de Videos', 'https://http2.mlstatic.com/D_NQ_NP_824032-MLA53332866225_012023-O.webp'),
('MSI Radeon RX 6800 XT Gaming X Trio', 'Tarjeta gráfica con potencia para juegos en 4K.', 799.99, 50, 'Placas de Videos', 'https://http2.mlstatic.com/D_NQ_NP_990156-MLU72748751950_112023-O.webp');

INSERT INTO products (name, description, price, stock, category, image_url) VALUES
('Noctua NH-D15', 'Refrigeración de aire de doble torre con dos ventiladores.', 99.99, 30, 'CPU Coolers', 'https://http2.mlstatic.com/D_NQ_NP_630306-MLA43833462406_102020-O.webp'),
('NZXT Kraken X63', 'Sistema de refrigeración líquida con radiador de 280 mm.', 139.99, 20, 'CPU Coolers', 'https://http2.mlstatic.com/D_NQ_NP_942642-MLA48161395147_112021-O.webp'),
('Corsair H100i RGB Platinum SE', 'Refrigeración líquida con iluminación RGB espectacular.', 159.99, 15, 'CPU Coolers', 'https://http2.mlstatic.com/D_NQ_NP_649515-MLA49403664297_032022-O.webp'),
('be quiet! Dark Rock Pro 4', 'Disipador de calor masivo para un rendimiento silencioso.', 89.99, 25, 'CPU Coolers', 'https://http2.mlstatic.com/D_NQ_NP_890905-MLA70883682859_082023-O.webp'),
('Cooler Master Hyper 212 RGB', 'Refrigeración de aire asequible con iluminación RGB.', 49.99, 40, 'CPU Coolers', 'https://http2.mlstatic.com/D_NQ_NP_675967-MLA47091783985_082021-O.webp');

INSERT INTO products (name, description, price, stock, category, image_url) VALUES
('EVGA SuperNOVA 750 G5', 'Fuente de alimentación totalmente modular con certificación Gold.', 109.99, 35, 'Fuentes de Alimentación', 'https://http2.mlstatic.com/D_NQ_NP_974956-MLA45981078162_052021-O.webp'),
('Corsair RM850x', 'Fuente de alimentación silenciosa y eficiente con certificación Gold.', 129.99, 50, 'Fuentes de Alimentación', 'https://http2.mlstatic.com/D_NQ_NP_639976-MLA45772593351_042021-O.webp'),
('Seasonic Focus GX-650', 'Fuente de alimentación con diseño compacto y eficiencia energética.', 89.99, 30, 'Fuentes de Alimentación', 'https://http2.mlstatic.com/D_NQ_NP_845607-MLA45975812547_052021-O.webp'),
('Thermaltake Toughpower GF1 750W', 'Fuente de alimentación con iluminación RGB y certificación Gold.', 119.99, 45, 'Fuentes de Alimentación', 'https://http2.mlstatic.com/D_NQ_NP_693817-MLU72603796381_102023-O.webp'),
('NZXT C850', 'Fuente de alimentación modular con diseño elegante y eficiencia energética.', 139.99, 20, 'Fuentes de Alimentación', 'https://http2.mlstatic.com/D_NQ_NP_652244-MLA72707346119_112023-O.webp');

INSERT INTO products (name, description, price, stock, category, image_url) VALUES
('Corsair Vengeance LPX 16GB', 'DDR4, 3200MHz, CL16, módulo único', 89.99, 25, 'Memorias RAM', 'https://http2.mlstatic.com/D_NQ_NP_630067-MLA48282016548_112021-O.webp'),
('G.SKILL Ripjaws V Series 32GB', 'DDR4, 3600MHz, CL16, kit de 2 módulos', 149.99, 20, 'Memorias RAM', 'https://http2.mlstatic.com/D_NQ_NP_610239-MLA41811019303_052020-O.webp'),
('Crucial Ballistix 8GB', 'DDR4, 3200MHz, CL16, módulo único', 49.99, 30, 'Memorias RAM', 'https://http2.mlstatic.com/D_NQ_NP_812599-MLU72570326130_112023-O.webp'),
('Kingston HyperX Fury 16GB', 'DDR4, 2666MHz, CL16, módulo único', 79.99, 35, 'Memorias RAM', 'https://http2.mlstatic.com/D_NQ_NP_641010-MLA71766833487_092023-O.webp'),
('Team T-FORCE VULCAN Z 32GB', 'DDR4, 3000MHz, CL16, kit de 2 módulos', 129.99, 15, 'Memorias RAM', 'https://http2.mlstatic.com/D_NQ_NP_851647-MLA70461173143_072023-O.webp');


-- Mostrar la estructura de la tabla de productos
DESCRIBE products;
