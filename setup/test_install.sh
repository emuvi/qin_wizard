echo "Installing qin_sunset"
if [ ! -d "qin_sunset" ]; then
    git clone https://github.com/pointel-com-br/qin_sunset
fi
cd qin_sunset
git pull
./put_test.sh
cd ..

echo "Installing qin_soul"
if [ ! -d "qin_soul" ]; then
    git clone https://github.com/pointel-com-br/qin_soul
fi
cd qin_soul
git pull
./put_test.sh
cd ..

echo "Installing qin_desk"
if [ ! -d "qin_desk" ]; then
    git clone https://github.com/pointel-com-br/qin_desk
fi
cd qin_desk
git pull
./put_test.sh
cd ..

echo "Installing qin_case"
if [ ! -d "qin_case" ]; then
    git clone https://github.com/pointel-com-br/qin_case
fi
cd qin_case
git pull
./put_test.sh
cd ..

echo "Installing qia_argo"
if [ ! -d "qia_argo" ]; then
    git clone https://github.com/pointel-com-br/qia_argo
fi
cd qia_argo
git pull
./put_test.sh
cd ..

echo "Installing qia_admister"
if [ ! -d "qia_admister" ]; then
    git clone https://github.com/pointel-com-br/qia_admister
fi
cd qia_admister
git pull
./put_test.sh
cd ..

echo "Installing qia_ad_people"
if [ ! -d "qia_ad_people" ]; then
    git clone https://github.com/pointel-com-br/qia_ad_people
fi
cd qia_ad_people
git pull
./put_test.sh
cd ..

echo "Installing qia_ad_sales"
if [ ! -d "qia_ad_sales" ]; then
    git clone https://github.com/pointel-com-br/qia_ad_sales
fi
cd qia_ad_sales
git pull
./put_test.sh
cd ..