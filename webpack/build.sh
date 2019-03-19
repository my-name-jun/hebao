#!/usr/bin/env bash

echo "请输入提交的原因："
read REASON

if [ "$REASON"x = ""x ]; then
echo '请输入提交的原因'
exit 0
fi

rm -rf  /workSpace/rh/zsrh-wenjuandiaocha20180905/nodejs/zsrh-wenjuandiaocha-nodejs-src/public/sina
npm run build
cp -r /workSpace/rh/jynj/dist /workSpace/rh/zsrh-wenjuandiaocha20180905/nodejs/zsrh-wenjuandiaocha-nodejs-src/public/sina


cd /workSpace/rh/zsrh-wenjuandiaocha20180905/nodejs/zsrh-wenjuandiaocha-nodejs-src/

sh build.sh

