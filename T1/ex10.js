// output: 
// Rahul scored 110 outof 150 runs
// and secure 2nd rank.
const player = {
  "Game": ["Cricket", "Football", "Hockey"],
  "Details": {
    "Name": "Rahul",
    "Performance": [60, 110, 75],
    "Target": "150"
  },
  "Achievement": {
    "RankInfo": { "Rank": "rank", "place": [2, 1, 3] },
    "Indicator": "nd"
  },
  "Words": ["outof", "scored", "and"]
};
console.log(player.Details.Name+" "+player.Words[1]+" "+player.Details.Performance[1]+" "+player.Words[0]+" "+player.Details.Target+" "+player.Words[2]+" secure "+player.Achievement.RankInfo.place[0]+player.Achievement.Indicator+" "+player.Achievement.RankInfo.Rank);