#/bin/bash

COUNT=0

while IFS= read -r line
do
  line=$(echo $line | sed -e 's/:\ /\ /g')
  line=$(echo $line | sed -e 's/-/\ /g')
  
  read min max char pw <<< $line;
  occ=$(grep -o "$char" <<<"$pw" | wc -l)

  if [[ $min -le $occ && $occ -le $max ]] ; then
    COUNT=$((COUNT + 1))
  fi
done < input.txt

echo $COUNT