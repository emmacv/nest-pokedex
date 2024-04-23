#!/usr/bin/bash

ENV_FILE=".env"

cat << EOF >> $ENV_FILE
MONGO_DB=mongodb://localhost:27017/nest-pokemon
MONGO_DB_URI=mongodb://localhost:27017/nest-pokemon
PORT=3000
A_SECRET_KEY=secret
EOF
echo "Environment file generated"
