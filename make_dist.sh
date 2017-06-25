#!/bin/sh

echo "Copy production files to ./dist directory"
echo "----------"

echo "cp ./index.html ./dist/"
cp ./index.html ./dist/
if [ $? -eq 0 ]
then
  echo "===>  OK"
else
  echo "==> FAILED"
  exit -1
fi

echo "cp ./cdm.ico ./dist/"
cp ./cdm.ico ./dist/
if [ $? -eq 0 ]
then
  echo "===>  OK"
else
  echo "==> FAILED"
  exit -1
fi

d=./dist/assets/css/
file=./assets/css/main.min.css
echo "cp -R $file $d"
test -d "$d" || mkdir -p "$d" && cp $file "$d"
if [ $? -eq 0 ]
then
  echo "===>  OK"
else
  echo "==> FAILED"
  exit -1
fi

d=./dist/assets/img/
file=./assets/img/*
echo "cp -R $file $d"
test -d "$d" || mkdir -p "$d" && cp $file "$d"
if [ $? -eq 0 ]
then
  echo "===>  OK"
else
  echo "==> FAILED"
  exit -1
fi

d=./dist/assets/js/
file=./assets/js/functions.min.js
echo "cp -R $file $d"
test -d "$d" || mkdir -p "$d" && cp $file "$d"
if [ $? -eq 0 ]
then
  echo "===>  OK"
else
  echo "==> FAILED"
  exit -1
fi

d=./dist/assets/js/vendor/
file=./assets/js/vendor/jquery-2.2.4.min.js
echo "cp -R $file $d"
test -d "$d" || mkdir -p "$d" && cp $file "$d"
if [ $? -eq 0 ]
then
  echo "===>  OK"
else
  echo "==> FAILED"
  exit -1
fi

d=./dist/assets/videos/
file=./assets/videos/HOTEP_A2_2.mp4
echo "cp -R $file $d"
test -d "$d" || mkdir -p "$d" && cp $file "$d"
if [ $? -eq 0 ]
then
  echo "===>  OK"
else
  echo "==> FAILED"
  exit -1
fi

exit 0
