(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[1099],{"../node_modules/highlight.js/lib/languages/ebnf.js":module=>{module.exports=function ebnf(hljs){var commentMode=hljs.COMMENT(/\(\*/,/\*\)/);return{name:"Extended Backus-Naur Form",illegal:/\S/,contains:[commentMode,{className:"attribute",begin:/^[ ]*[a-zA-Z]+([\s_-]+[a-zA-Z]+)*/},{begin:/=/,end:/[.;]/,contains:[commentMode,{className:"meta",begin:/\?.*\?/},{className:"string",variants:[hljs.APOS_STRING_MODE,hljs.QUOTE_STRING_MODE,{begin:"`",end:"`"}]}]}]}}}}]);