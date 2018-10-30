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
    Object.keys(win_obj);
    var win_value = win_obj[Object.keys(win_obj)[Object.keys(win_obj).length - 1]];

    if (win_value = "0") {
      $("#no").removeClass("display-none");
      // console.log("lol nope");
    } else {
      $("#yes").removeClass("display-none");
      // console.log("omg yes");
    }

  }

});