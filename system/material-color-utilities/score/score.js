import{Cam16}from"../hct/cam16";import*as utils from"../utils/color_utils";import*as math from"../utils/math_utils";class Score{constructor(){}static score(r,e=!1){let t=0;for(const F of r.values())t+=F;const o=new Map,a=new Map,s=new Array(360).fill(0);for(var[c,n]of r.entries()){var n=n/t,O=(o.set(c,n),Cam16.fromInt(c)),c=(a.set(c,O),Math.round(O.hue));s[c]+=n}const f=new Map;for(var[i,T]of a.entries()){var _=Math.round(T.hue);let e=0;for(let r=_-15;r<_+15;r++){var l=math.sanitizeDegreesInt(r);e+=s[l]}f.set(i,e)}const m=new Map;for(var[C,R]of a.entries()){var u=100*f.get(C)*Score.WEIGHT_PROPORTION,A=R.chroma<Score.TARGET_CHROMA?Score.WEIGHT_CHROMA_BELOW:Score.WEIGHT_CHROMA_ABOVE,R=(R.chroma-Score.TARGET_CHROMA)*A;m.set(C,u+R)}r=e?Score.filterContent(a):Score.filter(f,a);const E=new Map;for(const p of r){let r=!1;var S,h=a.get(p).hue;for([S]of E){var M=a.get(S).hue;if(math.differenceDegrees(h,M)<15){r=!0;break}}r||E.set(p,m.get(p))}const H=Array.from(E.entries()),I=(H.sort((r,e)=>e[1]-r[1]),H.map(r=>r[0]));return 0===I.length&&I.push(4282549748),I}static filter(r,e){const t=new Array;for(var[o,a]of e.entries()){var s=r.get(o);a.chroma>=Score.CUTOFF_CHROMA&&utils.lstarFromArgb(o)>=Score.CUTOFF_TONE&&s>=Score.CUTOFF_EXCITED_PROPORTION&&t.push(o)}return t}static filterContent(r){return Array.from(r.keys())}}Score.TARGET_CHROMA=48,Score.WEIGHT_PROPORTION=.7,Score.WEIGHT_CHROMA_ABOVE=.3,Score.WEIGHT_CHROMA_BELOW=.1,Score.CUTOFF_CHROMA=15,Score.CUTOFF_TONE=10,Score.CUTOFF_EXCITED_PROPORTION=.01;export{Score};