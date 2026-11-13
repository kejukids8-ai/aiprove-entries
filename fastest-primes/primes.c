#include <stdio.h>
#include <stdlib.h>
static unsigned char c[5000002];
int main(){ long n; if(scanf("%ld",&n)!=1) return 0; long cnt=0;
 for(long i=2;i<=n;i++){ if(!c[i]){ cnt++; for(long j=i*i;j<=n;j+=i) c[j]=1; } }
 printf("%ld\n",cnt); return 0; }
