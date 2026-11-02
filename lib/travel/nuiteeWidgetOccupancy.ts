export type SearchRoom = { adults: number; children: number[] };
export type RoomAllocation = { mode: 'allocate'; roomCount: number; adults: number; children: number[] };
export type WidgetOccupancy = RoomAllocation | { mode: 'exact'; rooms: SearchRoom[] };

/** The widget may give group totals. Never turn those into a guessed room split. */
export function readWidgetOccupancy(data: { occupancies?: string; rooms?: number }): WidgetOccupancy {
  if (typeof data.occupancies !== 'string' || data.occupancies.length > 4096) throw new Error('occupancy');
  const values = JSON.parse(atob(data.occupancies));
  if (!Array.isArray(values) || !values.length || values.length > 6 || values.some(room =>
    !room || !Number.isInteger(room.adults) || room.adults < 1 || room.adults > 12 ||
    !Array.isArray(room.children) || room.children.some((age: number) => !Number.isInteger(age) || age < 0 || age > 17) ||
    (room.rooms !== undefined && (!Number.isInteger(room.rooms) || room.rooms < 1 || room.rooms > 6)))) throw new Error('occupancy');
  let roomCount = values.reduce((total, room) => total + (room.rooms ?? 1), 0);
  if (data.rooms !== undefined && data.rooms !== roomCount) {
    if (values.length !== 1 || values[0].rooms !== undefined || !Number.isInteger(data.rooms)) throw new Error('room count');
    roomCount = data.rooms;
  }
  const adults = values.reduce((total, room) => total + room.adults, 0);
  const children = values.flatMap(room => room.children) as number[];
  if (roomCount < 1 || roomCount > 6 || adults < roomCount || adults > 12 || children.length > roomCount * 6) throw new Error('guest count');
  if (values.length !== roomCount || values.some(room => (room.rooms ?? 1) !== 1)) return { mode: 'allocate', roomCount, adults, children };
  if (values.some(room => room.children.length > 6)) throw new Error('children');
  return { mode: 'exact', rooms: values.map(room => ({ adults: room.adults, children: [...room.children] })) };
}

/** Every adult count and child assignment must be chosen explicitly by the visitor. */
export function completeRoomAllocation(plan: RoomAllocation, adults: number[], childRooms: number[]): SearchRoom[] | null {
  if (adults.length !== plan.roomCount || adults.some(count => !Number.isInteger(count) || count < 1 || count > 12) ||
      adults.reduce((sum, count) => sum + count, 0) !== plan.adults || childRooms.length !== plan.children.length ||
      childRooms.some(index => !Number.isInteger(index) || index < 0 || index >= plan.roomCount)) return null;
  const rooms = adults.map(count => ({ adults: count, children: [] as number[] }));
  plan.children.forEach((age, index) => rooms[childRooms[index]].children.push(age));
  return rooms.some(room => room.children.length > 6) ? null : rooms;
}
