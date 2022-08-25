#!/bin/bash

# Exporting all environment variables to use in script
env | sed 's/^\(.*\)$/ \1/g' > /root/env

echo '----------> INSTALL PACKAGES'
pip install -r requirements.txt

echo '----------> RUNNING MIGRATIONS'
python3 manage.py migrate

echo '----------> RUNNING SERVER'
python3 manage.py runserver 0.0.0.0:8000