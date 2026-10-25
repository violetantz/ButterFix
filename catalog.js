const pcCatalogComplete = {
    // -------------------------------------------------------------------------
    // 1. CARTES GRAPHIQUES (GPU)
    // -------------------------------------------------------------------------
    gpus: [
        // --- NVIDIA GTX / RTX SÉRIES 10, 20, 30, 40, 50 ---
        { id: "gpu_gtx1650", brand: "Nvidia", model: "GeForce GTX 1650 4GB", price: 150, power: 75, type: "GPU" },
        { id: "gpu_gtx1650s", brand: "Nvidia", model: "GeForce GTX 1650 Super 4GB", price: 170, power: 100, type: "GPU" },
        { id: "gpu_gtx1660", brand: "Nvidia", model: "GeForce GTX 1660 6GB", price: 190, power: 120, type: "GPU" },
        { id: "gpu_gtx1660s", brand: "Nvidia", model: "GeForce GTX 1660 Super 6GB", price: 210, power: 125, type: "GPU" },
        { id: "gpu_gtx1660ti", brand: "Nvidia", model: "GeForce GTX 1660 Ti 6GB", price: 230, power: 120, type: "GPU" },
        
        { id: "gpu_rtx2060", brand: "Nvidia", model: "GeForce RTX 2060 6GB", price: 240, power: 160, type: "GPU" },
        { id: "gpu_rtx2060s", brand: "Nvidia", model: "GeForce RTX 2060 Super 8GB", price: 270, power: 175, type: "GPU" },
        { id: "gpu_rtx2070", brand: "Nvidia", model: "GeForce RTX 2070 8GB", price: 300, power: 175, type: "GPU" },
        { id: "gpu_rtx2070s", brand: "Nvidia", model: "GeForce RTX 2070 Super 8GB", price: 330, power: 215, type: "GPU" },
        { id: "gpu_rtx2080", brand: "Nvidia", model: "GeForce RTX 2080 8GB", price: 360, power: 215, type: "GPU" },
        { id: "gpu_rtx2080ti", brand: "Nvidia", model: "GeForce RTX 2080 Ti 11GB", price: 450, power: 250, type: "GPU" },

        { id: "gpu_rtx3060", brand: "Nvidia", model: "GeForce RTX 3060 12GB", price: 290, power: 170, type: "GPU" },
        { id: "gpu_rtx3060ti", brand: "Nvidia", model: "GeForce RTX 3060 Ti 8GB", price: 340, power: 200, type: "GPU" },
        { id: "gpu_rtx3070", brand: "Nvidia", model: "GeForce RTX 3070 8GB", price: 380, power: 220, type: "GPU" },
        { id: "gpu_rtx3070ti", brand: "Nvidia", model: "GeForce RTX 3070 Ti 8GB", price: 420, power: 290, type: "GPU" },
        { id: "gpu_rtx3080", brand: "Nvidia", model: "GeForce RTX 3080 10GB", price: 520, power: 320, type: "GPU" },
        { id: "gpu_rtx3080ti", brand: "Nvidia", model: "GeForce RTX 3080 Ti 12GB", price: 650, power: 350, type: "GPU" },
        { id: "gpu_rtx3090", brand: "Nvidia", model: "GeForce RTX 3090 24GB", price: 850, power: 350, type: "GPU" },

        { id: "gpu_rtx4060", brand: "Nvidia", model: "GeForce RTX 4060 8GB", price: 330, power: 115, type: "GPU" },
        { id: "gpu_rtx4060ti", brand: "Nvidia", model: "GeForce RTX 4060 Ti 8GB/16GB", price: 410, power: 160, type: "GPU" },
        { id: "gpu_rtx4070", brand: "Nvidia", model: "GeForce RTX 4070 12GB", price: 580, power: 200, type: "GPU" },
        { id: "gpu_rtx4070super", brand: "Nvidia", model: "GeForce RTX 4070 Super 12GB", price: 650, power: 220, type: "GPU" },
        { id: "gpu_rtx4070tis", brand: "Nvidia", model: "GeForce RTX 4070 Ti Super 16GB", price: 830, power: 285, type: "GPU" },
        { id: "gpu_rtx4080", brand: "Nvidia", model: "GeForce RTX 4080 16GB", price: 950, power: 320, type: "GPU" },
        { id: "gpu_rtx4080super", brand: "Nvidia", model: "GeForce RTX 4080 Super 16GB", price: 1050, power: 320, type: "GPU" },
        { id: "gpu_rtx4090", brand: "Nvidia", model: "GeForce RTX 4090 24GB", price: 1850, power: 450, type: "GPU" },

        { id: "gpu_rtx5050", brand: "Nvidia", model: "GeForce RTX 5050 8GB", price: 310, power: 130, type: "GPU" },
        { id: "gpu_rtx5060", brand: "Nvidia", model: "GeForce RTX 5060 8GB", price: 390, power: 150, type: "GPU" },
        { id: "gpu_rtx5060ti", brand: "Nvidia", model: "GeForce RTX 5060 Ti 8/16GB", price: 480, power: 180, type: "GPU" },
        { id: "gpu_rtx5070", brand: "Nvidia", model: "GeForce RTX 5070 12GB", price: 720, power: 250, type: "GPU" },
        { id: "gpu_rtx5070ti", brand: "Nvidia", model: "GeForce RTX 5070 Ti 16GB", price: 850, power: 285, type: "GPU" },
        { id: "gpu_rtx5080", brand: "Nvidia", model: "GeForce RTX 5080 16GB", price: 1200, power: 400, type: "GPU" },
        { id: "gpu_rtx5090", brand: "Nvidia", model: "GeForce RTX 5090 32GB", price: 2200, power: 550, type: "GPU" },

        // --- AMD RADEON RX SÉRIES 500, 5000, 6000, 7000, 9000 ---
        { id: "gpu_rx580", brand: "AMD", model: "Radeon RX 580 8GB", price: 120, power: 185, type: "GPU" },
        { id: "gpu_rx590", brand: "AMD", model: "Radeon RX 590 8GB", price: 140, power: 225, type: "GPU" },
        
        { id: "gpu_rx5700", brand: "AMD", model: "Radeon RX 5700 8GB", price: 220, power: 180, type: "GPU" },
        { id: "gpu_rx5700xt", brand: "AMD", model: "Radeon RX 5700 XT 8GB", price: 260, power: 225, type: "GPU" },

        { id: "gpu_rx6600", brand: "AMD", model: "Radeon RX 6600 8GB", price: 210, power: 132, type: "GPU" },
        { id: "gpu_rx6600xt", brand: "AMD", model: "Radeon RX 6600 XT 8GB", price: 240, power: 160, type: "GPU" },
        { id: "gpu_rx6700xt", brand: "AMD", model: "Radeon RX 6700 XT 12GB", price: 340, power: 230, type: "GPU" },
        { id: "gpu_rx6750xt", brand: "AMD", model: "Radeon RX 6750 XT 12GB", price: 370, power: 250, type: "GPU" },
        { id: "gpu_rx6800", brand: "AMD", model: "Radeon RX 6800 16GB", price: 410, power: 250, type: "GPU" },
        { id: "gpu_rx6800xt", brand: "AMD", model: "Radeon RX 6800 XT 16GB", price: 460, power: 300, type: "GPU" },
        { id: "gpu_rx6900xt", brand: "AMD", model: "Radeon RX 6900 XT 16GB", price: 590, power: 300, type: "GPU" },

        { id: "gpu_rx7600", brand: "AMD", model: "Radeon RX 7600 8GB", price: 270, power: 165, type: "GPU" },
        { id: "gpu_rx7700xt", brand: "AMD", model: "Radeon RX 7700 XT 12GB", price: 450, power: 245, type: "GPU" },
        { id: "gpu_rx7800xt", brand: "AMD", model: "Radeon RX 7800 XT 16GB", price: 540, power: 263, type: "GPU" },
        { id: "gpu_rx7900xt", brand: "AMD", model: "Radeon RX 7900 XT 20GB", price: 790, power: 315, type: "GPU" },
        { id: "gpu_rx7900xtx", brand: "AMD", model: "Radeon RX 7900 XTX 24GB", price: 990, power: 355, type: "GPU" },

        { id: "gpu_rx9070", brand: "AMD", model: "Radeon RX 9070 16GB", price: 820, power: 270, type: "GPU" },
        { id: "gpu_rx9070xt", brand: "AMD", model: "Radeon RX 9070 XT 16GB", price: 980, power: 310, type: "GPU" }
    ],

    // -------------------------------------------------------------------------
    // 2. PROCESSEURS (CPU)
    // -------------------------------------------------------------------------
    cpus: [
        // --- INTEL CORE (10e, 11e, 12e, 13e, 14e, Core Ultra) ---
        { id: "cpu_i3_10100f", brand: "Intel", model: "Core i3-10100F (4C/8T)", price: 75, socket: "LGA1200", type: "CPU" },
        { id: "cpu_i5_10400f", brand: "Intel", model: "Core i5-10400F (6C/12T)", price: 100, socket: "LGA1200", type: "CPU" },
        { id: "cpu_i7_10700k", brand: "Intel", model: "Core i7-10700K (8C/16T)", price: 160, socket: "LGA1200", type: "CPU" },
        
        { id: "cpu_i3_12100f", brand: "Intel", model: "Core i3-12100F (4C/8T)", price: 90, socket: "LGA1700", type: "CPU" },
        { id: "cpu_i5_12400f", brand: "Intel", model: "Core i5-12400F (6C/12T)", price: 130, socket: "LGA1700", type: "CPU" },
        { id: "cpu_i5_12600k", brand: "Intel", model: "Core i5-12600K (10C/16T)", price: 180, socket: "LGA1700", type: "CPU" },
        
        { id: "cpu_i3_13100f", brand: "Intel", model: "Core i3-13100F (4C/8T)", price: 110, socket: "LGA1700", type: "CPU" },
        { id: "cpu_i5_13400f", brand: "Intel", model: "Core i5-13400F (10C/16T)", price: 195, socket: "LGA1700", type: "CPU" },
        { id: "cpu_i5_13600k", brand: "Intel", model: "Core i5-13600K (14C/20T)", price: 290, socket: "LGA1700", type: "CPU" },
        { id: "cpu_i7_13700k", brand: "Intel", model: "Core i7-13700K (16C/24T)", price: 370, socket: "LGA1700", type: "CPU" },
        { id: "cpu_i9_13900k", brand: "Intel", model: "Core i9-13900K (24C/32T)", price: 520, socket: "LGA1700", type: "CPU" },

        { id: "cpu_i5_14400f", brand: "Intel", model: "Core i5-14400F (10C/16T)", price: 205, socket: "LGA1700", type: "CPU" },
        { id: "cpu_i5_14600k", brand: "Intel", model: "Core i5-14600K (14C/20T)", price: 310, socket: "LGA1700", type: "CPU" },
        { id: "cpu_i7_14700k", brand: "Intel", model: "Core i7-14700K (20C/28T)", price: 410, socket: "LGA1700", type: "CPU" },
        { id: "cpu_i9_14900k", brand: "Intel", model: "Core i9-14900K (24C/32T)", price: 560, socket: "LGA1700", type: "CPU" },

        { id: "cpu_ultra5_245k", brand: "Intel", model: "Core Ultra 5 245K", price: 330, socket: "LGA1851", type: "CPU" },
        { id: "cpu_ultra7_265k", brand: "Intel", model: "Core Ultra 7 265K", price: 440, socket: "LGA1851", type: "CPU" },
        { id: "cpu_ultra9_285k", brand: "Intel", model: "Core Ultra 9 285K", price: 620, socket: "LGA1851", type: "CPU" },

        // --- AMD RYZEN (Séries 3000, 5000, 7000, 9000 & X3D) ---
        { id: "cpu_r3_3100", brand: "AMD", model: "Ryzen 3 3100 (4C/8T)", price: 70, socket: "AM4", type: "CPU" },
        { id: "cpu_r5_3600", brand: "AMD", model: "Ryzen 5 3600 (6C/12T)", price: 85, socket: "AM4", type: "CPU" },
        { id: "cpu_r7_3700x", brand: "AMD", model: "Ryzen 7 3700X (8C/16T)", price: 130, socket: "AM4", type: "CPU" },

        { id: "cpu_r5_5600", brand: "AMD", model: "Ryzen 5 5600 (6C/12T)", price: 110, socket: "AM4", type: "CPU" },
        { id: "cpu_r5_5600x", brand: "AMD", model: "Ryzen 5 5600X (6C/12T)", price: 135, socket: "AM4", type: "CPU" },
        { id: "cpu_r7_5700x", brand: "AMD", model: "Ryzen 7 5700X (8C/16T)", price: 170, socket: "AM4", type: "CPU" },
        { id: "cpu_r7_5800x3d", brand: "AMD", model: "Ryzen 7 5800X3D (Gaming Legend)", price: 280, socket: "AM4", type: "CPU" },
        { id: "cpu_r9_5950x", brand: "AMD", model: "Ryzen 9 5950X (16C/32T)", price: 390, socket: "AM4", type: "CPU" },

        { id: "cpu_r5_7600", brand: "AMD", model: "Ryzen 5 7600 (6C/12T)", price: 190, socket: "AM5", type: "CPU" },
        { id: "cpu_r5_7600x", brand: "AMD", model: "Ryzen 5 7600X (6C/12T)", price: 210, socket: "AM5", type: "CPU" },
        { id: "cpu_r7_7700x", brand: "AMD", model: "Ryzen 7 7700X (8C/16T)", price: 310, socket: "AM5", type: "CPU" },
        { id: "cpu_r7_7800x3d", brand: "AMD", model: "Ryzen 7 7800X3D (Le Roi du Gaming)", price: 420, socket: "AM5", type: "CPU" },
        { id: "cpu_r9_7900x", brand: "AMD", model: "Ryzen 9 7900X (12C/24T)", price: 430, socket: "AM5", type: "CPU" },
        { id: "cpu_r9_7950x", brand: "AMD", model: "Ryzen 9 7950X (16C/32T)", price: 540, socket: "AM5", type: "CPU" },

        { id: "cpu_r5_9600x", brand: "AMD", model: "Ryzen 5 9600X (Zen 5)", price: 270, socket: "AM5", type: "CPU" },
        { id: "cpu_r7_9700x", brand: "AMD", model: "Ryzen 7 9700X (Zen 5)", price: 360, socket: "AM5", type: "CPU" },
        { id: "cpu_r7_9800x3d", brand: "AMD", model: "Ryzen 7 9800X3D (Zen 5 Gaming)", price: 490, socket: "AM5", type: "CPU" },
        { id: "cpu_r9_9950x", brand: "AMD", model: "Ryzen 9 9950X (Zen 5 Ultimate)", price: 680, socket: "AM5", type: "CPU" }
    ],

    // -------------------------------------------------------------------------
    // 3. MÉMOIRE RAM (DDR4 & DDR5)
    // -------------------------------------------------------------------------
    rams: [
        { id: "ram_8gb_2666", brand: "Generic", model: "8GB (1x8) DDR4 2666MHz", price: 25, type: "RAM" },
        { id: "ram_16gb_2666", brand: "Corsair", model: "16GB (2x8) DDR4 2666MHz", price: 45, type: "RAM" },
        { id: "ram_16gb_3200", brand: "Corsair Vengeance", model: "16GB (2x8) DDR4 3200MHz", price: 52, type: "RAM" },
        { id: "ram_32gb_3200", brand: "Kingston Fury", model: "32GB (2x16) DDR4 3200MHz", price: 72, type: "RAM" },
        { id: "ram_32gb_3600", brand: "Corsair Vengeance", model: "32GB (2x16) DDR4 3600MHz CL18", price: 79, type: "RAM" },
        
        { id: "ram_16gb_ddr5_5600", brand: "Crucial", model: "16GB (2x8) DDR5 5600MHz", price: 75, type: "RAM" },
        { id: "ram_32gb_ddr5_5600", brand: "Kingston Fury", model: "32GB (2x16) DDR5 5600MHz", price: 110, type: "RAM" },
        { id: "ram_32gb_ddr5_6000", brand: "Corsair Vengeance RGB", model: "32GB (2x16) DDR5 6000MHz CL30", price: 125, type: "RAM" },
        { id: "ram_64gb_ddr5_6000", brand: "G.Skill Trident Z5", model: "64GB (2x32) DDR5 6000MHz CL30", price: 210, type: "RAM" },
        { id: "ram_64gb_ddr5_6400", brand: "Corsair Dominator", model: "64GB (2x32) DDR5 6400MHz CL32", price: 230, type: "RAM" }
    ]
};
