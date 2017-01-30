// #############  About this project...
/*               Data Merge
Data merge
In this drill, you'll write a function called mergeDataStreams that merges
together data from two sources. The first data set is an array of objects that
look like this:

{
  id: 'aBcDeFgH',
  firstName: 'Juan',
  lastName: 'Doe',
  age: 32
}
The second data set is an array of objects that looks like this

{
  id: 'aBcDeFgH',
  occupation: 'architect',
  address: {
    street: '123 Main St',
    city: 'CityTown',
    Country: 'USA'
  }
}
Each item in the first dataset has a matching counterpart in the second dataset
with the same value for the id property.

To complete the challenge, your mergeDataStreams must return an array of objects
that merge together the values for a given id. So, for instance, the merged
version of the data above would be:

{
  id: 'aBcDeFgH',
  firstName: 'Juan',
  lastName: 'Doe',
  age: 32,
  occupation: 'architect',
  address: {
    street: '123 Main St',
    city: 'CityTown',
    Country: 'USA'
  }
}
mergeDataStreams should return an array of merged objects like this.

This drill features tests that automatically run when the JS Bin first loads
and when you click the "Run" button in the console. You'll know your code is
working when the tests pass.

Friendly advice: to complete this drill, you'll need a way to iterate over the
keys and values of your objects. One way to do this is using Object.keys(),
which we discussed in the previous reading.
Note: JSBin:  http://jsbin.com/qiwedit/edit?js,console
*/



function mergeDataStreams(stream1, stream2) {
  var stream3 = [];
  for (var n=0; n<stream1.length; n++) {
    var newrecord = {
      id: stream1[n].id,
      firstName: stream1[n].firstName,
      lastName: stream1[n].lastName,
      age: stream1[n].age,
      occupation: stream2[n].occupation,
      address: {
        street: stream2[n].address.street,
        city: stream2[n].address.city,
        country: stream2[n].address.country
      }  // end of address
    };  // end of newrecord
    stream3.push(newrecord);
  }  // end of for loop

  //console.log(stream3);
  return stream3;
}  // end of function


// data
var dataSource1 = [
    {
      id: '0',
      firstName: 'Juan',
      lastName: 'Doe',
      age: 32
    },
    {
      id: '1',
      firstName: 'Jane',
      lastName: 'Doe',
      age: 31
    },
    {
      id: '2',
      firstName: 'Janice',
      lastName: 'Doe',
      age: 30
    },
    {
      id: '3',
      firstName: 'Jake',
      lastName: 'Doe',
      age: 29
    },
  ];

var dataSource2 = [
    {
      id: '0',
      occupation: 'architect',
      address: {
        street: '123 Main St',
        city: 'CityTown',
        country: 'USA'
      }
    },
    {
      id: '1',
      occupation: 'architect',
      address: {
        street: '234 Main St',
        city: 'CityTown',
        country: 'USA'
      }
    },
    {
      id: '2',
      occupation: 'architect',
      address: {
        street: '345 Main St',
        city: 'CityTown',
        country: 'USA'
      }
    },
    {
      id: '3',
      occupation: 'architect',
      address: {
        street: '456 Main St',
        city: 'CityTown',
        country: 'USA'
      }
    },
  ];


// My testing here...
/*
var stream1 = dataSource1;
var stream2 = dataSource2;
mergeDataStreams(stream1, stream2);
// end of my testing
*/

/* From here down, you are not expected to
   understand.... for now :)


   Nothing to see here!

*/



// tests
function testMergeDataStreams(stream1, stream2) {
  var expected = stream1.map(function(item) {
   return _.assign(
     _.clone(item), stream2.find(function(item2) {return item.id === item2.id;}));
  });

  var actual = mergeDataStreams(stream1, stream2);

  var passing = actual && expected.map(function(item) {
    return _.isEqual(
      item,
      actual.find(function(_item) {return _item.id === item.id; })
    );
  }).every(function(result) {return result;} );

  if (passing) {
    console.log('SUCCESS! mergeDataStreams works');
  }

  else {
    console.log('FAILURE! mergeDataStreams not working');
  }
}

testMergeDataStreams(dataSource1, dataSource2);
