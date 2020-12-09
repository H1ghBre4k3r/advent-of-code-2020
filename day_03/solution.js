// Task 1
a=document.getElementsByTagName("pre")[c=0].innerHTML.split("\n");for(i in a){c+=a[i][(i*3)%a[i].length]=="#"}
// Task 2
a=document.getElementsByTagName("pre")[0].innerHTML.split("\n");[[r=1,1],[1,3],[1,5],[1,7],[2,0.5]].forEach(e=>{c=i=0;for(;i in a;i+=e[0]){c+=a[i][(i*e[1])%a[i].length]=="#"}r*=c})