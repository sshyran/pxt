/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * monaco-languages version: 0.3.1(584d8ebb961d96d42dd7ae89ff3803c825b8862d)
 * Released under the MIT license
 * https://github.com/Microsoft/monaco-languages/blob/master/LICENSE.md
 *-----------------------------------------------------------------------------*/
define("vs/basic-languages/src/less",["require","exports"],function(e,t){t.conf={wordPattern:/(#?-?\d*\.\d\w*%?)|([@#!.:]?[\w-?]+%?)|[@#!.]/g,comments:{blockComment:["/*","*/"],lineComment:"//"},brackets:[["{","}"],["[","]"],["(",")"],["<",">"]],autoClosingPairs:[{open:'"',close:'"',notIn:["string","comment"]},{open:"'",close:"'",notIn:["string","comment"]},{open:"{",close:"}",notIn:["string","comment"]},{open:"[",close:"]",notIn:["string","comment"]},{open:"(",close:")",notIn:["string","comment"]},{open:"<",close:">",notIn:["string","comment"]}]};var n="entity.name.selector",o="entity.name.tag",i="support.type.property-name",r="support.property-value";t.language={defaultToken:"",tokenPostfix:".less",identifier:"-?-?([a-zA-Z]|(\\\\(([0-9a-fA-F]{1,6}\\s?)|[^[0-9a-fA-F])))([\\w\\-]|(\\\\(([0-9a-fA-F]{1,6}\\s?)|[^[0-9a-fA-F])))*",identifierPlus:"-?-?([a-zA-Z:.]|(\\\\(([0-9a-fA-F]{1,6}\\s?)|[^[0-9a-fA-F])))([\\w\\-:.]|(\\\\(([0-9a-fA-F]{1,6}\\s?)|[^[0-9a-fA-F])))*",brackets:[{open:"{",close:"}",token:"punctuation.curly"},{open:"[",close:"]",token:"punctuation.bracket"},{open:"(",close:")",token:"punctuation.parenthesis"},{open:"<",close:">",token:"punctuation.angle"}],tokenizer:{root:[{include:"@nestedJSBegin"},["[ \\t\\r\\n]+",""],{include:"@comments"},{include:"@keyword"},{include:"@strings"},{include:"@numbers"},["[*_]?[a-zA-Z\\-\\s]+(?=:.*(;|(\\\\$)))",i,"@attribute"],["url(\\-prefix)?\\(",{token:"function",bracket:"@open",next:"@urldeclaration"}],["[{}()\\[\\]]","@brackets"],["[,:;]","punctuation"],["#@identifierPlus",n+".id"],["&",o],["\\.@identifierPlus(?=\\()",n+".class","@attribute"],["\\.@identifierPlus",n+".class"],["@identifierPlus",o],{include:"@operators"},["@(@identifier(?=[:,\\)]))","variable","@attribute"],["@(@identifier)","variable"],["@","key","@atRules"]],nestedJSBegin:[["``","punctuation.backtick"],["`",{token:"punctuation.backtick",bracket:"@open",next:"@nestedJSEnd",nextEmbedded:"text/javascript"}]],nestedJSEnd:[["`",{token:"punctuation.backtick",bracket:"@close",next:"@pop"}],[".",{token:"@rematch",next:"@javascript_block"}]],javascript_block:[["`",{token:"@rematch",next:"@pop",nextEmbedded:"@pop"}]],operators:[["[<>=\\+\\-\\*\\/\\^\\|\\~]","operator"]],keyword:[["(@[\\s]*import|![\\s]*important|true|false|when|iscolor|isnumber|isstring|iskeyword|isurl|ispixel|ispercentage|isem|hue|saturation|lightness|alpha|lighten|darken|saturate|desaturate|fadein|fadeout|fade|spin|mix|round|ceil|floor|percentage)\\b","keyword"]],urldeclaration:[{include:"@strings"},["[^)\r\n]+","string"],["\\)",{token:"tag",bracket:"@close",next:"@pop"}]],attribute:[{include:"@nestedJSBegin"},{include:"@comments"},{include:"@strings"},{include:"@numbers"},{include:"@keyword"},["[a-zA-Z\\-]+(?=\\()",r,"@attribute"],[">","operator","@pop"],["@identifier",r],{include:"@operators"},["@(@identifier)","variable"],["[)\\}]","@brackets","@pop"],["[{}()\\[\\]>]","@brackets"],["[;]","punctuation","@pop"],["[,=:]","punctuation"],["\\s",""],[".",r]],comments:[["\\/\\*","comment","@comment"],["\\/\\/+.*","comment"]],comment:[["\\*\\/","comment","@pop"],[".","comment"]],numbers:[["(\\d*\\.)?\\d+([eE][\\-+]?\\d+)?",{token:r+".numeric",next:"@units"}],["#[0-9a-fA-F_]+(?!\\w)",r+".rgb-value"]],units:[["((em|ex|ch|rem|vw|vh|vm|cm|mm|in|px|pt|pc|deg|grad|rad|turn|s|ms|Hz|kHz|%)\\b)?",r+".unit","@pop"]],strings:[['~?"',{token:"string.punctuation",bracket:"@open",next:"@stringsEndDoubleQuote"}],["~?'",{token:"string.punctuation",bracket:"@open",next:"@stringsEndQuote"}]],stringsEndDoubleQuote:[['\\\\"',"string"],['"',{token:"string.punctuation",next:"@popall",bracket:"@close"}],[".","string"]],stringsEndQuote:[["\\\\'","string"],["'",{token:"string.punctuation",next:"@popall",bracket:"@close"}],[".","string"]],atRules:[{include:"@comments"},{include:"@strings"},["[()]","punctuation"],["[\\{;]","punctuation","@pop"],[".","key"]]}}});