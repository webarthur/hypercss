var hyper = function (token, group) {
  return hyper.tokens[group][token] || hyper.try(token)
}

hyper.colors = [
  "AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen",
]
hyper.tokens = {
  text: {
    smaller: "font-size: 75%",
    small: "font-size: 85%",
    big: "font-size: 125%",
    bigger: "font-size: 145%",
    giant: "font-size: 250%",

    normal: "font-weight: normal",
    light: "font-weight: 300",
    thin: "font-weight: 100",
    bold: "font-weight: bold",
    'semi-bold': "font-weight: 600",
    bolder: "font-weight: 900",

    justify: "text-align: justify",
    center: "text-align: center",
    left: "text-align: left",
    right: "text-align: right",
    middle: "vertical-align: middle",
    baseline: "vertical-align: baseline",
    sub: "vertical-align: sub",
    super: "vertical-align: super",
    top: "vertical-align: top",
    bottom: "vertical-align: bottom",

    'break-all': "word-break: break-all",
    'break-word': "word-wrap: break-word",
    'keep-all': "word-break: keep-all",
    nowrap: "white-space: nowrap",
    pre: "white-space: pre",
    'pre-wrap': "white-space: pre-wrap",
    'pre-line': "white-space: pre-line",
    'indent': "text-indent: $text-indent",

    italic: "font-style: italic",
    upper: "text-transform: uppercase",
    uppercase: "text-transform: uppercase",
    lower: "text-transform: lowercase",
    lowercase: "text-transform: lowercase",
    capitalize: "text-transform: capitalize",
    overline: "text-decoration: overline",
    'line-through': "text-decoration: line-through",
    underline: "text-decoration: underline",
    'small-caps': "text-variant: small-caps",
    'no-decoration': "text-decoration: none",

    rtl: 'direction: rtl',
    ltr: 'direction: ltr',
  },
  layout: {
    absolute: "position: absolute",
    fixed: "position: fixed",
    static: "position: static",
    relative: "position: relative",

    top: "top: 0",

    block: "display: block",
    table: "display: table",
    'table-cell': "display: table-cell",
    'inline-block': "display: inline-block",
    first: "margin-left: 0",
    last: "margin-right: 0",
    start: "margin-top: 0",
    end: "margin-bottom: 0",

    flex: "display: flex",
    grow: "flex-grow: 1",
    'self-auto': "align-self: auto",
    'self-start': "align-self: flex-start",
    'self-end': "align-self: flex-end",
    'self-center': "align-self: center",
    'self-baseline': "align-self: baseline",
    'self-stretch': "align-self: stretch",
    'row': "flex-direction: row",
    'row-reverse': "flex-direction: row-reverse",
    'column': "flex-direction: column",
    'column-reverse': "flex-direction: column-reverse",
    'nowrap': "flex-wrap: nowrap",
    'wrap': "flex-wrap: wrap",
    'wrap-reverse': "flex-wrap: wrap-reverse",
    'content-start': "justify-content: flex-start",
    'content-end': "justify-content: flex-end",
    'content-center': "justify-content: center",
    'content-space-between': "justify-content: space-between",
    'content-space-around': "justify-content: space-around",
    'items-start': "align-items: flex-start",
    'items-end': "align-items: flex-end",
    'items-center': "align-items: center",
    'items-baseline': "align-items: baseline",
    'items-stretch': "align-items: stretch;",
    'align-content-start': "align-content: flex-start",
    'align-content-end': "align-content: flex-end",
    'align-content-center': "align-content: center",
    'align-content-space-between': "align-content: space-between",
    'align-content-space-around': "align-content: space-around",
    'align-content-stretch': "align-content: stretch",

  }
}

hyper.try = function (token) {
  if (/^[0-9\.]+(em|px|%)$/.test(token)) return 'font-size: ' + token
  if (/^[0-9]+$/.test(token)) return 'font-weight: ' + token
  if (/^line-?[0-9]+/.test(token)) return 'line-height: ' + token
  if (/^pd/.test(token)) return 'padding: ' + hyper.arg(token) + 'px'
  if (/^pdh/.test(token)) return 'padding-left: ' + hyper.arg(token) + "px;\n  padding-right: " + hyper.arg(token) + 'px'
  if (/^pdv/.test(token)) return 'padding-top: ' + hyper.arg(token) + "px;\n  padding-bottom: " + hyper.arg(token) + 'px'
  if (/^mg/.test(token)) return 'margin: ' + hyper.arg(token) + 'px'
  if (/^mgh/.test(token)) return 'margin-left: ' + hyper.arg(token) + "px;\n  margin-right: " + hyper.arg(token) + 'px'
  if (/^mgv/.test(token)) return 'margin-top: ' + hyper.arg(token) + "px;\n  margin-bottom: " + hyper.arg(token) + 'px'
  if (token[0]=='z') return 'z-index: ' + hyper.arg(token)
  if (/#.*/.test(token)) return 'background-color: ' + token
  if (hyper.colors.indexOf(token[0])>-1) return 'background-color: ' + token
}

hyper.arg = function (token) {
  return token.replace(/[^\(]+\(([^\)]*)\)/, '$1')
}

hypercss = function (val) {
  response.innerHTML = val.replace(/ *(text|layout) *?\:([^;]*);/gi, function (_, domain, val) {
    // console.log(prop, ': ', val)

    var lastProp = ''
    var attrs = {}
    val.replace(/ *([a-z0-9]+) *(\([0-9a-z, -]*\)|!important|!)? */gi, function (_, prop, params) {

      if (params && params[0] == '(') {
        params = params.slice(1, params.length-1)
        attrs[prop] = prop + ': ' + params.replace(/([0-9])(,| |\))/g, '$1px$2').replace(/( )+/g, ' ').trim()
      }
      else {
        var v = hyper(prop, domain)
        if (v) {
          attrs[prop] = hyper(prop, domain)
        }
        else {
          console.warn('Attribute not reconized:', prop)
        }
      }

      if (params && params[0] == '!') {
        attrs[prop] += ' !important'
      }

      console.log('prop', prop);
      console.log('params', params);

      lastProp = prop
    })

    console.log('attrs', attrs)
    return "  " + Object.values(attrs).join(";\n  ") + ';'
  })
}
