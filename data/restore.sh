#!/bin/bash
echo "Type the location of the backup file that you want to restore:"

read archiveName
mongorestore --archive=$archiveName
