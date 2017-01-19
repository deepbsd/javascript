// Script for the Election map
   // Turns out we don't need jQuery for this...


  var makePolitician = function(name, color) {

    // Create the politician object
    var politician = {};
    politician.name = name;
    politician.electionResults = null;
    politician.totalVotes = 0;
    politician.partyColor = color;

    // Announce method
    politician.announcePolitician = function() {
      console.log("Politican " + this.name + " created!");
    }

      // Announce when created
      politician.announcePolitician();

      return politician;

    };  // End of makePolitician

    // Create some politicians
    var candidate1 = makePolitician("Jane Doesitall", [132, 17, 11]);
    var candidate2 = makePolitician("Betty Rocks", [245, 141, 136]);

    // Election results added from spreadsheet provided by Skillcrush
    candidate1.electionResults = [5,1,7,2,33,6,4,2,1,14,8,3,1,11,11,0,5,3,3,3,7,4,8,9,3,7,2,2,4,2,8,3,15,15,2,12,0,4,13,1,3,2,8,21,3,2,11,1,3,7,2];
    candidate2.electionResults = [4,2,4,4,22,3,3,1,2,15,8,1,3,9,0,6,1,5,5,1,3,7,8,1,3,3,1,3,2,2,6,2,14,0,1,6,7,3,7,3,6,1,3,17,3,1,2,11,2,3,1];

    // Make changes after recounts
    states = [9,4,43];
    recount1 = [1,17,11];
    recount2 = [28,38,27];

    for (x=0;x<3;x++){
      candidate1.electionResults[states[x]] = recount1[x];
      candidate2.electionResults[states[x]] = recount2[x];
    }  // End of recount changes...

    // Set the winner for the State
    var setStateResults = function(state){
      theStates[state].winner = null;  // ***this seems unnecessary***
      if (candidate1.electionResults[state] > candidate2.electionResults[state]) {
        theStates[state].winner = candidate1;
      } else if (candidate1.electionResults[state] < candidate2.electionResults[state]) {
        theStates[state].winner = candidate2;
      }
      var stateWinner = theStates[state].winner;
      // As part of setStateResults, change the state's color on the map
      if (stateWinner != null){
        theStates[state].rgbColor = stateWinner.partyColor;
      } else {
        theStates[state].rgbColor = [11, 32, 57];
      }
      // Update the State Results Table
      var stateInfoTable = document.getElementById("stateResults");
      var header = stateInfoTable.children[0];
      var body = stateInfoTable.children[1];
      var stateName = header.children[0].children[0];
      stateName.innerText = theStates[state].nameFull;
      var stateAbbrv = header.children[0].children[1];
      stateAbbrv.innerText = theStates[state].nameAbbrev;
      var candidate1Name = body.children[0].children[0];
      candidate1Name.innerText = candidate1.name;
      var candidate2Name = body.children[1].children[0];
      candidate2Name.innerText = candidate2.name;
      var candidate1Results = body.children[0].children[1];
      candidate1Results.innerText = candidate1.electionResults[state];
      var candidate2Results = body.children[1].children[1];
      candidate2Results.innerText = candidate2.electionResults[state];
      var winnersName = body.children[2].children[1];
      if (stateWinner !== null){
        winnersName.innerText = stateWinner.name;
      } else {
        winnersName.innerText = "It's a Draw!";
      }
    };   // End of setStateResults()

    // Tally the votes
    var tallyVotes = function(candidate){
      for (x=0;x<51;x++){
        candidate.totalVotes = candidate.totalVotes + candidate.electionResults[x];
      }
      return candidate.totalVotes;
    };  // End of tallyVotes

    var declareWinner = function(){
      var winner = "";
      if (candidate1.totalVotes === candidate2.totalVotes) {
        winner = "It's a DRAW!";
        console.log(winner);
      }else{
        (candidate1.totalVotes>candidate2.totalVotes) ? winner = candidate1.name : winner = candidate2.name;
        console.log("The winner is "+winner+"!");
      }
      return winner;
    };


    // Log the length of the array to make sure they're the same  ** debugging **
    console.log(candidate1.name+" length: "+candidate1.electionResults.length+" Total Votes: "+tallyVotes(candidate1));
    console.log(candidate2.name+" length: "+candidate2.electionResults.length+ " Total Votes: "+tallyVotes(candidate2));

    declareWinner();

    console.log(candidate1.partyColor);
    console.log(candidate2.partyColor);

    // Populate the Country Table with Results
    var countryTable = document.getElementById("countryResults");
    var row1 = countryTable.children[0].children[0];
    row1.children[0].innerText = candidate1.name;
    row1.children[1].innerText = candidate1.totalVotes;
    row1.children[2].innerText = candidate2.name;
    row1.children[3].innerText = candidate2.totalVotes;
    row1.children[5].innerText = declareWinner();


   // End of Election Map Script
