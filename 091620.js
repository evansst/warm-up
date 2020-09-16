schools = [
	{
		name: "Florida State University",
		abbv: "FSU",
		population: 40000,
		state: "Florida",
		city: "Tallahassee"
	},
	{
		name: "New York University",
		abbv: "NYU",
		population: 50000,
		state: "New York",
		city: "New York City"
	},
	{
		name: "University of Central Florida",
		abbv: "UCF",
		population: 30000,
		state: "Florida",
		city: "Orlando"
	},
	{
		name: "School of Hard Knocks",
		abbv: "SHK",
		population: 1000000,
		state: "Pain",
		city: "Orlando"
	},
	{
		name: "School of Hard Knocks",
		abbv: "SHK",
		population: 1000000,
		state: "Pain",
		city: "Orlando"
	},
	{
		name: "Flatiron School",
		abbv: "FS",
		population: 50,
		state: "CO",
		city: "Denver"
	},
	{
		name: "School of Rock",
		abbv: "SOR",
		population: 35,
		state: "Michigan",
		city: "Detroit"
	},
];

// enumerables

const reduce = (array, callback, initialValue) => {
  let accumulator = initialValue !== undefined
    ? initialValue
    : array.shift();

  for(const element of array) {
    accumulator = callback(accumulator, element)
  }

  return accumulator;
}

const filter = (array, callback) => {
  let returnArray = []

  for(const element of array) {
    if(callback(element)) returnArray.push(callback(element))
  }

  return returnArray;
}

const find = (array, callback) => {
  for(const element of array) {
    if(callback(element)) return element
  }
  return null;
}

const sort = (array, callback) => {
  let returnArray = []

  for(const element of array) {

  }
}

//callbacks

const inFlorida = (element) => element.state === "Florida" ? element : false;

const sum = (accumulator, currentValue) => accumulator + currentValue;

const onlyTwos = (accumulator, currentValue) => currentValue === 2 ? accumulator + currentValue : accumulator

const array = [1,2,3,4,2]


// console.log(filter(schools, inFlorida))

// console.log(reduce(schools, (accumulator, currentValue) => {
//   return accumulator + currentValue.population;
// }, 0) / schools.length)

// console.log(find(schools, (school) => school.city === "New York City"))

// console.log(find(schools, (school) => school.abbv === "FS"))