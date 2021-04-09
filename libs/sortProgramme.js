// export default function sortProgramme(programme) {
//   let weekNumber = 0;
//   let array = [];
//   // Find number of weeks
//   for (let i = 0; i < programme.length; i++) {
//     if (programme[i].week > weekNumber) {
//       weekNumber = programme[i].week;
//     }
//   }
//   // Create a sub array for each week
//   for (let i = 0; i < weekNumber; i++) {
//     array.push([]);
//   }
//   //  Push a session to it's respective array based on week number
//   programme.forEach((session) => {
//     array[session.week - 1].push(session);
//     return;
//   });
//   // Sort weekly sessions by day number
//   const sortedProgrammes = array.map((week) => {
//     return week.sort((a, b) => a.day - b.day);
//   });
//   return sortedProgrammes;
// }

export default function sortProgramme(programme) {
  const weeksArray = programme.reduce((sortedProgrammes, currentSession) => {
    const weekIndex = currentSession.week - 1;
    if (sortedProgrammes[weekIndex]) {
      const updatedWeek = [...sortedProgrammes[weekIndex], currentSession];

      return [
        ...sortedProgrammes.slice(0, weekIndex),
        updatedWeek,
        ...sortedProgrammes.slice(weekIndex + 1),
      ];
    }
    sortedProgrammes[weekIndex] = [currentSession];
    return sortedProgrammes;
  }, []);

  return weeksArray.map((week) => {
    return week.sort((a, b) => a.day - b.day);
  });
}
