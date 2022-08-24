#!/bin/bash

# Exporting all environment variables to use in script
env | sed 's/^\(.*\)$/ \1/g' > /root/env

# Waiting postgres to continue script
function_postgres_ready() {
python << END
import socket
import time
import os

port = int(os.environ["POSTGRES_PORT"])

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

s.connect(('db', port))
s.close()
END
}

echo '----------> INSTALL PACKAGES'
pip install -r requirements.txt

until function_postgres_ready; do
  >&2 echo "----------> WAITING POSTGRES..."
  sleep 1
done
echo "----------> POSTGRES IS UP"

echo '----------> RUNNING MIGRATIONS'
python3 manage.py migrate

echo '----------> RUNNING SERVER'
python3 manage.py runserver 0.0.0.0:8000