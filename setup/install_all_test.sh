#!/bin/bash

current_dir_name=$(basename "$(pwd)")

if [ "$current_dir_name" != "Code" ]; then
  echo "Error: The current directory is not the 'Code' root."
  echo "Please navigate to the 'Code' root directory to continue."
  exit 1
fi

echo "Installing qin_sunset"
if [ ! -d "qin_sunset" ]; then
    git clone https://github.com/pointel-com-br/qin_sunset
fi
cd qin_sunset
git pull
python put_test.sh
cd ..

echo "Installing qin_soul"
if [ ! -d "qin_soul" ]; then
    git clone https://github.com/pointel-com-br/qin_soul
fi
cd qin_soul
git pull
python put_test.sh
cd ..

echo "Installing qin_desk"
if [ ! -d "qin_desk" ]; then
    git clone https://github.com/pointel-com-br/qin_desk
fi
cd qin_desk
git pull
python put_test.sh
cd ..

echo "Installing qin_case"
if [ ! -d "qin_case" ]; then
    git clone https://github.com/pointel-com-br/qin_case
fi
cd qin_case
git pull
python put_test.sh
cd ..

echo "Installing qia_ab_desk"
if [ ! -d "qia_ab_desk" ]; then
    git clone https://github.com/pointel-com-br/qia_ab_desk
fi
cd qia_ab_desk
git pull
python put_test.sh
cd ..

echo "Installing qia_admister"
if [ ! -d "qia_admister" ]; then
    git clone https://github.com/pointel-com-br/qia_admister
fi
cd qia_admister
git pull
python put_test.sh
cd ..

echo "Installing qia_ad_people"
if [ ! -d "qia_ad_people" ]; then
    git clone https://github.com/pointel-com-br/qia_ad_people
fi
cd qia_ad_people
git pull
python put_test.sh
cd ..

echo "Installing qia_ad_sales"
if [ ! -d "qia_ad_sales" ]; then
    git clone https://github.com/pointel-com-br/qia_ad_sales
fi
cd qia_ad_sales
git pull
python put_test.sh
cd ..