var Rules = {
    // rules for czech quotes
    quote: [
      [/(“|"|“)(\w)/g, "„$2"],
      [/(”|")( |,|\n*|$)/g, "“$2"],
      [/(!|\?|\.)(”|")/g, "$1“"],
    ],
    // rule for dash instead of minus
    dash: [
      [/ - /g, " – "]
    ],
    // rules for hard spaces
    space: [
      [/  /g, " "],
      [/ (a|i|o|u|s|z|k|v|A|I|O|U|S|Z|K|V) /g, " $1&nbsp;"],
      [/(\d+)( )(\w|%)/g, "$1"+"&nbsp;"+"$3"],
      [/(\d+\.)( )(\w)/g, "$1"+"&nbsp;"+"$3"],
      [/([§|#])( )(\d)/g, "$1"+"&nbsp;"+"$3"]
    ],
    // rules for dates
    date: [
      [/(\d{1,2}\.)(\d{1,2}\.)(\d{4})/g, "$1"+"&nbsp;"+"$2"+" "+"$3"]
    ],
    ligatures: [
      [/fi/g, "ﬁ"],
      [/ff/g, "ﬀ"],
      [/fl/g, "ﬂ"]
    ],
    // rule for ellipsis instead of 3 dots
    elipse: [
      [/\.{3}/g, "…"]
    ],
    // rule for removing dot after a specific abbrs
    shorts: [
      [/ (v|V)iz\./g, " $1iz"],
    ],
    // rules for valid words
    word: [
      [/(d|D)esigner/g, "$1esignér"],
      [/(v|V)yjímka/g, "$1ýjimka"],
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

  for(let rule of Rules.date){
    string = string.replace(rule[0], rule[1]);
  }

  for(let rule of Rules.ligatures){
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
