function alternatingSums(a) {
    weights = a.map((v,i)=>((i%2!=0)?[0,v]:[v,0]));
    return [weights.map((v)=> v= v[0]).reduce((ac,v)=>ac+v),weights.map((v)=> v= v[1]).reduce((ac,v)=>ac+v)]
}
