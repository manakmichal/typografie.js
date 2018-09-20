# typografie.js
Jednoduchá knihovna pro nahrazení specifických znaků pro lepší typografickou správnost.

Umí se postarat o to, aby
* Odstavec nekončil spojkou.
* Text obsahoval české uvozovky.
* Byl využit znak elipsis místo 3 teček.
* Aby se zalomilo celé číslo i s jednotkou.
* Datum vypadalo jako 10. 10. 2011, pokud nevložíte mezery.
* Se využily ligatury fi, fl, fl.

A další. Viz knihovna.

## Příklad ##

Představme si, že máme tento text:

```
Den se pomalu krátil a přicházela tma. Měsíc se pomalu ukazoval na obloze, děti sjízděly poslední kopce na saních a pan Novák akorát zrovna parkoval svůj, který koupil za posledních 20 000 Kč. "Běžte už domů děti, začíná tma", zavolal na děti pan Novák.
```

Tento text neobsahuje žádná nahrazení a slova by se zalomila, nejsou využity správné znaky, atp. S využítím typografie.js tak můžete snadno zajistit lepší typografii.

```
Den se pomalu krátil a&nbsp;přicházela tma. Měsíc se pomalu ukazoval na obloze, děti sjízděly poslední kopce na saních a&nbsp;pan Novák akorát zrovna parkoval svůj, který koupil za posledních 20&nbsp;000&nbsp;Kč. „Běžte už domů děti, začíná tma“, zavolal na děti pan Novák.
```

Vyzkoušejte si to na adrese http://www.manakmichal.cz/typografie/.
