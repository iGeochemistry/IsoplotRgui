function example(geochronometer,plotdevice){
    switch (geochronometer) {
    case 'U-Pb': return({
	"data": {
            "7/6":    [0.05131,0.05128,0.05131,0.05129,0.05139,
		       0.05134,0.05143,0.05139,0.05140,0.05135],
            "s[7/6]": [0.00004,0.00016,0.00008,0.00009,0.00006,
		       0.00007,0.00011,0.00007,0.00006,0.00004],
            "6/8":    [0.03985,0.03980,0.03978,0.03976,0.03972,
		       0.03971,0.03967,0.03966,0.03974,0.03607],
            "s[6/8]": [0.00004,0.00004,0.00010,0.00005,0.00004,
		       0.00010,0.00004,0.00006,0.00004,0.00005],
            "7/5":    [0.28190,0.28140,0.28140,0.28120,0.28140,
		       0.28110,0.28130,0.28100,0.28160,0.25540],
            "s[7/5]": [0.00036,0.00092,0.00083,0.00061,0.00043,
		       0.00080,0.00067,0.00057,0.00043,0.00041]
	}
    });
    case 'Ar-Ar': 
	switch (plotdevice) {
	    case 'spectrum':
	    return({
		"J":  [0.007608838,0.0000190],
		"data": {
		    "39":       [0.0416012,0.0944759,0.2820416,0.1848611,0.2702872,0.7072563,
				 0.7188705,0.4792595,0.5001037,0.6326591,0.4050682],
		    "39/40":    [0.05035597,0.06314063,
				 0.09736973,0.12364790,0.16331400,0.16636073,0.17342377,
				 0.16882484,0.16810922,0.16112593,0.13930648],
		    "s[39/40]": [0.00007579,0.00007635,
				 0.00010066,0.00012470,0.00013827,0.00009456,0.00008007,
				 0.00010857,0.00009152,0.00014445,0.00012351],
		    "36/40":    [0.00247113,0.00238603,
				 0.00183935,0.00148798,0.00084059,0.00081830,0.00069327,
				 0.00076984,0.00076617,0.00087922,0.00119408],
		    "s[36/40]": [0.00001278,0.00000711,
				 0.00000546,0.00001027,0.00000326,0.00000358,0.00000247,
				 0.00000534,0.00000510,0.00000265,0.00000522],
		    "39/36":    [20.37766953,26.46266599,
				 52.93697092,83.09764683,194.28512356,203.30059638,250.15196844,
				 219.29834304,219.41470909,183.26035451,116.66453524],
		    "s[39/36]": [0.10863816,0.08312922,
				 0.15734247,0.57839869,0.75988506,0.88895174,0.89357971,
				 1.52314302,1.45743969,0.55666518,0.51691077]
		}
	    });
	    default:
	    return({
		"J":  [0.007608838,0.0000190],
		"data": {
		    "39/40":    [0.0631406285,0.097369731,0.1236479027,0.1633139976,0.1663607337,
				 0.1734237678, 0.1688248403,0.1681092192,0.1611259308,0.13930648],
		    "s[39/40]": [0.00007635,0.00010066,0.00012470,0.00013827,0.00009456,
				 0.00008007,0.00010857,0.00009152,0.00014445,0.00012351],
		    "36/40":    [0.00238603,0.00183935,0.00148798,0.00084059,0.00081830,
				 0.00069327,0.00076984,0.00076617,0.00087922,0.00119408],
		    "s[36/40]": [0.00000711,0.00000546,0.00001027,0.00000326,0.00000358,
				 0.00000247,0.00000534,0.00000510,0.00000265,0.00000522],
		    "39/36":    [26.46266599,52.93697092,83.09764683,194.28512356,203.30059638,
				 250.15196844,219.29834304,219.41470909,183.26035451,116.66453524],
		    "s[39/36]": [0.08312922,0.15734247,0.57839869,0.75988506,0.88895174,
				 0.89357971,1.52314302,1.45743969,0.55666518,0.51691077]
		}
	    });
	}
    case 'detritals': return({
	"data": {
	    "A": ['N1',645.4,496.9,1000.3,1168.5,2263.5,1878.6,769.8,1161.7,519.4,1213.3,
		  271.3,1065.4,1114.6,998.7,603.3,465.9,489.4,744.5,1287.4,617,1802.8,1154.5,
		  511.3,583.8,209.5,987.4,1080.5,930.2,518.4,511,1109.7,1035.7,748.4,1068.2,
		  1079,995.8,1075.4,664.9,620.9,267.1,660,636.2,1089.8,637,598.8,1794.2,622.6,
		  566.5,543.5,1004.9,1013.3,604.4,663.4,645.1,475.1,128.9,564.9,2994.5,510.2,
		  629.5,1031.2,903.2,633.2,474.5,1073.1,549.2,1128.5,788.6,559.3,1246.1,979.2,
		  535.7,546.5,777.5,686,1040.1,1005.8,597.4,1805.8,1157.9,520.4,612.6,502.8,
		  538.1,832.8,1182.3,1187.1,1146,1142.5,1082.8,284.6,563.3,516.3,1366.4,1041.8,
		  1016.8,743,577.2,1110.6],
	    "B": ['N2',2764.6,1998.6,997.7,1105.5,620.6,1133.7,583.6,1216.6,1181.8,1203.7,
		  1251.2,1129.1,1078.9,897,1985.9,665.7,622,651.6,1075,629.9,557.6,1356.8,
		  1081.9,650.6,1351.4,666.2,1071.9,1087.2,1017.4,544.7,900.2,285.2,1100.6,668.3,645.7,1059.6,564,623.5,1808.8,1226.4,1156.4,691.2,1849.8,1113,1144,555.1,1143,1079.1,987.2,1117.7,706,678.7,647.9,1170.7,1041.2,999.5,773.3,1125,1123.5,242.7,549.8,1162.7,1267.3,542.3,1033.6,1208.7,755.5,594.2,675.3,1431.3,973.5,1124.3,836.9,739.5,603.1,751,1077.9,567.1,1766.1,596.4,613.6,1142.6,534.3,630,665.1,1244.2,522.7,560.4,572.4,1586.2],
	    "C": ['N3',418.6,1036.1,1118.4,1221.4,944.7,937.8,982,752.6,1240.3,1278.2,1088.2,2041,577.8,976.9,1411.5,547.5,791.5,2160.2,1043.6,1181.1,1229.2,1016.7,1148,1161,1368.9,1862.5,993.5,1192.5,1659.6,503.5,967.7,2233.8,2441,1369,1502.1,684.7,1028.6,1283.5,1289.1,1273.4,1086.7,1269,281.3,1816.1,1229.5,1331.2,1370.9,1264.8,688.3,1741.1,1276.2,2106.1,665.1,2455.2,1211,1127.3,824.6,867.4,210.9,1839.2,691.1,682.3,1190.1,639.9,1254.6,682.1,2068.2,583.7,769.1,1615.3,1150.5,1283.5,1223,1054.1,1128.6,1980.7,1120.4,2312.2,1020.4,723.1,660.5,1105.6,1051.1,1687.5,1440.5,625.8,1061.6,1504.2,777.5,1324,1374,1138.5,1172.2,1626.6,531.8,1065.6,1007.7,963.8,644.2,1865.9],
	    "D": ['N4',1228.4,1445.7,1400.5,1053.9,2073.4,1107.1,1386.1,1221.8,871,1418,1853.9,2905.9,1928.9,728.5,1371.7,814.7,1527.4,1240.9,883.2,1244.6,1285.8,1230.5,1187.1,1400,1510.5,1233.6,1875.6,1744.7,1387,1999,1917.7,1049,1726.6,1981.3,2069.6,1814.4,1106.3,699.1,1394.8,2003.8,1113.8,760.1,1436.9,568.7,1343.9,1097,1156.3,1128.6,1039.4,875.5,549,1406.4,1431.6,1408.3,1152.1,1284.8,648.1,1876.7,1373.6,554.2,519.9,1169.4,1914.7,1912.5,1380.2,1131.4,1688.5,1801.5,1126.3,1894.9,1085.9,1070.7,1086.4,1224,985.3,675.8,2157.3,1823.7,1005.1,581.9,1005.7,1284.9,1060.3,1890.7,1115.7,551.7,1006.2,1221.5,1015.7,1094,1019.2,650.2,722,515.8,970.6,1026.8,1930.9,930.7,529.2,1138.9],
	    "E": ['N5',1227,1269.7,2127.1,1185.1,362.6,1114.6,701.2,1064.5,1133.7,938.7,991.8,2039.6,1064.5,698.1,1507.9,668,1279.3,1386.9,1210.8,1368.3,761.2,1251.3,1539.3,1209.7,1334.7,246.9,2036.3,1130.4,1778.5,663.6,525.4,553.9,1223.4,1053.1,1477.9,697.7,1834.8,1989.8,1177.5,1480.8,1585.5,1521.8,1396.6,1210.4,1235.4,1292.5,1171.7,1216.4,2064.6,1322.2,1329.1,872.4,2326.5,1372.3,1172.1,696,1360,1148.1,510.2,610.6,1301.8,1118.3,268.9,616.8,619.3,226.9,1788.9,1408.2,567.9,1804.1,1180.3,660.1,553.7,560,638.5,943,1769.2,1773.5,673.6,1038.7,493.3,264,1027.7,1730.4,375.9,2108.8,581.4,1950,672.1,1196.1,1920.7,1231.8,621.5,1111.6,1589.4,1798.8,1995.4,1142.1,1223.8,554.5],
	    "F": ['N6',605.1,1462.6,1240.1,316.5,1524.5,1141.3,1521.5,1166.7,660.1,675.5,1211.4,1391.2,2076.7,1430.9,576.9,1375.8,1278.6,1091,632,1867.4,885,1126.3,832.6,1158.2,2093.1,1185.2,1289.5,597.3,1133.9,1418.6,1001.9,2074.3,1223.2,972.8,1469,638,1494,1107.9,2121.1,943,1216.2,1148.6,1201.7,1548.5,1032.9,1260.6,605,1441.7,1547.1,713.1,1462.8,1101.6,858.7,1813.8,1233.1,944.7,1302.4,541.4,3402,952.3,1027.7,1074,256.3,1195.9,1066.5,1092.7,1412.8,1005,1186,1042.9,1281.8,1888.9,1560.6,1888,2193.3,1154.6,1196.3,809.9,1206.8,1042.8,1111,628.1,293,1094.6,1920.5,1063.5,285.7,1929.9,1513.9,1302.6,1179.8,675.7,1040.6,511.9,529.5,1026.6,563.4,1302.4,2858.8,1223.4],
	    "G": ['N7',931.2,980,1383.9,2017.4,1353.8,948.2,618.5,2104.7,307.2,2052.9,1977.3,1064.2,703,1137.6,1325,583.8,1120.2,1989.2,1163.4,1145,1252.9,578.9,1032.2,1236.1,1151.1,1078.4,475.5,993.6,1419.8,1303.7,958,702.1,966.1,1121.5,1808.7,1946.3,591.7,1984,2620.4,1031.2,768.3,862.7,2061.1,1137.3,991,788.4,1092.2,1080.7,725.6,1098.4,1097.8,930.7,1134.6,1066.4,1139.9,1007.2,1227.3,1345.8,1911,687.5,3208.7,2076.6,1153.1,1099.1,655.7,738.8,1416.9,1069.4,657.6,1111.9,1218.1,1137.9,1060.6,1982.7,1976.7],
	    "H": ['N8',2440.3,1246.4,1131.9,1116.2,1985.7,1055.6,296.2,556.1,815.9,2266.4,1094.6,634.9,981.3,1088,670.6,663.5,1767.5,533.7,510.3,1041.4,287.9,1991.1,1175.6,2036.1,232.3,1276.8,588.6,573.4,1261,893.4,1484.6,262.6,1779.4,970.6,1521.5,2153.9,1142,1140.3,1037.3,2004.8,2036.2,2079.3,554.8,931.3,997.2,573,1263.4,1299,981.6,859.2,606.5,1844.6,603.4,1014.8,1056.3,1916.1,1263,558.1,1136.6,1199.3,1793.6,948.7,2086.5,520.6,600,1178.5,2059.2,1094.1,1011.5,272.2,276.9,1156.8,545.3,1023.9,563.5,856.4,1108.5,1126.9,614.5,490.5,1839.8,1391.5,578,632.6,555.6,545.7,1327.7,619.3,871,508.7,1128,1134.6,624.1,583.9,1916.7,1077.8,1205,261.8,1064.8,1168.1],
	    "I": ['N9',2117.6,1919.1,640.9,679.7,732.3,1190.3,2005.4,529.7,2088.8,1584.3,995.4,1069,1858.4,1157.4,215.9,602.5,1951.6,1175.2,1553.7,1307.2,627.8,1180.4,2951.4,1947.7,1467.5,2634.6,1177.8,634.5,2102.9,2078.3,1717.9,1148.8,1137.6,675.8,991.4,377.1,773.3,1082.8,1479.5,294.8,629.5,1076.4,1200.4,1266.1,1064.3,1067.4,1118.7,1147.7,641.6,1124.9,579.2,924,1158.7,819.7,503,1061.2,2547.9,1498.8,281.7,2845.5,684.1,1175.2,607,1176.6,627.1,569.8,1202.2,1936.9,1036.2,1176.4,862.9,1130.4,1729.7,565.2,1055.8,907.1,1827.7,692.1,1929.8,557.5,749.6,887.9,2166.1,1028.7,3351.4,1842.3,1096.4,348.5,1299.9,1084.2,1169.6,1192.4,1353.7,2044,1102.7,1903.9,831,1311.8,1916.6,1977],
	    "J": ['N10',2727.2,768,1294.2,1462.1,1924,1154.3,1350.8,538.5,1412.2,1577.6,2809.5,659.3,1302.3,1135.8,973.3,1194.1,1157.1,811.5,1554.9,1948.5,582.1,1175.7,1493.8,1004.9,854.5,1076.1,1811.6,978.6,1254.5,261.9,1265.6,1328.6,1026.5,1183.9,300.7,875.1,1383.9,701.5,624.7,1253.9,1325.6,1554.6,1862.9,1445.5,747.1,552.6,1001.9,1094,1073.9,1010.4,632,1056.8,1951,1070,883,498.4,1041.1,1123,1908,565.1,584.7,1152.5,1050.5,2088.2,1103.7,653.3,1028.2,1002.2,1233.8,547.6,1413,1357.3,1323.3,1217.5,255.7,1221.8,1265.3,1092,1729.3,1326.3,585.5,339.7,1229,628.3,1271.6],
	    "K": ['N11',555.8,997.7,1722.7,1225,240.3,1194.7,1144.5,1087.4,1209.1,1070.1,1126.3,696.8,1603.3,1778.6,1019.2,1649.6,999.7,550.8,549.3,1017.2,1071.2,600.9,508.6,497.7,1050.3,505.5,1005.8,1874.9,1202.4,603.2,1047.4,611.6,533.2,636,560.7,617.7,976.3,1081.7,1097.1,1747.7,1065.9,1280,774.3,561.5,1041,1239.3,1217,1416.2,551.2,815.1,1111.4,1061.9,549.2,1033.4,526.5,1165.1,2100,2666.9,1222.7,1738.7,547.3,1148.9,592.2,516.4,1093.5,193.3,288.3,1204.2,1155.3,270.9,544.3,1052.7,552.6,533.7,1055.1,1148.6,601.8,616.5,1129.3,645.4,1098.8,1102.2,558.3,620.2,559.4,1010.5,1925,774.6,1190.5,677.1,1220.1,676.1,2144.9,1141.7,1789.1,561,565.7,1087.8,608.6,623.9],
	    "L": ['N12',252.1,1008.9,502.2,501.4,1014.3,2731.1,1234,884.3,1858.6,1209.1,1075.3,1034.5,1165.7,999.9,1111.8,226.9,772.3,903.3,1790,299.7,976.2,289.3,1253.5,644.5,1059.5,1261,1986.3,1385.4,701.3,1051.6,550.2,583.2,1100.1,997.4,843.9,689.8,268.6,222,882.3,2680.6,1166.7,1052.1,579.2,970.8,1136.5,2110.5,285.2,1411,1040.3,1214.9,1019.6,712.2,986.9,606.2,344.9,589.4,1131.2,1028.2,602.9,535,1142,1682.2,1131.2,1874.3,616.3,855.9,585.6,278.6,664.3,1894.9,610.9,1066.5,1604.3,2078,2547.9,569.4,970.9,808.7,1070.5,1020,1008.1,1108.1,1830.5,1062.3,1121.1,567.1,1575.7,601.5,535.1,1085.4,1016.8,1977.5,632.6,1025.5,1112.4,283.2,1013.9,485.5,1834.3,920.7],
	    "M": ['N13',2055.1,1106.9,1968.2,1131.2,1049,1053.2,1345.6,627.4,274.6,638.6,1137.3,1003,1053.1,1014.2,1282.2,1754,1048.1,1198.1,517.3,591.2,660.3,1143.1,274.7,1155.2,1040.8,1062.8,528.4,1022.9,1288.1,857.4,920.4,1168.5,814.2,1144.2,1059.7,781.3,524.2,1032.6,1751,1034.8,1918.7,821.3,1058.2,814.1,1879.4,953.1,1034.5,1134.4,1063.3,1881.7,710.2,1035.4,622.5,1148.4,970.5,1162.1,540,1117.7,1138.7,1092.3,912.7,565.5,813.6,605.9,1052.2,1158.8,1920.6,1041.7,1732.7,2654.4,890.9,2096.5,947,1049.9,992.4,1000,930.5,1425.8,704.6,500.9,1090,1750.4,1181,1193.3,1223.2,1127.4,548.9,1251.9,520.4,1101.5,1199.9,801.8,1110.4,1066.9,1552.4,1019.8,1783.7,969,1913.8,1848.9],
	    "N": ['N14',1083.6,1847.5,1753.2,1022.5,1241.7,210.1,970.2,573.7,1114,1274.5,1022.2,869.8,984.7,912.1,1183.3,1031.5,1025.5,1045,1045.7,605.9,627.6,1152.9,1071.3,913,1040.6,2826.3,1249.3,1978.4,1034.2,1263.4,781,1083.8,501.3,624.4,1798,687.5,744.9,1162.8,1084.8,962.7,959.8,835.9,1078.8,599.5,1372.7,901.6,1142.3,1091.1,581.5,1152.8,1045.9,1063.6,898.8,1082.3,975.9,616.6,940,1948.4,976.3,697.5,1174.6,1308.1,856.4,296,1200.9,547.1,1093.4,1081.7,740,1007.9,1311.6,669.5,1011.5,626.6,925.6,566,695.8,859.8,335.6],
	    "O": ['T8',254.7,1010.2,849,1744.9,969.7,935.4,1367.1,568.3,990.8,211.9,300.4,636.2,1095.4,1051.2,1627,925.1,1007.7,1013.4,937,527.3,275.4,873.7,567.9,454.2,1008.8,1203.9,825,361.7,1042.8,884.6,1065.4,1059.5,562.7,2934.8,1011.8,318.8,493.1,1051.5,306.7,1052,1001.9,990.1,559.1,1261.9,274.6,1801.2,1049.5,1031.5,1205.8,1055.8,573.7,636.1,890.7,537.4,1851,1058.7,682.4,543.5,385.3,1038,1803.5,1025.7,580.4,1031.6,1224.2,613.9,1741.3,1051.3,1008.1,1055.7,1740.6,1007.9,1078.9,814.9,592.6,1067.4,1099.1,260.9,476,587.3,1783.4,503.5,574.3,574.7,999.8,2099.3,1239.1,1069.2,834.7,587.5,305.7,1083.1,1071.1,279.8,545,542,796.6,3017.4,2261.8,575.5],
	    "P": ['T13',268,1051.2,1741,522.2,1152.5,1288.8,558.4,1072.4,530.7,475.5,641.3,1084,531.4,848.1,768.4,925.5,535,765.7,1196.4,1326.6,1077,518.4,1077,566.8,1016.3,532.2,513.9,1631.4,1021.2,1222.9,560.1,590.4,549.8,1966,1056.4,1066.4,1052.1,891.7,521,1268.8,960.2,3148.4,558.4,1061.2,510.1,1097.6,673.8,509.2,1650.3,1038.6,502.3,1231,1049.6,1048.4,1891,521.4,1157.4,921.9,986.5,1106.3,850.9,1097.1,283.2,2731,1094.1,978.5,1785.6,1098.3,1069.8,581.9,506.9,1066.8,526.1,537.8,477.9,1145.1,2128.8,512.4,1192.5,590.5,1099.5,1836.4,662.9,997,1881.5,528.4,898.8,637.5,260,1267.9,553.2,2759.3,276.2,525.7,1166.5,1046,1305.5,1097.6,930.5,542.6,409.4,703.6,521,1906.7,1002.5,1215.5]
	}
    });
    default:
    }
}
