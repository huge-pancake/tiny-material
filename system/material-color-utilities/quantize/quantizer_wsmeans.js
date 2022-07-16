import{LabPointProvider}from"./lab_point_provider";const MAX_ITERATIONS=10,MIN_MOVEMENT_DISTANCE=3;class QuantizerWsmeans{static quantize(r,e,t){const n=new Map,a=new Array,o=new Array,s=new LabPointProvider;let l=0;for(let t=0;t<r.length;t++){var i=r[t],f=n.get(i);void 0===f?(l++,a.push(s.fromInt(i)),o.push(i),n.set(i,1)):n.set(i,f+1)}const h=new Array;for(let t=0;t<l;t++){var c=o[t],c=n.get(c);void 0!==c&&(h[t]=c)}let d=Math.min(t,l);0<e.length&&(d=Math.min(d,e.length));const A=new Array;for(let t=0;t<e.length;t++)A.push(s.fromInt(e[t]));var M=d-A.length;if(0===e.length&&0<M)for(let t=0;t<M;t++){var L=100*Math.random(),Q=201*Math.random()-100,R=201*Math.random()-100;A.push(new Array(L,Q,R))}const w=new Array;for(let t=0;t<l;t++)w.push(Math.floor(Math.random()*d));const p=new Array;for(let r=0;r<d;r++){p.push(new Array);for(let t=0;t<d;t++)p[r].push(0)}const u=new Array;for(let r=0;r<d;r++){u.push(new Array);for(let t=0;t<d;t++)u[r].push(new DistanceAndIndex)}const v=new Array;for(let t=0;t<d;t++)v.push(0);for(let t=0;t<MAX_ITERATIONS;t++){for(let r=0;r<d;r++){for(let t=r+1;t<d;t++){var y=s.distance(A[r],A[t]);u[t][r].distance=y,u[t][r].index=r,u[r][t].distance=y,u[r][t].index=t}u[r].sort();for(let t=0;t<d;t++)p[r][t]=u[r][t].index}let n=0;for(let t=0;t<l;t++){var I,m=a[t],g=w[t],V=A[g],E=s.distance(m,V);let r=E,e=-1;for(let t=0;t<d;t++)u[g][t].distance>=4*E||(I=s.distance(m,A[t]))<r&&(r=I,e=t);-1!==e&&Math.abs(Math.sqrt(r)-Math.sqrt(E))>MIN_MOVEMENT_DISTANCE&&(n++,w[t]=e)}if(0===n&&0!==t)break;const q=new Array(d).fill(0),z=new Array(d).fill(0),C=new Array(d).fill(0);for(let t=0;t<d;t++)v[t]=0;for(let t=0;t<l;t++){var N=w[t],T=a[t],_=h[t];v[N]+=_,q[N]+=T[0]*_,z[N]+=T[1]*_,C[N]+=T[2]*_}for(let t=0;t<d;t++){var x,b,D=v[t];0===D?A[t]=[0,0,0]:(x=q[t]/D,b=z[t]/D,D=C[t]/D,A[t]=[x,b,D])}}const O=new Map;for(let t=0;t<d;t++){var P,S=v[t];0!==S&&(P=s.toInt(A[t]),O.has(P)||O.set(P,S))}return O}}class DistanceAndIndex{constructor(){this.distance=-1,this.index=-1}}export{QuantizerWsmeans};