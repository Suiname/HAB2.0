#!/bin/bash
_now=$(date +"%m_%d_%Y")
_file="backups/$_now.archive"
echo "Starting backup to $_file..."
mongodump --db HAB2 --archive=$_file
