// Public illustrative scenarios, distinct from approved contractual terms.
const scenarios:Record<string,{target:number;ticket:number;rate:number;months:number;first:number}> = {
 aqma:{target:150000,ticket:10000,rate:15,months:36,first:8},
 cliniqeo:{target:150000,ticket:1000,rate:10,months:36,first:6}
};
export function proposedLoan(code:string):{target:number;ticket:number;rate:number;months:number;first:number}|undefined{return scenarios[code];}
