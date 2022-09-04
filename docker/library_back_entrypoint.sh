#!/bin/bash

# Exporting all environment variables to use in script
env | sed 's/^\(.*\)$/ \1/g' > /root/env

echo '----------> INSTALL PACKAGES'
pip install -r requirements.txt

echo '----------> RUNNING MIGRATIONS'
python3 manage.py migrate

echo '----------> RUNNING SERVER'
if $CI; then
   echo '----------> STARTING TESTING'
   python3 manage.py test
else
  echo '----------> STARTING SERVER'
  # python3 manage.py runserver
  gunicorn src.wsgi:application --bind 0.0.0.0:$PORT
fi
