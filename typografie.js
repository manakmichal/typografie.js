var Rules = {
    quote: [
      [/ “/g, " „"],
      [/ “/g, " „"],
      [/ "/g, " „"],
      [/” /g, "“ "],
      [/" /g, "“ "],
      [/\.”/g, ".“"],
      [/\."/g, ".“"],
      [/!”/g, "!“"],
      [/!"/g, "!“"]
    ],
    dash: [
      [/ - /g, " – "]
    ],
    space: [
      [/  /g, " "],
      [/ a /g, " a&nbsp;"],
      [/ i /g, " i&nbsp;"],
      [/ o /g, " o&nbsp;"],
      [/ u /g, " u&nbsp;"],
      [/ s /g, " s&nbsp;"],
      [/ z /g, " z&nbsp;"],
      [/ k /g, " k&nbsp;"],
      [/ v /g, " v&nbsp;"],
      [/ A /g, " A&nbsp;"],
      [/ I /g, " I&nbsp;"],
      [/ O /g, " O&nbsp;"],
      [/ U /g, " U&nbsp;"],
      [/ S /g, " S&nbsp;"],
      [/ Z /g, " Z&nbsp;"],
      [/ K /g, " K&nbsp;"],
      [/ V /g, " V&nbsp;"],
      [/(\d+)( )(\w|%)/g, "$1"+"&nbsp;"+"$3"]
    ],
    elipse: [
      [/\.\.\./g, "…"]
    ],
    shorts: [
      [/ viz\./g, " viz"],
      [/ Viz\./g, " Viz"]
    ],
    word: [
      [/designer/g, "designér"],
      [/Designer/g, "Designér"]
    ]
};

function improveTypography(string){
  for(let rule of regulars.quote){
    string = string.replace(rule[0], rule[1]);
  }

  for(let rule of regulars.dash){
    string = string.replace(rule[0], rule[1]);
  }

  for(let rule of regulars.space){
    string = string.replace(rule[0], rule[1]);
  }

  for(let rule of regulars.elipse){
    string = string.replace(rule[0], rule[1]);
  }

  for(let rule of regulars.shorts){
    string = string.replace(rule[0], rule[1]);
  }

  for(let rule of regulars.word){
    string = string.replace(rule[0], rule[1]);
  }

  return string;
}
