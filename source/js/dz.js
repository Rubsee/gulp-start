// исходник НЕЛЬЗЯ ИЗМЕНЯТЬ

const flats = [
  {
    floor: 3,
    rooms: 2,
    project: {
      id: 1,
      name: 'Foriver',
    },
  },
  {
    floor: 1,
    rooms: 3,
    project: {
      id: 2,
      name: 'Riversky',
    },
  },
  {
    floor: 5,
    rooms: 4,
    project: {
      id: 1,
      name: 'Foriver',
    },
  },
  {
    floor: 2,
    rooms: 2,
    project: {
      id: 2,
      name: 'Riversky',
    },
  },
];


const foriverFlats = flats
  .filter(flat => flat.project.name === 'Foriver')    //On
  .map(flat => ({                                     //On²
    floor: flat.floor,
    rooms: flat.rooms
  }));

const foriver = [{ id: 1, name: 'Foriver', flats: [...foriverFlats] }]


const riverskyFlats = flats
  .filter(flat => flat.project.name === 'Riversky')   //On
  .map(flat => ({                                     //On²
    floor: flat.floor,
    rooms: flat.rooms
  }));

const riversky = [{ id: 2, name: 'Riversky', flats: [...riverskyFlats] }]


const projects = [...foriver, ...riversky]
console.log(projects)

// чего нужно добиться
// const projects = [
//   {
//     id: 1,
//     name: 'Foriver',
//     flats: [
//       {
//         floor: 3,
//         rooms: 2,
//       },
//       {
//         floor: 5,
//         rooms: 4,
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: 'Riversky',
//     flats: [
//       {
//         floor: 2,
//         rooms: 2,
//       },
//       {
//         floor: 1,
//         rooms: 3,
//       },
//     ],
//   }
// ];