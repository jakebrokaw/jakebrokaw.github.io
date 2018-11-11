$.ajax
({
  type: "GET",
  url: 'https://api.mysportsfeeds.com/v1.2/pull/nfl/2018-regular/team_gamelogs.json?team=cle',
  dataType: 'json',
  async: false,
  headers: {
    "Authorization": "Basic " + btoa("24dec58c-0128-457d-80d3-d94650" + ":" + "h3ll0J")
  },
  data: "teamgamelogs",
  success: function (data) {
    var cle_gamelogs = data.teamgamelogs.gamelogs;
    Object.keys(cle_gamelogs);
    var last_game = cle_gamelogs[Object.keys(cle_gamelogs)[Object.keys(cle_gamelogs).length - 1]];
    Object.keys(last_game);
    var win_obj = last_game.stats.Wins;
    var points_for = last_game.stats.PointsFor;
    Object.keys(points_for);
    var points_against = last_game.stats.PointsAgainst;
    Object.keys(points_against);
    var points_for_val = points_for[Object.keys(win_obj)[Object.keys(win_obj).length - 1]];
    var points_against_val = points_against[Object.keys(win_obj)[Object.keys(win_obj).length - 1]];

    // console.log('points for: ' + points_for_val);
    // console.log('points against: ' + points_against_val);

    if (points_for_val > points_against_val) {
      $("#yes").removeClass("display-none");
      // console.log("omg yes");
    } else {
      $("#no").removeClass("display-none");
      // console.log("lol nope");
    }

  }

});