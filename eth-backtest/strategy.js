// Mean-reversion vs EMA(30), fee-aware exit.
const fs=require('fs');
const rows=fs.readFileSync(__dirname+'/bars.csv','utf8').trim().split('\n').slice(1);
const bars=rows.map(r=>r.split(',').map(Number));
let pos=0, entry=0, cash=0, ema=bars[0][4], k=2/31, peak=0, dd=0;
for(const b of bars){const c=b[4]; ema=ema+(c-ema)*k;
 if(pos===0 && c<ema*0.998){pos=1;entry=c;}
 else if(pos===1 && c>ema){pos=0;cash+=c-entry;}
 peak=Math.max(peak,cash); dd=Math.max(dd,peak-cash);}
console.log('net PnL:',cash,'maxDD:',dd);
