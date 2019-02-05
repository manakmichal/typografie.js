var Rules = {
    // rules for czech quotes
    quote: [
      [/(“|"|“)(\w)/g, "„$2"],
      [/(”|")( |,|\n*|$)/g, "“$2"],
      [/(!|\?|\.)(”|")/g, "$1“"],
      [/(\w)(')(\w)/g, "$1’$3"]
    ],
    // rule for dash instead of minus
    dash: [
      [/ - /g, " – "]
    ],
    // rules for units
    // there must be a space between numbers and the unit
    units: [
      [/(\d+)(| )(|m)s /g, "$1"+"&nbsp;"+"$3s "],
      [/(\d+)(| )(min|h|d) /g, "$1"+"&nbsp;"+"$3 "],
      [/(\d+)(| )(|n|m|c|d|k)m /g, "$1"+"&nbsp;"+"$3m "],
      [/(\d+)(| )(|m|h|d|c|b)l /g, "$1"+"&nbsp;"+"$3l "],
      [/(\d+)(| )(ccm|gal) /g, "$1"+"&nbsp;"+"$3 "],
      [/(\d+)(| )(|m|c|d|k)m(\d) /g, "$1"+"&nbsp;"+"$3m$4 "],
      [/(\d+)(| )(ccm|gal) /g, "$1"+"&nbsp;"+"$3 "],
      [/(\d+)(| )(ha|a) /g, "$1"+"&nbsp;"+"$3 "],
      [/(\d+)(| )(|k|M)J /g, "$1"+"&nbsp;"+"$3J "],
      [/(\d+)(| )(|k)cal /g, "$1"+"&nbsp;"+"$3cal "],
      [/(\d+)(| )(|kWh|M)Wh /g, "$1"+"&nbsp;"+"$3Wh "],
      [/(\d+)(| )(|k)m\/(s|min|h) /g, "$1"+"&nbsp;"+"$3m/$4 "],
      [/(\d+)(| )(K|°C|°F) /g, "$1"+"&nbsp;"+"$3 "],
      [/(\d+)(| )(|h|k|M)Pa /g, "$1"+"&nbsp;"+"$3Pa "],
      [/(\d+)(| )(bar|atm) /g, "$1"+"&nbsp;"+"$3 "],
      [/(\d+)(| )(|k)W /g, "$1"+"&nbsp;"+"$3 "],
      [/(\d+)(| )(%) /g, "$1"+"&nbsp;"+"$3 "],
      [/(|m|c|d|k)m(\d) /g, "$1m<sup>$2</sup> "],
    ],
    // rule for number formatting
    number: [
      [/(\d)(?=(\d{3})+(?!\d))/g, "$1 "]
    ],
    // rules for hard spaces
    space: [
      [/  /g, " "],
      [/ (a|i|o|u|s|z|k|v|A|I|O|U|S|Z|K|V) /g, " $1&nbsp;"],
      [/(\d+)( )(\w|%)/g, "$1"+"&nbsp;"+"$3"],
      [/(\d+\.)( )(\w)/g, "$1"+"&nbsp;"+"$3"],
      [/([§|#])( )(\d)/g, "$1"+"&nbsp;"+"$3"],
      [/(tj|tzv|tzn)\. /g, "$1.&nbsp;"]
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

  for(let rule of Rules.units){
    string = string.replace(rule[0], rule[1]);
  }

  for(let rule of Rules.number){
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
