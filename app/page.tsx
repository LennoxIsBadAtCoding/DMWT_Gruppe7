'use client'
import React from "react";
import styles from "../styles/MainPage.module.css";
import stylesLayout from "../styles/Layout.module.css";
import smartphoneGIF from '/public/FlyingSmartphones.gif';
import heroBackground from '/public/HeroBackground.svg';
import Image from "next/image";
import HeaderMenu from "./components/HeaderMenu";
import {Button, Link} from 'react-scroll';
import ImageChange from './changeImage';
// {/*<Image id={styles.HeroBackground}*/}
// {/*    src={heroBackground}*/}
// {/*    alt={"Space background with stars and a planet and the title recharge the source"}*/}
// {/*></Image>*/}
export default function MainPage() {
    function Hero() {
        return (
            <div>
                <svg width="1921" height="1081" viewBox="0 0 1921 1081" fill="none" xmlns="http://www.w3.org/2000/svg" id={styles.HeroBackground}>
                    <g clip-path="url(#clip0_483_571)">
                        <path d="M1920.5 0.5H0.5V1080.5H1920.5V0.5Z" fill="#141727" stroke="black" strokeMiterlimit="10"/>
                        <path d="M700.39 710.42H709.35C711.82 710.42 712.82 714.14 711.59 718.69L707.11 735.23C705.88 739.78 703.86 739.78 702.63 735.23L698.15 718.69C696.92 714.14 697.93 710.42 700.39 710.42Z" fill="#FFFDC1"/>
                        <path d="M709.35 710.42H700.39C697.92 710.42 696.92 706.7 698.15 702.15L702.63 685.61C703.86 681.06 705.88 681.06 707.11 685.61L711.59 702.15C712.82 706.7 711.81 710.42 709.35 710.42Z" fill="#FFFDC1"/>
                        <path d="M705 716.23V704.59C705 701.39 707.98 700.08 711.63 701.68C715.28 703.28 721.24 705.9 724.88 707.5C728.52 709.1 728.52 711.72 724.88 713.32C721.24 714.92 715.27 717.54 711.63 719.14C707.99 720.74 705 719.43 705 716.23Z" fill="#FFFDC1"/>
                        <path d="M705 704.72V716.36C705 719.56 702.02 720.87 698.38 719.27C694.74 717.67 688.77 715.05 685.13 713.45C681.49 711.85 681.49 709.23 685.13 707.63L698.38 701.81C702.02 700.21 705 701.52 705.01 704.72H705Z" fill="#FFFDC1"/>
                        <path d="M1655.61 589H1670.4C1674.47 589 1676.46 593.3 1674.82 598.55L1673.37 603.2L1667.42 622.3L1665.97 626.95C1664.33 632.2 1661.66 632.2 1660.02 626.95L1658.57 622.3C1656.93 617.05 1654.26 608.46 1652.62 603.2L1651.17 598.55C1649.53 593.3 1651.52 589 1655.59 589H1655.61Z" fill="#FFFDC1"/>
                        <path d="M1670.4 589H1655.61C1651.54 589 1649.55 584.7 1651.19 579.45L1652.64 574.8C1654.28 569.55 1656.95 560.96 1658.59 555.7L1660.04 551.05C1661.68 545.8 1664.35 545.8 1665.99 551.05L1667.44 555.7C1669.08 560.95 1671.75 569.54 1673.39 574.8L1674.84 579.45C1676.48 584.7 1674.49 589 1670.42 589H1670.4Z" fill="#FFFDC1"/>
                        <path d="M1663.22 597.34V580.62C1663.22 576.02 1667.42 573.87 1672.56 575.83L1675.74 577.05C1680.88 579.01 1689.28 582.23 1694.42 584.19L1697.6 585.41C1702.74 587.37 1702.74 590.59 1697.6 592.55L1694.42 593.77C1689.28 595.73 1680.88 598.95 1675.74 600.91L1672.56 602.13C1667.42 604.09 1663.22 601.94 1663.22 597.34Z" fill="#FFFDC1"/>
                        <path d="M1663.22 580.82C1663.22 585.42 1663.22 592.94 1663.22 597.54C1663.22 602.14 1659.02 604.29 1653.88 602.33L1650.7 601.11C1645.56 599.15 1637.16 595.93 1632.02 593.97L1628.84 592.75C1623.7 590.79 1623.7 587.57 1628.84 585.61L1632.02 584.39L1650.7 577.25L1653.88 576.03C1659.02 574.07 1663.22 576.22 1663.22 580.82Z" fill="#FFFDC1"/>
                        <path d="M1829.16 861H1850.8C1856.3 861 1859.46 865.3 1857.83 870.55L1852.96 886.2L1847.01 905.3L1842.14 920.95C1840.5 926.2 1837.83 926.2 1836.19 920.95L1831.32 905.3L1825.37 886.2L1820.5 870.55C1818.86 865.3 1822.03 861 1827.53 861H1829.17H1829.16Z" fill="#FFFDC1"/>
                        <path d="M1849.16 861H1827.52C1822.02 861 1818.86 856.7 1820.49 851.45L1825.36 835.8C1827 830.55 1829.67 821.96 1831.31 816.7L1836.18 801.05C1837.82 795.8 1840.49 795.8 1842.13 801.05L1847 816.7C1848.64 821.95 1851.31 830.54 1852.95 835.8L1857.82 851.45C1859.46 856.7 1856.29 861 1850.79 861H1849.15H1849.16Z" fill="#FFFDC1"/>
                        <path d="M1839.47 870.98V846.52C1839.47 841.02 1843.67 838.13 1848.81 840.09L1862.11 845.18L1880.79 852.32L1894.09 857.41C1899.23 859.37 1899.23 862.59 1894.09 864.55L1880.79 869.64L1862.11 876.78L1848.81 881.87C1843.67 883.83 1839.47 880.94 1839.47 875.44V870.98Z" fill="#FFFDC1"/>
                        <path d="M1839.47 851.26C1839.47 856.76 1839.47 865.76 1839.47 871.26V875.72C1839.47 881.22 1835.27 884.11 1830.13 882.15L1816.83 877.06C1811.69 875.1 1803.29 871.88 1798.15 869.92L1784.85 864.83C1779.71 862.87 1779.71 859.65 1784.85 857.69L1798.15 852.6C1803.29 850.64 1811.69 847.42 1816.83 845.46L1830.13 840.37C1835.27 838.41 1839.47 841.3 1839.47 846.8V851.26Z" fill="#FFFDC1"/>
                        <path d="M871.5 542C894.728 538.65 901.163 572.047 908.87 589.976C917.803 610.77 931.572 628.73 948.893 641.961C965.202 654.422 984.168 662.154 1000.24 675.005C1007.64 680.915 1014 688.152 1018.79 696.652C1023.34 704.711 1026.6 713.475 1029.43 722.376C1035.11 740.263 1039.12 759.076 1047.76 775.688C1051.89 783.631 1057.19 790.973 1063.78 796.693C1071.83 803.698 1081.3 808.154 1091.14 811.377C1100.98 814.6 1110.98 816.634 1120.85 819.53C1130.35 822.311 1139.42 826.114 1147.98 831.392C1164.93 841.852 1179.28 857.094 1189.07 875.381C1198.86 893.668 1205.88 913.229 1212.04 933.107C1215.99 945.863 1219.75 959.02 1227.72 969.607C1238.08 983.322 1254.12 990.927 1270.34 991.127C1288.23 991.349 1307.06 983.817 1324.26 992.244C1333.28 996.668 1340.54 1004.13 1345.79 1013.12C1350.15 1020.57 1353.62 1028.69 1359.53 1034.93C1374.45 1050.68 1397.72 1051.51 1416.71 1045.68C1432.66 1040.79 1447.3 1031.63 1458.72 1018.56C1468.39 1007.48 1475.43 994.372 1480.79 980.351C1485.33 968.458 1489.71 956.408 1491.21 943.556C1492.71 930.705 1490.04 918.064 1488.73 905.234C1487.61 894.258 1488.37 883.166 1491.65 872.663C1493.48 866.817 1496.37 861.329 1497.39 855.209C1498.78 846.876 1497.76 838.07 1494.67 830.306C1491.76 822.964 1486.86 816.928 1482.13 810.903C1471.08 796.819 1463.4 781.282 1460.55 762.953C1458.84 751.892 1445.38 712.613 1446.5 701.5C1443.5 686 1441.14 644.348 1445.5 674C1438.64 646.348 1435.05 669.393 1437 671.5C1435.02 691.125 1450.9 769.189 1458 787.518C1461.72 797.135 1466.84 805.699 1472.94 813.747C1477.49 819.752 1482.63 825.398 1485.94 832.371C1488.87 838.576 1490.09 846.444 1488.84 853.302C1487.72 859.422 1484.76 864.963 1482.99 870.862C1479.86 881.227 1478.83 892.53 1479.79 903.359C1480.91 916.158 1483.96 928.798 1482.66 941.734C1481.35 954.67 1476.77 966.278 1472.34 977.855C1471.52 979.993 1470.39 982.795 1469.19 985.429C1467.74 988.61 1466.17 991.728 1464.47 994.762C1455.71 1010.41 1443.32 1023.42 1427.9 1031.17C1412.66 1038.81 1394.48 1042.84 1378.27 1036.49C1369.83 1033.18 1363.78 1027.13 1359.16 1018.95C1354.54 1010.76 1350.68 1002.82 1344.5 996.152C1337.22 988.294 1327.91 982.374 1317.79 980.119C1308.78 978.107 1299.69 978.792 1290.62 979.919C1281.55 981.046 1272.93 982.405 1264.1 981.257C1255.27 980.109 1247.65 976.19 1240.99 970.47C1232.02 962.781 1227.35 952.089 1223.62 940.586C1217.94 923.152 1212.69 905.729 1205.37 888.97C1196.6 868.861 1185.75 850.605 1169.79 836.3C1154.22 822.364 1136.36 813.81 1116.85 808.638C1097.34 803.466 1077.69 799.948 1063.91 783.894C1052.39 770.463 1047.38 752.103 1042.42 735.017C1037.18 716.993 1031.86 698.496 1020.93 683.432C1008.77 666.662 990.746 657.024 973.795 647.091C965.047 641.961 956.298 636.63 948.523 629.868C940.748 623.105 933.236 614.678 927.271 605.555C921.033 596.012 916.625 585.604 912.227 574.986C907.828 564.368 903.099 554.234 895.159 546.629C887.851 539.634 878.285 531.567 868.35 533C865.985 533.337 864.029 538.191 864 540.993C863.981 543.29 867.655 542.337 870 542H871.5Z" fill="#8A9FAA"/>
                        <path d="M1441.68 672.034C1447.66 670.391 1451.58 665.704 1450.44 661.565C1449.3 657.426 1443.54 655.403 1437.56 657.046C1431.58 658.69 1427.65 663.377 1428.79 667.516C1429.93 671.655 1435.7 673.678 1441.68 672.034Z" fill="#8A9FAA"/>
                        <path d="M1377 674.074C1504.58 674.074 1608 570.652 1608 443.074C1608 315.496 1504.58 212.074 1377 212.074C1249.42 212.074 1146 315.496 1146 443.074C1146 570.652 1249.42 674.074 1377 674.074Z" fill="#52B0F8"/>
                        <path d="M1572.78 356.969C1575.06 352.798 1574.13 346.658 1570.75 343.334L1488.94 263.032C1485.56 259.707 1479.7 259.353 1475.95 262.264L1421.4 304.388C1417.64 307.289 1411.88 312.479 1408.61 315.916C1408.61 315.916 1390.43 335.009 1380.02 358.886C1365.49 392.237 1367.86 428.135 1367.86 428.135C1368.17 432.875 1371.93 438.454 1376.2 440.526C1376.2 440.526 1409.56 456.77 1438.74 464.231C1472.28 472.815 1514.65 473.626 1514.65 473.626C1519.4 473.721 1524.19 470.017 1525.3 465.397L1532.28 436.2C1533.39 431.58 1536.15 424.387 1538.42 420.216L1572.79 356.969H1572.78Z" fill="#20D7C4"/>
                        <path d="M1146.91 431.131C1153.06 469.257 1168.6 493.695 1183.13 493.592C1186.18 493.574 1192.13 492.452 1199.54 483.229C1210.41 469.697 1218.58 458.972 1219.4 457.323C1238.34 419.387 1350.17 362.073 1344.62 320.881C1343.02 309.016 1331.08 294.051 1285.9 280.295C1270.46 272.497 1255.03 264.699 1239.61 256.91C1186.33 296.996 1150.7 359.698 1146.91 431.131Z" fill="#20D7C4"/>
                        <path d="M1427.35 656.803C1427.44 661.552 1424.03 663.72 1419.76 661.622C1419.76 661.622 1399.11 651.458 1382.6 636.933C1370.23 626.035 1360.18 612.736 1360.18 612.736C1357.31 608.945 1354.14 602.054 1353.12 597.408L1336.96 523.609C1335.94 518.971 1337.12 511.847 1339.57 507.78C1339.57 507.78 1352.4 486.545 1360.15 484.084C1371.06 480.613 1379.38 486.234 1405.06 490.129C1417.25 491.977 1425.79 492.348 1425.79 492.348C1430.53 492.555 1435.54 496.441 1436.92 500.984C1436.92 500.984 1437.6 503.22 1439.6 510.854C1445.3 532.564 1448.53 544.843 1448.23 556.622C1447.79 574.93 1439.14 579.904 1431.83 599.8C1426.55 614.143 1427.35 656.794 1427.35 656.794L1427.35 656.803Z" fill="#20D7C4"/>
                        <path d="M1456.01 616.216C1454.51 621.086 1452.09 624.8 1448.24 630.896L1446.23 634.083C1444.01 637.079 1440.89 635.87 1439.29 631.406C1439.29 631.406 1438.66 629.636 1438.74 626.587C1438.88 621.751 1440.59 619.325 1441.33 612.77L1441.83 608.418C1441.56 605.111 1444.08 602.011 1447.43 601.518L1450.83 600.689L1452.99 600.163C1455.13 599.506 1456.93 602.848 1456.99 607.598C1456.99 607.598 1457.05 612.891 1456.02 616.233L1456.01 616.216Z" fill="#20D7C4"/>
                        <path d="M359.1 919.5H386.5C392 919.5 395.16 923.8 393.53 929.05L385.78 953.95L379.83 973.05L372.08 997.95C370.44 1003.2 367.77 1003.2 366.13 997.95L358.38 973.05L352.43 953.95L344.68 929.05C343.04 923.8 346.21 919.5 351.71 919.5H359.11H359.1Z" fill="#FFFDC1"/>
                        <path d="M379.1 919.5H351.7C346.2 919.5 343.04 915.2 344.67 909.95L352.42 885.05L358.37 865.95L366.12 841.05C367.76 835.8 370.43 835.8 372.07 841.05L379.82 865.95L385.77 885.05L393.52 909.95C395.16 915.2 391.99 919.5 386.49 919.5H379.09H379.1Z" fill="#FFFDC1"/>
                        <path d="M369.5 929.47V898.5C369.5 893 373.7 890.11 378.84 892.07L400.66 900.41L419.34 907.55L441.16 915.89C446.3 917.85 446.3 921.07 441.16 923.03L419.34 931.37L400.66 938.51L378.84 946.85C373.7 948.81 369.5 945.92 369.5 940.42V929.45V929.47Z" fill="#FFFDC1"/>
                        <path d="M369.5 909.83C369.5 915.33 369.5 924.33 369.5 929.83V940.8C369.5 946.3 365.3 949.19 360.16 947.23L338.34 938.89C333.2 936.93 324.8 933.71 319.66 931.75L297.84 923.41C292.7 921.45 292.7 918.23 297.84 916.27L319.66 907.93L338.34 900.79L360.16 892.45C365.3 890.49 369.5 893.38 369.5 898.88V909.85V909.83Z" fill="#FFFDC1"/>
                        <path d="M130.17 230H139.04C141.48 230 142.48 233.21 141.26 237.13L136.82 251.38C135.6 255.3 133.6 255.3 132.38 251.38L127.94 237.13C126.72 233.21 127.72 230 130.16 230H130.17Z" fill="#FFFDC1"/>
                        <path d="M139.04 230H130.17C127.73 230 126.73 226.79 127.95 222.87L132.39 208.62C133.61 204.7 135.61 204.7 136.83 208.62L141.27 222.87C142.49 226.79 141.49 230 139.05 230H139.04Z" fill="#FFFDC1"/>
                        <path d="M134.73 235.01V224.98C134.73 222.22 137.68 221.09 141.29 222.47L154.41 227.49C158.02 228.87 158.02 231.13 154.41 232.51L141.29 237.53C137.68 238.91 134.73 237.78 134.73 235.02V235.01Z" fill="#FFFDC1"/>
                        <path d="M134.73 225.09V235.12C134.73 237.88 131.78 239.01 128.17 237.63L115.05 232.61C111.44 231.23 111.44 228.97 115.05 227.59L128.17 222.57C131.78 221.19 134.73 222.32 134.73 225.08V225.09Z" fill="#FFFDC1"/>
                        <path d="M90.14 175.35H106.38C110.85 175.35 113.16 179.65 111.53 184.9L109.36 191.88L103.41 210.98L101.24 217.96C99.6 223.21 96.93 223.21 95.29 217.96L93.12 210.98L87.17 191.88L85 184.9C83.36 179.65 85.68 175.35 90.15 175.35H90.14Z" fill="#FFFDC1"/>
                        <path d="M106.38 175.35H90.14C85.67 175.35 83.36 171.05 84.99 165.8L87.16 158.82L93.11 139.72L95.28 132.74C96.92 127.49 99.59 127.49 101.23 132.74L103.4 139.72L109.35 158.82L111.52 165.8C113.16 171.05 110.84 175.35 106.37 175.35H106.38Z" fill="#FFFDC1"/>
                        <path d="M98.5 184.51V166.16C98.5 161.11 102.7 158.59 107.84 160.55L113.16 162.58L131.84 169.72L137.16 171.75C142.3 173.71 142.3 176.93 137.16 178.89L131.84 180.92L113.16 188.06L107.84 190.09C102.7 192.05 98.5 189.53 98.5 184.48V184.51Z" fill="#FFFDC1"/>
                        <path d="M98.5 166.37V184.72C98.5 189.77 94.3 192.29 89.16 190.33L83.84 188.3L65.16 181.16L59.84 179.13C54.7 177.17 54.7 173.95 59.84 171.99L65.16 169.96L83.84 162.82L89.16 160.79C94.3 158.83 98.5 161.35 98.5 166.4V166.37Z" fill="#FFFDC1"/>
                        <path d="M1420.69 149.36H1431.01C1433.85 149.36 1435.01 153.09 1433.59 157.64L1428.43 174.21C1427.01 178.77 1424.69 178.77 1423.27 174.21C1421.85 169.65 1419.53 162.2 1418.11 157.64C1416.69 153.08 1417.85 149.36 1420.69 149.36Z" fill="#FFFDC1"/>
                        <path d="M1431.01 149.36H1420.69C1417.85 149.36 1416.69 145.63 1418.11 141.08C1419.53 136.53 1421.85 129.07 1423.27 124.51C1424.69 119.95 1427.01 119.95 1428.43 124.51C1429.85 129.07 1432.17 136.52 1433.59 141.08C1435.01 145.64 1433.85 149.36 1431.01 149.36Z" fill="#FFFDC1"/>
                        <path d="M1426 155.18V143.52C1426 140.31 1429.43 139 1433.63 140.6L1448.88 146.43C1453.07 148.03 1453.07 150.66 1448.88 152.26C1444.69 153.86 1437.82 156.49 1433.63 158.09C1429.44 159.69 1426 158.38 1426 155.17V155.18Z" fill="#FFFDC1"/>
                        <path d="M1426 143.66C1426 146.87 1426 152.12 1426 155.32C1426 158.52 1422.57 159.84 1418.38 158.24L1403.13 152.41C1398.94 150.81 1398.94 148.18 1403.13 146.58C1407.32 144.98 1414.19 142.35 1418.38 140.75C1422.57 139.15 1426 140.46 1426.01 143.67L1426 143.66Z" fill="#FFFDC1"/>
                        <path d="M1048.47 588.76H1061.16C1064.65 588.76 1066.16 593.06 1064.53 598.31L1064.13 599.58C1062.49 604.83 1059.82 613.42 1058.18 618.68L1057.78 619.95C1056.14 625.2 1053.47 625.2 1051.83 619.95L1051.43 618.68C1049.79 613.43 1047.12 604.84 1045.48 599.58L1045.08 598.31C1043.44 593.06 1044.96 588.76 1048.45 588.76H1048.47Z" fill="#FFFDC1"/>
                        <path d="M1061.16 588.76H1048.47C1044.98 588.76 1043.47 584.46 1045.1 579.21L1045.5 577.94C1047.14 572.69 1049.81 564.1 1051.45 558.84L1051.85 557.57C1053.49 552.32 1056.16 552.32 1057.8 557.57L1058.2 558.84C1059.84 564.09 1062.51 572.68 1064.15 577.94L1064.55 579.21C1066.19 584.46 1064.67 588.76 1061.18 588.76H1061.16Z" fill="#FFFDC1"/>
                        <path d="M1055 595.92V581.58C1055 577.64 1059.2 576.02 1064.34 577.98L1064.41 578.01C1069.55 579.97 1077.95 583.19 1083.09 585.15L1083.16 585.18C1088.3 587.14 1088.3 590.36 1083.16 592.32L1083.09 592.35C1077.95 594.31 1069.55 597.53 1064.41 599.49L1064.34 599.52C1059.2 601.48 1055 599.87 1055 595.92Z" fill="#FFFDC1"/>
                        <path d="M1055 581.74C1055 585.68 1055 592.14 1055 596.08C1055 600.02 1050.8 601.64 1045.66 599.68L1045.59 599.65L1026.91 592.51L1026.84 592.48C1021.7 590.52 1021.7 587.3 1026.84 585.34L1026.91 585.31C1032.05 583.35 1040.45 580.13 1045.59 578.17L1045.66 578.14C1050.8 576.18 1055 577.79 1055 581.74Z" fill="#FFFDC1"/>
                        <path d="M1821.1 87.5H1848.5C1854 87.5 1857.16 91.8 1855.53 97.05L1847.78 121.95L1841.83 141.05L1834.08 165.95C1832.44 171.2 1829.77 171.2 1828.13 165.95L1820.38 141.05L1814.43 121.95L1806.68 97.05C1805.04 91.8 1808.21 87.5 1813.71 87.5H1821.11H1821.1Z" fill="#FFFDC1"/>
                        <path d="M1841.1 87.5H1813.7C1808.2 87.5 1805.04 83.2 1806.67 77.95L1814.42 53.05L1820.37 33.95L1828.12 9.04999C1829.76 3.79999 1832.43 3.79999 1834.07 9.04999L1841.82 33.95L1847.77 53.05L1855.52 77.95C1857.16 83.2 1853.99 87.5 1848.49 87.5H1841.09H1841.1Z" fill="#FFFDC1"/>
                        <path d="M1831.5 97.47V66.5C1831.5 61 1835.7 58.11 1840.84 60.07L1862.66 68.41L1881.34 75.55L1903.16 83.89C1908.3 85.85 1908.3 89.07 1903.16 91.03L1881.34 99.37C1876.2 101.33 1867.8 104.55 1862.66 106.51L1840.84 114.85C1835.7 116.81 1831.5 113.92 1831.5 108.42V97.45V97.47Z" fill="#FFFDC1"/>
                        <path d="M1831.5 77.83C1831.5 83.33 1831.5 92.33 1831.5 97.83V108.8C1831.5 114.3 1827.3 117.19 1822.16 115.23L1800.34 106.89L1781.66 99.75L1759.84 91.41C1754.7 89.45 1754.7 86.23 1759.84 84.27L1781.66 75.93C1786.8 73.97 1795.2 70.75 1800.34 68.79L1822.16 60.45C1827.3 58.49 1831.5 61.38 1831.5 66.88V77.85V77.83Z" fill="#FFFDC1"/>
                        <path d="M182.73 672H201.26C206.35 672 209.19 676.3 207.55 681.55L204.23 692.2L198.28 711.3L194.96 721.95C193.32 727.2 190.65 727.2 189.01 721.95L185.69 711.3L179.74 692.2L176.42 681.55C174.78 676.3 177.62 672 182.71 672H182.73Z" fill="#FFFDC1"/>
                        <path d="M201.26 672H182.73C177.64 672 174.8 667.7 176.44 662.45L179.76 651.8L185.71 632.7L189.03 622.05C190.67 616.8 193.34 616.8 194.98 622.05L198.3 632.7L204.25 651.8L207.57 662.45C209.21 667.7 206.37 672 201.28 672H201.26Z" fill="#FFFDC1"/>
                        <path d="M192.27 681.98V661.04C192.27 655.54 196.47 652.65 201.61 654.61L210.31 657.94L228.99 665.08L237.69 668.41C242.83 670.37 242.83 673.59 237.69 675.55L228.99 678.88L210.31 686.02L201.61 689.35C196.47 691.31 192.27 688.42 192.27 682.92V681.98Z" fill="#FFFDC1"/>
                        <path d="M192.27 662.22C192.27 667.72 192.27 676.72 192.27 682.22V683.16C192.27 688.66 188.07 691.55 182.93 689.59L174.23 686.26C169.09 684.3 160.69 681.08 155.55 679.12L146.85 675.79C141.71 673.83 141.71 670.61 146.85 668.65L155.55 665.32L174.23 658.18L182.93 654.85C188.07 652.89 192.27 655.78 192.27 661.28V662.22Z" fill="#FFFDC1"/>
                        <path d="M952.67 692.5H967.89C972.08 692.5 974.17 696.8 972.53 702.05L970.85 707.45L964.92 726.55L963.24 731.95C961.61 737.2 958.94 737.2 957.31 731.95L955.63 726.55C954 721.3 951.33 712.7 949.7 707.45L948.02 702.05C946.39 696.8 948.48 692.5 952.66 692.5H952.67Z" fill="#FFFDC1"/>
                        <path d="M967.89 692.5H952.67C948.48 692.5 946.39 688.2 948.03 682.95L949.71 677.55C951.34 672.3 954.01 663.7 955.64 658.45L957.32 653.05C958.95 647.8 961.62 647.8 963.25 653.05L964.93 658.45C966.56 663.7 969.23 672.3 970.86 677.55L972.54 682.95C974.17 688.2 972.08 692.5 967.9 692.5H967.89Z" fill="#FFFDC1"/>
                        <path d="M960.5 701.11V683.86C960.5 679.12 964.7 676.85 969.84 678.82L973.66 680.29C978.8 682.26 987.2 685.48 992.34 687.45L996.16 688.92C1001.3 690.89 1001.3 694.11 996.16 696.08L992.34 697.55C987.2 699.52 978.8 702.74 973.66 704.71L969.84 706.18C964.7 708.15 960.5 705.88 960.5 701.14V701.11Z" fill="#FFFDC1"/>
                        <path d="M960.5 684.06V701.31C960.5 706.05 956.3 708.32 951.16 706.35L947.34 704.88L928.66 697.72L924.84 696.25C919.7 694.28 919.7 691.06 924.84 689.09L928.66 687.62L947.34 680.46L951.16 678.99C956.3 677.02 960.5 679.29 960.5 684.03V684.06Z" fill="#FFFDC1"/>
                        <path d="M493.1 131.5H520.5C526 131.5 529.16 135.8 527.53 141.05L519.78 165.95L513.83 185.05L506.08 209.95C504.44 215.2 501.77 215.2 500.13 209.95L492.38 185.05L486.43 165.95L478.68 141.05C477.04 135.8 480.21 131.5 485.71 131.5H493.11H493.1Z" fill="#FFFDC1"/>
                        <path d="M513.1 131.5H485.7C480.2 131.5 477.04 127.2 478.67 121.95L486.42 97.05L492.37 77.95L500.12 53.05C501.76 47.8 504.43 47.8 506.07 53.05L513.82 77.95C515.46 83.2 518.13 91.79 519.77 97.05L527.52 121.95C529.16 127.2 525.99 131.5 520.49 131.5H513.09H513.1Z" fill="#FFFDC1"/>
                        <path d="M503.5 141.47V110.5C503.5 105 507.7 102.11 512.84 104.07L534.66 112.41L553.34 119.55L575.16 127.89C580.3 129.85 580.3 133.07 575.16 135.03L553.34 143.37L534.66 150.51L512.84 158.85C507.7 160.81 503.5 157.92 503.5 152.42V141.45V141.47Z" fill="#FFFDC1"/>
                        <path d="M503.5 121.83C503.5 127.33 503.5 136.33 503.5 141.83V152.8C503.5 158.3 499.3 161.19 494.16 159.23L472.34 150.89L453.66 143.75L431.84 135.41C426.7 133.45 426.7 130.23 431.84 128.27L453.66 119.93L472.34 112.79L494.16 104.45C499.3 102.49 503.5 105.38 503.5 110.88V121.85V121.83Z" fill="#FFFDC1"/>
                        <path d="M863.479 544.429C866.504 544.696 869.233 541.791 869.573 537.94C869.913 534.089 867.735 530.751 864.71 530.484C861.684 530.216 858.955 533.122 858.615 536.973C858.276 540.824 860.453 544.162 863.479 544.429Z" fill="#8A9FAA"/>
                        <path d="M790 517.5H815V528.5H790C787.79 528.5 786 526.71 786 524.5V521.5C786 519.29 787.79 517.5 790 517.5Z" fill="#8A9FAA"/>
                        <path d="M790 544.5H815V555.5H790C787.79 555.5 786 553.71 786 551.5V548.5C786 546.29 787.79 544.5 790 544.5Z" fill="#8A9FAA"/>
                        <path d="M860.5 526H846.5C844.843 526 843.5 527.343 843.5 529V543C843.5 544.657 844.843 546 846.5 546H860.5C862.157 546 863.5 544.657 863.5 543V529C863.5 527.343 862.157 526 860.5 526Z" fill="#8A9FAA"/>
                        <path d="M819.5 507H829.5C845.51 507 858.5 519.99 858.5 536C858.5 552.56 845.06 566 828.5 566H819.5C816.74 566 814.5 563.76 814.5 561V512C814.5 509.24 816.74 507 819.5 507Z" fill="#8A9FAA"/>
                        <path d="M189.991 410H169.383L151.591 376.208H138.791V410H120.999V338.448C120.999 331.621 122.578 326.672 125.735 323.6C128.892 320.443 134.183 318.864 141.607 318.864H156.711C165.756 318.864 172.924 321.637 178.215 327.184C183.591 332.645 186.279 339.6 186.279 348.048C186.279 354.192 184.658 359.525 181.415 364.048C178.258 368.485 174.332 371.557 169.639 373.264L189.991 410ZM155.559 361.36C159.314 361.36 162.386 360.08 164.775 357.52C167.25 354.875 168.487 351.632 168.487 347.792C168.487 343.867 167.292 340.709 164.903 338.32C162.599 335.931 159.484 334.736 155.559 334.736H146.727C141.436 334.736 138.791 337.424 138.791 342.8V361.36H155.559ZM264.781 410H232.525C222.285 410 215.074 408.251 210.893 404.752C206.797 401.168 204.749 394.896 204.749 385.936V318.864H264.781V334.736H222.541V356.112H252.109L250.829 371.984H222.541V384.656C222.541 388.24 223.352 390.715 224.973 392.08C226.594 393.445 229.538 394.128 233.805 394.128H264.781V410ZM328.329 374.672H344.841C344.841 386.277 341.94 395.195 336.137 401.424C330.334 407.653 322.142 410.768 311.561 410.768C288.265 410.768 276.617 397.072 276.617 369.68V362C276.617 340.411 282.59 326.885 294.537 321.424C299.23 319.205 304.905 318.096 311.561 318.096C321.289 318.096 329.182 320.784 335.241 326.16C341.385 331.451 344.457 339.131 344.457 349.2H327.817C326.878 344.165 325.214 340.368 322.825 337.808C320.436 335.248 316.681 333.968 311.561 333.968C305.588 333.968 301.15 335.845 298.249 339.6C296.201 342.245 295.006 346.768 294.665 353.168C294.494 355.216 294.409 357.989 294.409 361.488V369.424C294.409 379.237 295.774 385.936 298.505 389.52C301.321 393.104 305.673 394.896 311.561 394.896C317.534 394.896 321.63 393.275 323.849 390.032C326.153 386.704 327.646 381.584 328.329 374.672ZM427.711 410H409.919V373.136H376.511V410H358.719V318.864H376.511V357.392H409.919V318.864H427.711V410ZM516.744 410H498.184L493.064 394.256H462.472L457.48 410H438.92L468.104 326.544C469.384 323.643 470.792 321.637 472.328 320.528C473.949 319.419 475.912 318.864 478.216 318.864C480.52 318.864 482.355 319.376 483.72 320.4C485.171 321.424 486.451 323.472 487.56 326.544L516.744 410ZM488.968 379.28L478.216 343.184L466.952 379.28H488.968ZM598.241 410H577.633L559.841 376.208H547.041V410H529.249V338.448C529.249 331.621 530.828 326.672 533.985 323.6C537.142 320.443 542.433 318.864 549.857 318.864H564.961C574.006 318.864 581.174 321.637 586.465 327.184C591.841 332.645 594.529 339.6 594.529 348.048C594.529 354.192 592.908 359.525 589.665 364.048C586.508 368.485 582.582 371.557 577.889 373.264L598.241 410ZM563.809 361.36C567.564 361.36 570.636 360.08 573.025 357.52C575.5 354.875 576.737 351.632 576.737 347.792C576.737 343.867 575.542 340.709 573.153 338.32C570.849 335.931 567.734 334.736 563.809 334.736H554.977C549.686 334.736 547.041 337.424 547.041 342.8V361.36H563.809ZM607.367 367.12V355.856C607.367 343.995 610.482 334.736 616.711 328.08C622.94 321.424 631.559 318.096 642.567 318.096C653.575 318.096 662.407 321.424 669.063 328.08C673.756 332.773 676.103 339.813 676.103 349.2H659.463C659.463 339.045 654.044 333.968 643.207 333.968C639.964 333.968 637.191 334.608 634.887 335.888C632.668 337.083 631.004 338.491 629.895 340.112C628.786 341.733 627.932 344.123 627.335 347.28C626.738 350.437 626.396 353.083 626.311 355.216C626.226 357.349 626.183 360.208 626.183 363.792C626.183 367.376 626.183 369.808 626.183 371.088C626.268 372.283 626.396 374.288 626.567 377.104C626.823 379.835 627.164 381.797 627.591 382.992C628.103 384.187 628.786 385.723 629.639 387.6C630.578 389.477 631.73 390.8 633.095 391.568C636.594 393.787 640.562 394.896 644.999 394.896C652.423 394.896 657.671 391.739 660.743 385.424V379.28H649.735V364.432H675.975V391.952C673.33 398.181 669.148 402.875 663.431 406.032C657.714 409.189 651.228 410.768 643.975 410.768C631.09 410.768 621.746 407.184 615.943 400.016C610.226 392.763 607.367 381.797 607.367 367.12ZM754.531 410H722.275C712.035 410 704.824 408.251 700.643 404.752C696.547 401.168 694.499 394.896 694.499 385.936V318.864H754.531V334.736H712.291V356.112H741.859L740.579 371.984H712.291V384.656C712.291 388.24 713.102 390.715 714.723 392.08C716.344 393.445 719.288 394.128 723.555 394.128H754.531V410ZM861.013 334.736H836.565V410H818.773V334.736H794.453V318.864H861.013V334.736ZM942.586 410H924.794V373.136H891.386V410H873.594V318.864H891.386V357.392H924.794V318.864H942.586V410ZM1022.53 410H990.275C980.035 410 972.824 408.251 968.643 404.752C964.547 401.168 962.499 394.896 962.499 385.936V318.864H1022.53V334.736H980.291V356.112H1009.86L1008.58 371.984H980.291V384.656C980.291 388.24 981.102 390.715 982.723 392.08C984.344 393.445 987.288 394.128 991.555 394.128H1022.53V410ZM417.314 555.12C417.314 563.739 414.157 570.523 407.842 575.472C401.527 580.336 393.463 582.768 383.65 582.768C375.885 582.768 368.375 580.635 361.122 576.368C357.538 574.149 354.594 571.035 352.29 567.024C349.986 562.928 348.834 558.277 348.834 553.072L364.962 552.304C364.962 556.912 366.925 560.496 370.85 563.056C374.775 565.616 379.127 566.896 383.906 566.896C394.573 566.896 399.906 563.141 399.906 555.632C399.906 549.488 396.279 545.861 389.026 544.752L374.178 543.216C366.754 542.107 360.866 539.461 356.514 535.28C352.162 531.099 349.986 525.083 349.986 517.232C349.986 509.381 353.101 502.896 359.33 497.776C365.559 492.656 373.41 490.096 382.882 490.096C392.439 490.096 400.119 492.528 405.922 497.392C411.725 502.171 414.626 508.357 414.626 515.952L398.754 516.72C397.303 509.296 392.311 505.584 383.778 505.584C378.573 505.584 374.477 506.693 371.49 508.912C368.589 511.131 367.138 513.776 367.138 516.848C367.138 519.835 368.205 522.224 370.338 524.016C372.471 525.723 375.117 526.789 378.274 527.216L392.866 528.752C409.165 530.971 417.314 539.76 417.314 555.12ZM498.315 532.208V539.12C498.315 554.395 495.414 565.488 489.611 572.4C483.894 579.312 474.678 582.768 461.963 582.768C449.248 582.768 440.032 579.312 434.315 572.4C428.683 565.488 425.867 554.267 425.867 538.736V532.08C425.867 517.915 428.726 507.376 434.443 500.464C440.246 493.552 449.376 490.096 461.835 490.096C474.379 490.096 483.595 493.595 489.483 500.592C495.371 507.589 498.315 518.128 498.315 532.208ZM480.523 538.736V534C480.523 525.808 479.499 519.28 477.451 514.416C475.062 508.784 469.942 505.968 462.091 505.968C454.155 505.968 448.992 508.784 446.603 514.416C444.64 519.024 443.659 525.552 443.659 534V538.736C443.659 549.744 445.195 557.168 448.267 561.008C449.462 562.629 451.211 564.037 453.515 565.232C455.904 566.341 458.72 566.896 461.963 566.896C465.291 566.896 468.107 566.341 470.411 565.232C472.715 564.123 474.507 562.757 475.787 561.136C477.067 559.515 478.048 557.381 478.731 554.736C479.926 550.555 480.523 545.221 480.523 538.736ZM580.818 490.864V550.768C580.818 560.667 577.447 568.475 570.706 574.192C564.05 579.909 555.815 582.768 546.002 582.768C536.189 582.768 527.911 579.909 521.17 574.192C514.514 568.475 511.186 560.667 511.186 550.768V490.864H528.978V550.128C528.978 555.76 530.514 559.984 533.586 562.8C536.743 565.531 540.882 566.896 546.002 566.896C551.122 566.896 555.261 565.531 558.418 562.8C561.575 559.984 563.154 555.76 563.154 550.128V490.864H580.818ZM668.366 582H647.758L629.966 548.208H617.166V582H599.374V510.448C599.374 503.621 600.953 498.672 604.11 495.6C607.267 492.443 612.558 490.864 619.982 490.864H635.086C644.131 490.864 651.299 493.637 656.59 499.184C661.966 504.645 664.654 511.6 664.654 520.048C664.654 526.192 663.033 531.525 659.79 536.048C656.633 540.485 652.707 543.557 648.014 545.264L668.366 582ZM633.934 533.36C637.689 533.36 640.761 532.08 643.15 529.52C645.625 526.875 646.862 523.632 646.862 519.792C646.862 515.867 645.667 512.709 643.278 510.32C640.974 507.931 637.859 506.736 633.934 506.736H625.102C619.811 506.736 617.166 509.424 617.166 514.8V533.36H633.934ZM729.204 546.672H745.716C745.716 558.277 742.815 567.195 737.012 573.424C731.209 579.653 723.017 582.768 712.436 582.768C689.14 582.768 677.492 569.072 677.492 541.68V534C677.492 512.411 683.465 498.885 695.412 493.424C700.105 491.205 705.78 490.096 712.436 490.096C722.164 490.096 730.057 492.784 736.116 498.16C742.26 503.451 745.332 511.131 745.332 521.2H728.692C727.753 516.165 726.089 512.368 723.7 509.808C721.311 507.248 717.556 505.968 712.436 505.968C706.463 505.968 702.025 507.845 699.124 511.6C697.076 514.245 695.881 518.768 695.54 525.168C695.369 527.216 695.284 529.989 695.284 533.488V541.424C695.284 551.237 696.649 557.936 699.38 561.52C702.196 565.104 706.548 566.896 712.436 566.896C718.409 566.896 722.505 565.275 724.724 562.032C727.028 558.704 728.521 553.584 729.204 546.672ZM820.906 582H788.65C778.41 582 771.199 580.251 767.018 576.752C762.922 573.168 760.874 566.896 760.874 557.936V490.864H820.906V506.736H778.666V528.112H808.234L806.954 543.984H778.666V556.656C778.666 560.24 779.477 562.715 781.098 564.08C782.719 565.445 785.663 566.128 789.93 566.128H820.906V582Z" fill="white"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_483_571">
                            <rect width="1921" height="1081" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
                <Image
                    src={smartphoneGIF}
                    alt={"animated flying smartphones, that occasionally pass by"}
                    id={styles.flyingSmartphones}
                ></Image>
            </div>
        )
    };
    // <Image
    //     priority = {true}
    //     id={styles.Hero}
    //     width={"1920"}
    //     height={"1080"}
    //     src={hero}
    //     alt="Animated hero, that shows the space with an earth with stars. Sometimes smartphones pass by"
    // ></Image>
    function BoxVerschwenderischerLebenstil() {
        return (
            <div className={styles.centered} style={{position:"relative"}}
                 id="ourLifestyle">
                <div className={styles.transparentBox} id={styles.smallBox}>
                    <h1 className={styles.headerFont} style={{fontSize: 60}}>
                        Unser verschwenderischer Lebensstil
                    </h1>

                    <text style={{fontSize: 40}}>
                        Drei Erden bräuchten wir, wenn alle so leben würden wie wir in Deutschland, sagt Statista.
                        Wahnsinn oder? Aber nicht nur das, in den letzten Jahren wurden noch immer 19-22 Millionen Smartphones in Deutschland
                        pro Jahr verkauft. Doch was passiert mit den alten Smartphones? Meistens bleiben sie in irgendwelchen
                        Schubladen liegen. Genau deshalb sollten wir uns einmal Gedanken machen, ob und wie jeder
                        Einzelne einen kleinen, aber feinen Beitrag zur Verbesserung der Welt liefern kann. Und was
                        ihr mit euren Handys machen könnt, das zeigen wir euch hier auf dieser Webseite!
                    </text>
                    <img src={'./ErdeRessourcenverbrauch.svg'} id={styles.earthRessources}/>
                </div>
            </div>
        )
    };

    function BoxRecyclingAlsLoesung() {
        return (
            <div className={styles.centered} id="recycling">
                <div className={styles.transparentBox} id={styles.smallBox}>
                    <h1 className={styles.headerFont} style={{fontSize: 60}}>
                        Recycling als Lösung
                    </h1>
                    <p style={{fontSize: 40}}>
                        Bitte hier Text für "Recycling als Lösung" einfügen.
                    </p>
                </div>
            </div>
        )
    };

    function BoxFacts() {
        return (
            <div className={styles.centered} id="facts">
                <div className={styles.transparentBox} id={styles.largeBox}>
                    <h1 className={stylesLayout.Text} style={{fontSize: 60}}>
                        Facts
                    </h1>
                    <div className={styles.container}>
                        <div className={styles.roundSquare}>210 Mio.</div>
                        <div className={styles.roundSquare}>2.5 Jahre</div>
                        <div className={styles.roundSquare}>5.3 Mrd.</div>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.infoBox}>Handys liegen in Deutschen Schubladen</div>
                        <div className={styles.infoBox}>nutzt ein Durchschnittsdeutscher sein Handy bis er sich ein neues kauft</div>
                        <div className={styles.infoBox}>Handys werden weltweit im Jahr weggeworfen</div>
                    </div>
                    <img src={'./handyMitRohstoffe.svg'} id={styles.handyRessources}/>
                </div>
            </div>
        )
    };

    function BoxInfografik() {
        return (
            <div className={styles.centered} id="infografik">
                <div className={styles.transparentBox} id={styles.largeBox}>
                    <p style={{fontSize: 50}}>
                        Wenn du auf das Handy klickst kannst du dir den Recycling Prozess genauer anschauen
                    </p>
                    <button id={styles.startSquare}>Starte von vorne</button>
                    <ImageChange></ImageChange>
                </div>
            </div>
        )
    };

    const handleFormButtonClick = () => {
        window.location.href = './formular/page.tsx';
    };

    function ButtonToFormPage() {
        return (
            <div className={styles.centered} id="contactButton">
                <a href="/formular">
                    <button id={styles.buttonToForm}>
                        ZUM KONTAKTFORMULAR
                    </button>
                </a>
            </div>
        )
    };
    function HeroButton(){
        return(
            <>
                <div className={styles.centered} style={{transform: "translateY(-400px)"}}>
                    <Button to={"ourLifestyle"} activeClass="active" className={styles.HeroButton}>
                        <Link activeClass="active" to="ourLifestyle" spy={true} smooth={true} offset={50} duration={500}>
                            <div >
                                <svg width="150" height="95" viewBox="0 0 150 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect id={styles.ButtonForm} width="150" height="95" rx="25" fill="#8A9FAA" fillOpacity="0.5"/>
                                    <rect id={styles.ArrowLeft} x="32.5978" y="39.2603" width="13.3937" height="53.575" rx="6.69687" transform="rotate(-50 32.5978 39.2603)" fill="white"/>
                                    <rect id={styles.ArrowRight} x="105.449" y="29" width="13.3937" height="53.575" rx="6.69687" transform="rotate(50 105.449 29)" fill="white"/>
                                </svg>
                            </div>
                        </Link>
                    </Button>
                </div>
            </>
        )
    };

    return(
        <main>
            <HeaderMenu></HeaderMenu>
            <Hero></Hero>
            <HeroButton></HeroButton>
            <BoxVerschwenderischerLebenstil></BoxVerschwenderischerLebenstil>
            <BoxRecyclingAlsLoesung></BoxRecyclingAlsLoesung>
            <BoxFacts></BoxFacts>
            <BoxInfografik></BoxInfografik>
            <ButtonToFormPage></ButtonToFormPage>
        </main>
    )
}
