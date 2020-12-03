#/bin/bash

COUNT=0

while IFS= read -r line
do
  line=$(echo $line | sed -e 's/:\ /\ /g')
  line=$(echo $line | sed -e 's/-/\ /g')
  
  read a b char pw <<< $line;

  a=$((a - 1))
  b=$((b - 1))

  x=${pw:$a:1}
  y=${pw:$b:1}

  if [[ "$x" == "$char"  ]] ; then  
    if [[ "$y" != "$char" ]] ; then
      COUNT=$((COUNT + 1))
    fi
  elif [[ "$y" == "$char" ]] ; then 
    if [[ "$x" != "$char"  ]] ; then 
      COUNT=$((COUNT + 1))
    fi
  fi

# Don't even ask me, why this does not work. If have absolutely no idea 
# Bash is a B****  
#   if [[ [[ "$x" == "$char" ]] && [[ "$y" != "$char" ]] ]]  ||  [[ [[ "$x" != "$char" ]] && [[ "$y" == "$char" ]] ]] ; then
#     COUNT=$((COUNT + 1))
#   fi

done < input.txt

echo $COUNT