#!/bin/bash

let "t1 = ((5 + 3, 7 - 1, 15 - 4))"
echo "t1 = $t1"  # t1 = 11

let "t2 = ((a = 9, 15 / 3))"
echo "t2 = $t2    a = $a"  # t2 = 5    a = 9
