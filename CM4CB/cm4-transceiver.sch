EESchema Schematic File Version 4
EELAYER 30 0
EELAYER END
$Descr A4 11693 8268
encoding utf-8
Sheet 2 6
Title ""
Date ""
Rev ""
Comp ""
Comment1 ""
Comment2 ""
Comment3 ""
Comment4 ""
$EndDescr
$Comp
L CM4CB:H5007NL U?
U 1 1 5FB246A9
P 9250 1750
AR Path="/5FB23E15/5FB246A9" Ref="U?"  Part="1" 
AR Path="/5FB3A076/5FB246A9" Ref="U?"  Part="1" 
AR Path="/5FB44CBB/5FB246A9" Ref="U?"  Part="1" 
AR Path="/5FB4627D/5FB246A9" Ref="U?"  Part="1" 
AR Path="/5FB47026/5FB246A9" Ref="U?"  Part="1" 
F 0 "U?" H 9275 2615 50  0000 C CNN
F 1 "H5007NL" H 9275 2524 50  0000 C CNN
F 2 "" H 9250 2600 50  0001 C CNN
F 3 "https://datasheetspdf.com/pdf-file/808804/PULSE/H5007NL/1" H 9250 2600 50  0001 C CNN
	1    9250 1750
	1    0    0    -1  
$EndComp
Text HLabel 9700 1250 2    50   Input ~ 0
A+
Text HLabel 9700 1350 2    50   Input ~ 0
A-
Text HLabel 9700 1600 2    50   Input ~ 0
B+
Text HLabel 9700 1700 2    50   Input ~ 0
B-
Text HLabel 9700 1950 2    50   Input ~ 0
C+
Text HLabel 9700 2050 2    50   Input ~ 0
C-
Text HLabel 9700 2300 2    50   Input ~ 0
D+
Text HLabel 9700 2400 2    50   Input ~ 0
D-
$Comp
L Device:C C?
U 1 1 5FBE16E5
P 10500 2500
F 0 "C?" H 10615 2546 50  0000 L CNN
F 1 "0.1uF" H 10615 2455 50  0000 L CNN
F 2 "" H 10538 2350 50  0001 C CNN
F 3 "~" H 10500 2500 50  0001 C CNN
	1    10500 2500
	0    -1   -1   0   
$EndComp
$Comp
L Device:C C?
U 1 1 5FBE2B37
P 10500 2000
F 0 "C?" H 10615 2046 50  0000 L CNN
F 1 "0.1uF" H 10615 1955 50  0000 L CNN
F 2 "" H 10538 1850 50  0001 C CNN
F 3 "~" H 10500 2000 50  0001 C CNN
	1    10500 2000
	0    -1   -1   0   
$EndComp
$Comp
L Device:C C?
U 1 1 5FBE2F87
P 10500 1500
F 0 "C?" H 10615 1546 50  0000 L CNN
F 1 "0.1uF" H 10615 1455 50  0000 L CNN
F 2 "" H 10538 1350 50  0001 C CNN
F 3 "~" H 10500 1500 50  0001 C CNN
	1    10500 1500
	0    -1   -1   0   
$EndComp
$Comp
L Device:C C?
U 1 1 5FBE33DA
P 10500 1050
F 0 "C?" H 10615 1096 50  0000 L CNN
F 1 "0.1uF" H 10615 1005 50  0000 L CNN
F 2 "" H 10538 900 50  0001 C CNN
F 3 "~" H 10500 1050 50  0001 C CNN
	1    10500 1050
	0    -1   -1   0   
$EndComp
Wire Wire Line
	10650 2500 10850 2500
Wire Wire Line
	10850 2500 10850 2000
Wire Wire Line
	10650 2000 10850 2000
Wire Wire Line
	10850 2000 10850 1750
Wire Wire Line
	10850 1050 10650 1050
Connection ~ 10850 2000
Wire Wire Line
	10650 1500 10850 1500
Connection ~ 10850 1500
Wire Wire Line
	10850 1500 10850 1050
$Comp
L power:GND #PWR?
U 1 1 5FBF330E
P 10950 1750
F 0 "#PWR?" H 10950 1750 30  0001 C CNN
F 1 "GND" H 10950 1680 30  0001 C CNN
F 2 "" H 10950 1750 50  0001 C CNN
F 3 "" H 10950 1750 50  0001 C CNN
	1    10950 1750
	0    -1   -1   0   
$EndComp
Connection ~ 10850 1750
Wire Wire Line
	10850 1750 10850 1500
Wire Wire Line
	10850 1750 10950 1750
Wire Wire Line
	9700 2200 10350 2200
Wire Wire Line
	10350 2200 10350 2500
Wire Wire Line
	9700 1850 10350 1850
Wire Wire Line
	10350 1850 10350 2000
Wire Wire Line
	9700 1500 10350 1500
Wire Wire Line
	9700 1150 10350 1150
Wire Wire Line
	10350 1150 10350 1050
$EndSCHEMATC
