var instaFeed = new Instafeed({
  get: 'user',
  userId: 8629875 ,
  accessToken: '34139106.467ede5.2e8f6b6a9cf846f6bd23169b624aca22',
  target: 'instafeed',
  limit: 200,
  resolution: 'low_resolution'
});	instaFeed.run();




//circle-equation
function circle_getX(num,total_number)
{
  angle = 360*num/total_number;
  return (250+180*Math.sin(toRadians(angle))-61);
}

function circle_getY(num,total_number)
{
  angle = 360*num/total_number;
  return (250-180*Math.cos(toRadians(angle))-61);
}

function toRadians (angle) {
  return angle * (Math.PI / 180);
}

$(".icon_idea").css("top",circle_getY(0,9))
$(".icon_idea").css("left",circle_getX(0,9))
$(".icon_copsapp").css("top",circle_getY(1,9))
$(".icon_copsapp").css("left",circle_getX(1,9))
$(".icon_clean").css("top",circle_getY(2,9))
$(".icon_clean").css("left",circle_getX(2,9))
$(".icon_gosafe").css("top",circle_getY(3,9))
$(".icon_gosafe").css("left",circle_getX(3,9))
$(".icon_maps").css("top",circle_getY(4,9))
$(".icon_maps").css("left",circle_getX(4,9))
$(".icon_network").css("top",circle_getY(5,9))
$(".icon_network").css("left",circle_getX(5,9))
$(".icon_news").css("top",circle_getY(6,9))
$(".icon_news").css("left",circle_getX(6,9))
$(".icon_technology").css("top",circle_getY(7,9))
$(".icon_technology").css("left",circle_getX(7,9))
$(".icon_event").css("top",circle_getY(8,9))
$(".icon_event").css("left",circle_getX(8,9))
