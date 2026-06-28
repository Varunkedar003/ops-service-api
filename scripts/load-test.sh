#!/bin/bash

URL="http://localhost:3000/api/v1/health"
REQUESTS=1000

echo "Starting load test..."

for ((i=1;i<=REQUESTS;i++))
do
    curl -s "$URL" > /dev/null
done

echo "Completed $REQUESTS requests."
