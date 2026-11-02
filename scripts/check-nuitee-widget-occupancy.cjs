const {test}=require('node:test');
const assert=require('node:assert/strict');
const {readWidgetOccupancy,completeRoomAllocation}=require('../lib/travel/nuiteeWidgetOccupancy');
const encode=values=>btoa(JSON.stringify(values));

test('one-room and explicit per-room searches preserve all adults and child ages',()=>{
  for(const rooms of [[{adults:2,children:[8]}],[{adults:2,children:[5]},{adults:1,children:[]}]]) {
    assert.deepEqual(readWidgetOccupancy({rooms:rooms.length,occupancies:encode(rooms)}),{mode:'exact',rooms});
  }
});
test('both official grouped formats require explicit room allocation',()=>{
  for(const data of [{rooms:2,occupancies:encode([{adults:3,children:[8]}])},{rooms:2,occupancies:encode([{adults:3,children:[8],rooms:2}])}]) {
    const plan=readWidgetOccupancy(data);
    assert.deepEqual(plan,{mode:'allocate',roomCount:2,adults:3,children:[8]});
    assert.equal(completeRoomAllocation(plan,[0,0],[-1]),null);
    assert.equal(completeRoomAllocation(plan,[2,2],[0]),null);
    assert.equal(completeRoomAllocation(plan,[2,1],[-1]),null);
    assert.deepEqual(completeRoomAllocation(plan,[2,1],[1]),[{adults:2,children:[]},{adults:1,children:[8]}]);
  }
});
test('invalid ages, missing rooms, inconsistent counts and oversized groups cannot quote',()=>{
  for(const data of [{occupancies:'broken'},{rooms:3,occupancies:encode([{adults:2,children:[]}])},{occupancies:encode([{adults:2,children:[18]}])},{occupancies:encode([{adults:13,children:[]}])},{rooms:3,occupancies:encode([{adults:2,children:[]},{adults:1,children:[]}])}]) {
    assert.throws(()=>readWidgetOccupancy(data));
  }
});
