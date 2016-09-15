#!/bin/bash

i=0
length=`cat beverages.json|jq length`
while [ $i -le $length ]
do
b=`cat beverages.json|jq ".[$i]"`
curl -XPOST "http://localhost:9200/shopping/beverages/" -d "$b"
((i++))
done







