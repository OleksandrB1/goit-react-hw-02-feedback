(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(5),i=a.n(s),o=(a(15),a(6)),r=a(7),l=a(8),d=a(10),u=a(9),b=a(4),j=a.n(b),h=a(0),v=function(e){var t=e.options,a=e.onLeaveFeedback;return Object(h.jsx)("div",{children:Object(h.jsx)("div",{className:j.a.feedbackControls,children:t.map((function(e){return Object(h.jsx)("button",{className:j.a.button,onClick:function(){return a(e)},type:"button",children:e},e)}))})})},O=a(2),f=a.n(O),k=function(e){var t=e.good,a=e.neutral,c=e.bad,n=e.total,s=e.positivePercentage;return Object(h.jsxs)("div",{className:f.a.statisticsContainer,children:[Object(h.jsxs)("span",{className:f.a.value,children:["Good: ",t]}),Object(h.jsxs)("span",{className:f.a.value,children:["Neutral: ",a]}),Object(h.jsxs)("span",{className:f.a.value,children:["Bad: ",c]}),Object(h.jsxs)("span",{className:f.a.value,children:["Total: ",n]}),Object(h.jsxs)("span",{className:f.a.value,children:["Positive feedback: ",s,"%"]})]})},x=function(e){var t=e.message;return Object(h.jsx)("div",{children:Object(h.jsx)("h2",{children:t})})},p=function(e){var t=e.title,a=e.children;return Object(h.jsxs)("section",{children:[Object(h.jsx)("h2",{children:t}),a]})},g=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={good:0,neutral:0,bad:0},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){return Math.round(e.state.good/e.countTotalFeedback()*100)},e.clickButton=function(t){e.setState((function(e){return Object(o.a)({},t,e[t]+1)}))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,c=e.bad;return Object(h.jsxs)("div",{children:[Object(h.jsx)(p,{title:"Please leave feedback",children:Object(h.jsx)(v,{options:Object.keys(this.state),onLeaveFeedback:this.clickButton})}),Object(h.jsx)(p,{title:"Statistics",children:this.countTotalFeedback()>0?Object(h.jsx)(k,{good:t,neutral:a,bad:c,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):Object(h.jsx)(x,{message:"No feedback given"})})]})}}]),a}(c.Component),_=g;i.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(_,{})}),document.getElementById("root"))},2:function(e,t,a){e.exports={statisticsContainer:"Statistics_statisticsContainer__3t_Ru",value:"Statistics_value__2YNFR"}},4:function(e,t,a){e.exports={feedbackControls:"Feedback_feedbackControls__3oxYR",button:"Feedback_button__2VgvA",statistics:"Feedback_statistics__2IUiA"}}},[[17,1,2]]]);
//# sourceMappingURL=main.50fc88dd.chunk.js.map