"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 4

   Author: Wesley Simpson
   Date:   9/19/2020
   
   Filename: vw_results.js
   
   Functions:
   
   The calcSum() function is a callback function used to
   calculte the total value from items within an array
   
   The calcPercent(value, sum) function calculates the percentage given
   a value and a sum
   
   The createBar(partyType, percent) function writes a different
   table data table based on the candidates party affilication.
   
      
*/

// Adding the header to HTML
var reportHTML = "<h1>" + raceTitle + "</h1>";

// To loop through the race array
for (var i = 0; i < race.length; i++) {
   var totalVotes = 0;
   votes[i].forEach(calcSum);
   reportHTML += "<table>";
   reportHTML += "<caption>" + race [i] + "</caption>";
   reportHTML += "<tr><th>Candidate</th><th>Votes</th></tr>";
   candidateRows(i, totalVotes) + reportHTML;
   reportHTML += "</table>";
}
// Get the section element
document.getElementsByName("section").innerHTML = reportHTML;

// 
function candidateRows(raceNum, totalVotes) {
   var rowHTML = "";
   for (var j = 0; j <= 2; j++) {
      var candidateName = candidate[raceNum][j];
      var candidateParty = candidate[raceNum][j];
      var candidateVotes = candidate[raceNum][j];
      var candidatePercent = calcPercent(candidateVotes, totalVotes);
   }
   rowHTML += "<tr>";
   rowHTML += "<td>" + candidateName + (candidateParty)+ "</td>";
   rowHTML += "<td>" + candidateVotes.toLocaleString() + (candidatePercent.toFixed(1)) + "</td>";
   for (var k = 0; k < candidatePercent; k++) {
      createBar(candidateParty, candidatePercent);
   }
   rowHTML += "</tr>";
   return rowHTML;
}

/* Callback Function to calculate an array sum */
function calcSum(value) {
   totalVotes += value;
}

/* Function to calculate a percentage */
function calcPercent(value, sum) {
   return (100*value/sum);
}

function createBar(partyType) {
   var barHTML = "";
   if (partyType === "D") {
      barHTML += "<td class='dem'></td>";
   }
   else if (partyType === "R") {
      barHTML += "<td class='rep'></td>";
   }
   else {
      barHTML += "<td class='ind'></td>";
   }
   return barHTML;
}

