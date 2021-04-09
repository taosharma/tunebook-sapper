import sortProgramme from "./sortProgramme";
const unsortedSessions = [
  { sessionName: "", sessionRef: "", week: 1, day: 4 },
  { sessionName: "", sessionRef: "", week: 3, day: 2 },
  { sessionName: "", sessionRef: "", week: 3, day: 4 },
  { sessionName: "", sessionRef: "", week: 1, day: 2 },
  { sessionName: "", sessionRef: "", week: 2, day: 4 },
  { sessionName: "", sessionRef: "", week: 2, day: 1 },
];
const sortedSessions = [
  [
    { sessionName: "", sessionRef: "", week: 1, day: 2 },
    { sessionName: "", sessionRef: "", week: 1, day: 4 },
  ],
  [
    { sessionName: "", sessionRef: "", week: 2, day: 1 },
    { sessionName: "", sessionRef: "", week: 2, day: 4 },
  ],
  [
    { sessionName: "", sessionRef: "", week: 3, day: 2 },
    { sessionName: "", sessionRef: "", week: 3, day: 4 },
  ],
];
describe("sort programme function", () => {
  test("should sort sessions by week and day", () => {
    const data = unsortedSessions;
    const expected = sortedSessions;
    const actual = sortProgramme(data);
    expect(actual).toEqual(expected);
  });
});
