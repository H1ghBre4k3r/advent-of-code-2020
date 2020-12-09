// Task 1
a=document.getElementsByTagName("pre")[c=0].innerHTML.split("\n");for(i in a){c+=a[i][(i*3)%a[i].length]=="#"}
// Task 2
a=document.getElementsByTagName("pre")[0].innerHTML.split("\n");[[r=1,1],[1,3],[1,5],[1,7],[2,0.5]].forEach(([x,y])=>{c=i=0;for(;z=a[i];i+=x){c+=z[i*y%z.length]=="#"}r*=c})