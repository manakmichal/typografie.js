var Rules = {
    // rules for czech quotes
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
    // rule for dash instead of minus
    dash: [
      [/ - /g, " – "]
    ],
    // rules for hard spaces
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
    // rule for ellipsis instead of 3 dots
    elipse: [
      [/\.\.\./g, "…"]
    ],
    // rule for removing dot after a specific abbrs
    shorts: [
      [/ viz\./g, " viz"],
      [/ Viz\./g, " Viz"]
    ],
    // rules for valid words
    word: [
      [/designer/g, "designér"],
      [/Designer/g, "Designér"],
      [/vyjímka/g, "výjimka"],
    ]
};

/** Simple function for improving typo
  * Iterates all rules within the Rules object
  *
  * @param string
  * @return string
  */
function improveTypography(string){
  if(typeof string !== 'string')
    throw ("The parametr must be a string");

  for(let rule of Rules.quote){
    string = string.replace(rule[0], rule[1]);
  }

  for(let rule of Rules.dash){
    string = string.replace(rule[0], rule[1]);
  }

  for(let rule of Rules.space){
    string = string.replace(rule[0], rule[1]);
  }

  for(let rule of Rules.elipse){
    string = string.replace(rule[0], rule[1]);
  }

  for(let rule of Rules.shorts){
    string = string.replace(rule[0], rule[1]);
  }

  for(let rule of Rules.word){
    string = string.replace(rule[0], rule[1]);
  }

  return string;
}
