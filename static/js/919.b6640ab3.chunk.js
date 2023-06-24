"use strict";(self.webpackChunknutrition_ai=self.webpackChunknutrition_ai||[]).push([[919],{10919:function(e,n,r){r.r(n),r.d(n,{default:function(){return fe}});var t=r(72791),i=r(89164),o=r(61889),a=r(68870),s=r(29439),l=r(1413),c=r(20890),u=r(42419),h=r(65956),d=r(89673),m=r(3721),x=r(55818),_=r(13400),p=r(66934),Z=r(763),g=r(59434),f=r(15522),v=r(95414),j=r(80184),b=(0,p.ZP)((function(e){return(0,j.jsx)(d.Z,(0,l.Z)({disableGutters:!0,elevation:0},e))}))((function(e){var n=e.theme;return{border:"1px solid ".concat(n.palette.grey[300]),"& .Mui-expanded":{backgroundColor:n.palette.primary.lighter},marginBottom:8,"&":{borderRadius:4},"&:before":{display:"none"}}})),w=(0,p.ZP)((function(e){return(0,j.jsx)(x.Z,(0,l.Z)({},e))}))((function(e){return{backgroundColor:e.theme.palette.primary.ContrastText}})),y=(0,p.ZP)(m.Z)((function(e){var n=e.theme;return{padding:n.spacing(2),textAlign:"start",backgroundColor:n.palette.primary.lighter}})),I=function(){var e=(0,t.useState)("panel0"),n=(0,s.Z)(e,2),r=n[0],i=n[1],o=(0,g.I0)(),a=(0,g.v9)(f.RE),l=a.faqData,d=a.faqStep,m=l.filter((function(e){return e.step===d}));return(0,t.useEffect)((function(){o((0,f.Qb)("CUSTOMER_SIGNUP"))}),[o]),(0,j.jsxs)(j.Fragment,{children:[m&&m.length>0&&(0,j.jsx)(c.Z,{variant:"h4",gutterBottom:!0,children:(0,v.Z)("common_faq")}),(0,Z.map)(m,(function(e,n){return(0,j.jsxs)(b,{expanded:r==="panel".concat(n),onChange:(t="panel".concat(n),function(e,n){i(!!n&&t)}),children:[(0,j.jsx)(w,{"aria-controls":"panel1d-content",id:"panel1d-header",expandIcon:r==="panel".concat(n)?(0,j.jsx)(_.Z,{sx:{backgroundColor:"primary.contrastText"},children:(0,j.jsx)(h.Z,{})}):(0,j.jsx)(_.Z,{children:(0,j.jsx)(u.Z,{})}),children:(0,j.jsx)(c.Z,{variant:"subtitle1",children:(0,v.Z)(null===e||void 0===e?void 0:e.titleMacro)})}),(0,j.jsx)(y,{children:(0,j.jsx)(c.Z,{variant:"body1",color:"text.secondary",children:(0,v.Z)(null===e||void 0===e?void 0:e.descriptionMacro)})})]},e._id);var t}))]})},k=r(74165),S=r(15861),C=r(74512),F=r(29145),L=r(15825),P=r(63875),N=r(45823),A=r(5489),q=r(87812),T=r(36314),R=r(36151),U=r(68096),B=r(85523),W=r(47071),V=r(17133),D=r(88970),M=r(92506),E=r(81724),G=r(98137),z=function(e){var n=e.handleNext,r=e.handleBack,t=e.healthInfo,i=(0,g.v9)((function(e){return e.common.dietPreference})),s=(0,g.v9)((function(e){return e.common.workActiveLevel})),c=(0,g.v9)((function(e){return e.common.leisureActiveLevel})),u=(0,g.I0)(),h=t,d=E.Ry().shape({dietPreference:E.Z_().required((0,v.Z)("front_error_diet_preference_required")),eatingDisorder:E.Z_().required((0,v.Z)("front_error_eating_disorder_required")),workActiveLevel:E.Z_().required((0,v.Z)("front_error_work_active_level_required")),leisureActiveLevel:E.Z_().required((0,v.Z)("front_error_leisure_activity_level_required"))}),m=function(){var e=(0,S.Z)((0,k.Z)().mark((function e(r){var t;return(0,k.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u((0,A.xs)(r)).unwrap().then((function(e){e.status&&(n(2),u((0,A.$h)()))})).catch((function(e){console.log(" About err",e)}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(a.Z,{children:(0,j.jsx)(M.J9,{initialValues:{dietPreference:(0,Z.get)(h,"dietPreference",""),eatingDisorder:(0,Z.get)(h,"eatenDisorder",!0),workActiveLevel:(0,Z.get)(h,"workActiveLevel",""),leisureActiveLevel:(0,Z.get)(h,"leisureActiveLevel","")},validationSchema:d,onSubmit:function(){var e=(0,S.Z)((0,k.Z)().mark((function e(n){var r;return(0,k.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,l.Z)((0,l.Z)({},n),{},{step:2}),e.next=3,m(r);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),children:function(e){return(0,j.jsx)("form",{onSubmit:e.handleSubmit,children:(0,j.jsxs)(o.ZP,{container:!0,spacing:2,children:[(0,j.jsxs)(o.ZP,{item:!0,xs:12,children:[(0,j.jsxs)(U.Z,{fullWidth:!0,children:[(0,j.jsxs)(V.Z,{className:"mb-1",children:[(0,v.Z)("front_what_is_your_dietary_preference"),"?"]}),(0,j.jsx)(D.Z,{name:"dietPreference",value:e.values.dietPreference,onChange:function(n,r){e.setFieldValue("dietPreference",r)},row:!0,sx:{marginLeft:"10px",marginTop:"10px"},children:(0,Z.map)(i,(function(e,n){return(0,j.jsx)(B.Z,{value:null===e||void 0===e?void 0:e._id,control:(0,j.jsx)(G.Z,{varianttype:"option"}),label:(0,v.Z)(null===e||void 0===e?void 0:e.macroName),className:q.Z.radio_option},n)}))})]}),(0,j.jsx)(W.Z,{error:!0,children:(0,j.jsx)(M.Bc,{name:"dietPreference"})})]}),(0,j.jsxs)(o.ZP,{item:!0,xs:12,children:[(0,j.jsxs)(U.Z,{fullWidth:!0,children:[(0,j.jsxs)(V.Z,{className:"mb-1",children:[(0,v.Z)("front_i_have_recognized_an_eating_disorder"),"?"]}),(0,j.jsxs)(D.Z,{name:"eatingDisorder",value:e.values.eatingDisorder,onChange:function(n,r){e.setFieldValue("eatingDisorder",r)},row:!0,sx:{marginLeft:"10px",marginTop:"10px"},children:[(0,j.jsx)(B.Z,{value:!0,control:(0,j.jsx)(G.Z,{varianttype:"option"}),label:(0,v.Z)("common_type_yes"),className:q.Z.radio_option}),(0,j.jsx)(B.Z,{value:!1,control:(0,j.jsx)(G.Z,{varianttype:"option"}),label:(0,v.Z)("common_type_no"),className:q.Z.radio_option})]})]}),e.errors.eatingDisorder&&e.touched.eatingDisorder&&(0,j.jsx)(W.Z,{error:!0,children:(0,j.jsx)(M.Bc,{name:"eatingDisorder"})})]}),(0,j.jsxs)(o.ZP,{item:!0,xs:12,children:[(0,j.jsxs)(U.Z,{fullWidth:!0,children:[(0,j.jsx)(V.Z,{className:"mb-1",children:(0,v.Z)("front_my_day_work_activity_level")}),(0,j.jsx)(D.Z,{name:"workActiveLevel",value:e.values.workActiveLevel,onChange:function(n,r){e.setFieldValue("workActiveLevel",r)},row:!0,sx:{marginLeft:"10px",marginTop:"10px"},children:(0,Z.map)(s,(function(e,n){return(0,j.jsx)(B.Z,{value:null===e||void 0===e?void 0:e._id,control:(0,j.jsx)(G.Z,{varianttype:"option"}),label:(0,v.Z)(null===e||void 0===e?void 0:e.macroName),className:q.Z.radio_option},n)}))})]}),e.errors.workActiveLevel&&e.touched.workActiveLevel&&(0,j.jsx)(W.Z,{error:!0,children:(0,j.jsx)(M.Bc,{name:"workActiveLevel"})})]}),(0,j.jsxs)(o.ZP,{item:!0,xs:12,children:[(0,j.jsxs)(U.Z,{fullWidth:!0,children:[(0,j.jsx)(V.Z,{className:"mb-1",children:(0,v.Z)("front_my_leisure_time_activity_level")}),(0,j.jsx)(D.Z,{name:"leisureActiveLevel",value:e.values.leisureActiveLevel,onChange:function(n,r){e.setFieldValue("leisureActiveLevel",r)},row:!0,sx:{marginLeft:"10px",marginTop:"10px"},children:(0,Z.map)(c,(function(e,n){return(0,j.jsx)(B.Z,{value:null===e||void 0===e?void 0:e._id,control:(0,j.jsx)(G.Z,{varianttype:"option"}),label:(0,v.Z)(null===e||void 0===e?void 0:e.macroName),className:q.Z.radio_option},n)}))})]}),e.errors.leisureActiveLevel&&e.touched.leisureActiveLevel&&(0,j.jsx)(W.Z,{error:!0,children:(0,j.jsx)(M.Bc,{name:"leisureActiveLevel"})})]}),(0,j.jsx)(o.ZP,{item:!0,xs:12,children:(0,j.jsxs)(T.Z,{direction:"row",justifyContent:"space-between",children:[(0,j.jsx)(R.Z,{type:"button",variant:"outlined",color:"primary",onClick:r,disabled:e.isSubmitting,children:(0,v.Z)("common_btn_back")}),(0,j.jsxs)(T.Z,{direction:"row",spacing:1,children:[(0,j.jsx)(R.Z,{type:"submit",variant:"contained",children:(0,v.Z)("common_next")}),(0,j.jsx)(R.Z,{variant:"text",onClick:function(){m({step:2})},children:(0,v.Z)("common_skip")})]})]})})]})})}})})})},O=r(61419),Y=r(13967),$=r(48550),J=r(22697),H=r(72426),K=r.n(H),Q=r(94118),X=function(e){var n=e.handleNext,r=e.healthInfo,t=(0,g.I0)(),i=(0,Y.Z)(),s=r;console.log("health_data",s);var c=String((0,Z.get)(s,"weight.value","")).split(".")[0],u=String((0,Z.get)(s,"weight.value","")).split(".")[1],h=String((0,Z.get)(s,"height.value","")).split(".")[0],d=String((0,Z.get)(s,"height.value","")).split(".")[1],m=K()().subtract(16,"years"),x=(0,Z.get)(s,"age.month"),_=(0,Z.get)(s,"age.year"),p=K()("01/".concat(x,"/").concat(_)),f=E.Ry().shape({age:E.hT().required((0,v.Z)("front_error_age_is_required")),weightFirstInput:E.Rx().when("weightUnit",(function(e){return"kg"===e?E.Rx().positive((0,v.Z)("front_error_enter_positive_number")).min(39.91,(0,v.Z)("front_error_enter_minimum_39.91_kg")).max(254,(0,v.Z)("front_error_enter_maximum_254_kg")).required((0,v.Z)("front_error_weight_required")):"lbs"===e?E.Rx().positive((0,v.Z)("front_error_enter_positive_number")).min(88,(0,v.Z)("front_error_enter_minimum_88_lbs")).max(560,(0,v.Z)("front_error_enter_maximum_560_lbs")).required((0,v.Z)("front_error_weight_required")):"stLbs"===e?E.Rx().positive((0,v.Z)("front_error_enter_positive_number")).min(6.285,(0,v.Z)("front_error_enter_minimum_6.285_st")).max(40,(0,v.Z)("front_error_enter_maximum_40_st")).required((0,v.Z)("front_error_weight_required")):void 0})),weightSecondInput:E.Rx().when("weightUnit",(function(e){if("stLbs"===e)return E.Rx().positive((0,v.Z)("front_error_enter_positive_number")).min(88,(0,v.Z)("front_error_enter_minimum_88_lbs")).max(560,(0,v.Z)("front_error_enter_maximum_560_lbs")).required((0,v.Z)("front_error_weight_required"))})),heightFirstInput:E.Rx().when("heightUnit",(function(e){return"cm"===e?E.Rx().positive((0,v.Z)("front_error_enter_positive_number")).min(121.92,(0,v.Z)("front_error_minimum_121.92_CM")).max(213.36,(0,v.Z)("front_error_enter_maximum_213.36_cm")).required((0,v.Z)("front_error_height_is_required")):"ftInc"===e?E.Rx().positive((0,v.Z)("front_error_enter_positive_number")).min(4,(0,v.Z)("front_error_enter_minimum_4_foot")).max(7,(0,v.Z)("front_error_enter_maximum_7_foot")).required((0,v.Z)("front_error_height_is_required")):void 0})),heightSecondInput:E.Rx().when(["heightUnit","heightFirstInput"],(function(e,n){if("ftInc"===e)return n>=5&&n<=6?E.Rx().positive((0,v.Z)("front_error_enter_positive_number")).min(1,(0,v.Z)("front_error_enter_minimum_1_inch")).max(11,(0,v.Z)("front_error_enter_maximum_11_inch")):4===n?E.Rx().positive((0,v.Z)("front_error_enter_positive_number")).min(3,(0,v.Z)("front_error_enter_minimum_3_inch")).max(11,(0,v.Z)("front_error_enter_maximum_11_inch")):7===n?E.Rx().positive((0,v.Z)("front_error_enter_positive_number")).min(1,(0,v.Z)("front_error_enter_minimum_1_inch")).max(10,(0,v.Z)("front_error_enter_maximum_10_inch")):E.Rx().required((0,v.Z)("front_error_height_is_required"))}))}),b={"& .MuiSvgIcon-root":{fontSize:18},"&.Mui-checked":{color:i.palette.secondary.main,backgroundColor:i.palette.secondary.lighter}},w=function(){var e=(0,S.Z)((0,k.Z)().mark((function e(r){return(0,k.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t((0,A.xs)(r)).unwrap().then((function(e){e.status&&(n(1),t((0,A.$h)()))})).catch((function(e){console.log(" basic err",e)}));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(a.Z,{children:(0,j.jsx)(M.J9,{initialValues:{gender:(0,Z.get)(s,"gender","M"),age:p,weightFirstInput:c,weightSecondInput:u,weightUnit:(0,Z.get)(s,"weight.unit","kg"),heightFirstInput:h,heightSecondInput:d,heightUnit:(0,Z.get)(s,"height.unit","cm")},validationSchema:f,onSubmit:function(){var e=(0,S.Z)((0,k.Z)().mark((function e(n){var r,t,i,o,a;return(0,k.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=K()(n.age).format("MM"),t=K()(n.age).format("YYYY"),i="stLbs"===n.weightUnit?n.weightFirstInput+"."+n.weightSecondInput:parseFloat(n.weightFirstInput),o="ftInc"===n.heightUnit?n.heightFirstInput+"."+n.heightSecondInput:parseFloat(n.heightFirstInput),a={gender:n.gender,age:{month:parseInt(r),year:parseInt(t)},weight:{value:parseFloat(i),unit:n.weightUnit},height:{value:parseFloat(o),unit:n.heightUnit},step:1},e.next=7,w(a);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),children:function(e){return(0,j.jsx)("form",{onSubmit:e.handleSubmit,children:(0,j.jsxs)(o.ZP,{container:!0,spacing:2,children:[(0,j.jsx)(o.ZP,{item:!0,xs:12,className:"mb-2",children:(0,j.jsxs)(U.Z,{children:[(0,j.jsx)(V.Z,{id:"demo-controlled-radio-buttons-group",className:"mb-1",children:(0,v.Z)("front_your_gender")}),(0,j.jsxs)(D.Z,{"aria-labelledby":"demo-controlled-radio-buttons-group",name:"gender",value:e.values.gender,onChange:function(n,r){e.setFieldValue("gender",r)},row:!0,children:[(0,j.jsx)(B.Z,{value:"M",control:(0,j.jsx)(O.Z,{icon:(0,j.jsx)(Q.w,{}),checkedIcon:(0,j.jsx)(Q.w,{}),sx:b})}),(0,j.jsx)(B.Z,{value:"F",control:(0,j.jsx)(O.Z,{icon:(0,j.jsx)(Q.sh,{}),checkedIcon:(0,j.jsx)(Q.sh,{}),sx:b})})]})]})}),(0,j.jsx)(o.ZP,{item:!0,xs:12,children:(0,j.jsx)(J.O,{label:(0,v.Z)("front_your_age"),name:"age",value:e.values.age,onChange:function(n){var r=K()(n).format();e.setFieldValue("age",r)},onBlur:e.handleBlur,toolbarPlaceholder:"",closeOnSelect:!1,toolbarTitle:"Select Month & Year",views:["month","year"],maxDate:m,disableFuture:!0,renderInput:function(n){return(0,j.jsx)($.Z,(0,l.Z)((0,l.Z)({},n),{},{fullWidth:!0,error:!(!e.errors.age||!e.touched.age),helperText:e.errors.age&&e.touched.age?e.errors.age:null}))}})}),(0,j.jsxs)(o.ZP,{item:!0,xs:12,children:[(0,j.jsxs)(U.Z,{fullWidth:!0,children:[(0,j.jsx)(V.Z,{htmlFor:"weight",className:"mb-2",children:(0,v.Z)("front_your_current_weight")}),(0,j.jsxs)(T.Z,{direction:"row",spacing:1,children:[(0,j.jsx)($.Z,{label:"kg"===e.values.weightUnit?(0,v.Z)("common_kg"):"lbs"===e.values.weightUnit?(0,v.Z)("common_lbs"):(0,v.Z)("common_st"),fullWidth:!0,type:"number",name:"weightFirstInput",value:e.values.weightFirstInput,onChange:e.handleChange,onBlur:e.handleBlur,error:!(!e.errors.weightFirstInput||!e.touched.weightFirstInput),helperText:e.errors.weightFirstInput&&e.touched.weightFirstInput?e.errors.weightFirstInput:null}),"stLbs"===e.values.weightUnit&&(0,j.jsx)($.Z,{label:(0,v.Z)("common_lbs"),type:"number",fullWidth:!0,name:"weightSecondInput",value:e.values.weightSecondInput,onChange:e.handleChange,onBlur:e.handleBlur,inputProps:{inputMode:"decimal",maxLength:3},error:!(!e.errors.weightSecondInput||!e.touched.weightSecondInput),helperText:e.errors.weightSecondInput&&e.touched.weightSecondInput?e.errors.weightSecondInput:null})]})]}),(0,j.jsx)(U.Z,{fullWidth:!0,children:(0,j.jsxs)(D.Z,{name:"weightUnit",value:e.values.weightUnit,onChange:function(n,r){e.setFieldValue("weightUnit",r)},row:!0,sx:{marginLeft:"10px",marginTop:"10px"},children:[(0,j.jsx)(B.Z,{value:"kg",control:(0,j.jsx)(G.Z,{}),label:(0,v.Z)("common_kg")}),(0,j.jsx)(B.Z,{value:"lbs",control:(0,j.jsx)(G.Z,{}),label:(0,v.Z)("common_lbs")}),(0,j.jsx)(B.Z,{value:"stLbs",control:(0,j.jsx)(G.Z,{}),label:(0,v.Z)("common_st_&_lbs")})]})})]}),(0,j.jsxs)(o.ZP,{item:!0,xs:12,children:[(0,j.jsxs)(U.Z,{fullWidth:!0,children:[(0,j.jsx)(V.Z,{htmlFor:"height",className:"mb-2",children:(0,v.Z)("front_your_current_height")}),(0,j.jsxs)(T.Z,{direction:"row",spacing:1,children:[(0,j.jsx)($.Z,{id:"height",label:"cm"===e.values.heightUnit?(0,v.Z)("common_cm"):(0,v.Z)("common_ft"),type:"number",fullWidth:!0,name:"heightFirstInput",value:e.values.heightFirstInput,onChange:e.handleChange,onBlur:e.handleBlur,error:!(!e.errors.heightFirstInput||!e.touched.heightFirstInput),helperText:e.errors.heightFirstInput&&e.touched.heightFirstInput?e.errors.heightFirstInput:null}),"ftInc"===e.values.heightUnit&&(0,j.jsx)($.Z,{label:(0,v.Z)("common_inch"),type:"number",name:"heightSecondInput",value:e.values.heightSecondInput,onChange:e.handleChange,onBlur:e.handleBlur,fullWidth:!0,error:!(!e.errors.heightSecondInput||!e.touched.heightSecondInput),helperText:e.errors.heightSecondInput&&e.touched.heightSecondInput?e.errors.heightSecondInput:null})]})]}),(0,j.jsx)(U.Z,{children:(0,j.jsxs)(D.Z,{name:"heightUnit",value:e.values.heightUnit,onChange:function(n,r){e.setFieldValue("heightUnit",r)},row:!0,sx:{marginLeft:"10px",marginTop:"10px"},children:[(0,j.jsx)(B.Z,{value:"cm",control:(0,j.jsx)(G.Z,{}),label:(0,v.Z)("common_cm")}),(0,j.jsx)(B.Z,{value:"ftInc",control:(0,j.jsx)(G.Z,{}),label:(0,v.Z)("common_ft_&_inch")})]})})]}),(0,j.jsx)(o.ZP,{item:!0,xs:12,children:(0,j.jsxs)(T.Z,{direction:"row",spacing:2,justifyContent:"end",children:[(0,j.jsx)(R.Z,{type:"submit",variant:"contained",disabled:e.isSubmitting,children:(0,v.Z)("common_next")}),(0,j.jsx)(R.Z,{variant:"text",onClick:function(){w({step:1})},children:(0,v.Z)("common_skip")})]})})]})})}})})})},ee=r(45987),ne=r(5332),re=r(12065),te=["color","sx"],ie=(0,p.ZP)(ne.ZP)((function(e){var n=e.other,r=e.theme;return{"& .MuiSlider-valueLabel":{lineHeight:1.2,fontSize:12,padding:0,width:60,height:25,borderRadius:"4px",backgroundColor:(0,re.Fq)(r.palette[n.color].light,1),color:r.palette[n.color].main}}})),oe=function(e){var n=e.color,r=e.sx,t=(0,ee.Z)(e,te);return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(ie,(0,l.Z)({valueLabelDisplay:"auto",color:n,sx:(0,l.Z)({},r),other:e},t))})},ae=function(e){var n=e.handleNext,r=e.handleBack,i=(0,g.I0)(),l=(0,g.v9)((function(e){return e.common.goalType})),c=(0,g.v9)(A.cR),u=(0,Z.get)(c,"weight.value",58),h=(0,Z.get)(c,"weight.unit","kg"),d=function(e,n){return parseFloat((e/100*n).toFixed(2))},m=d(5,u),x=(0,t.useState)(parseInt((100*(0,Z.get)(c,"goalWeight.value",m)/u).toFixed(2))),_=(0,s.Z)(x,2),p=_[0],f=_[1],b=[{value:5,label:"5%"},{value:10,label:"10%"},{value:15,label:"15%"},{value:20,label:"20%"},{value:25,label:"25%"}],w={kg:{min:.1,max:1},lbs:{min:.22,max:2.2},stLbs:{min:.02,max:.2}},y=(0,t.useState)((0,Z.get)(c,"perWeekGoalWeight.value",w[h].min)),I=(0,s.Z)(y,2),C=I[0],F=I[1],L=function(e){return"".concat(d(e,u)," ").concat(h)},P=function(e){return"".concat(e," ").concat(h)},N=function(e,n){F(n)},z=function(e,n){f(n)},O=function(e){F(""===e.target.value?"":Number(e.target.value))},Y=E.Ry().shape({overallGoal:E.Z_().required((0,v.Z)("common_error_goal_type_required"))}),J=function(){var e=(0,S.Z)((0,k.Z)().mark((function e(r){var t;return(0,k.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i((0,A.xs)(r)).unwrap().then((function(e){e.status&&(n(3),i((0,A.$h)()))})).catch((function(e){console.log(" basic err",e)}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(a.Z,{children:(0,j.jsx)(M.J9,{initialValues:{overallGoal:(0,Z.get)(c,"overallGoal")},validationSchema:Y,onSubmit:function(e){var n={overallGoal:e.overallGoal,goalWeight:{value:d(p,u),unit:h},perWeekGoalWeight:{value:C,unit:h}};J(n)},children:function(e){return(0,j.jsx)("form",{onSubmit:e.handleSubmit,children:(0,j.jsxs)(o.ZP,{container:!0,spacing:2,children:[(0,j.jsx)(o.ZP,{item:!0,xs:12,children:(0,j.jsxs)(U.Z,{fullWidth:!0,children:[(0,j.jsx)(V.Z,{className:"mb-1",children:(0,v.Z)("front_my_overall_goal")}),(0,j.jsx)(D.Z,{name:"overallGoal",value:e.values.overallGoal,onChange:function(n,r){e.setFieldValue("overallGoal",r)},row:!0,sx:{marginLeft:"10px",marginTop:"10px"},children:(0,Z.map)(l,(function(e,n){return(0,j.jsx)(B.Z,{value:null===e||void 0===e?void 0:e._id,control:(0,j.jsx)(G.Z,{varianttype:"option"}),label:(0,v.Z)(null===e||void 0===e?void 0:e.macroName),className:q.Z.radio_option},n)}))}),(0,j.jsx)(W.Z,{error:!0,children:(0,j.jsx)(M.Bc,{name:"overallGoal"})})]})}),(0,j.jsx)(o.ZP,{item:!0,xs:12,children:(0,j.jsxs)(U.Z,{fullWidth:!0,children:[(0,j.jsx)(V.Z,{className:"mb-1",children:(0,v.Z)("front_my_goal_weight")}),(0,j.jsx)(oe,{name:"goalWeight",value:p,getAriaValueText:L,valueLabelFormat:L,valueLabelDisplay:"auto",marks:b,step:5,min:5,max:25,color:"secondary",onChange:z})]})}),(0,j.jsxs)(o.ZP,{item:!0,xs:12,children:[(0,j.jsx)(V.Z,{className:"mb-1",sx:{display:"block"},children:(0,v.Z)("front_per_week_of_weight_gain_loss")}),(0,j.jsx)($.Z,{label:"",variant:"outlined",name:"weight",value:"".concat(C," ").concat(h),onChange:O,inputProps:{readOnly:!0},sx:{maxWidth:80},error:!(!e.errors.weight||!e.touched.weight),helperText:e.errors.weight&&e.touched.weight?e.errors.weight:null}),(0,j.jsx)(oe,{valueLabelDisplay:"auto",getAriaValueText:P,valueLabelFormat:P,step:w[h].min,min:w[h].min,max:w[h].max,value:"number"===typeof C?C:0,onChange:N,color:"secondary"})]}),(0,j.jsx)(o.ZP,{item:!0,xs:12,children:(0,j.jsxs)(T.Z,{direction:"row",justifyContent:"space-between",children:[(0,j.jsx)(R.Z,{type:"button",variant:"outlined",color:"primary",onClick:r,children:(0,v.Z)("common_btn_back")}),(0,j.jsxs)(T.Z,{direction:"row",spacing:1,children:[(0,j.jsx)(R.Z,{type:"submit",variant:"contained",disabled:e.isSubmitting,children:(0,v.Z)("common_next")}),(0,j.jsx)(R.Z,{variant:"text",onClick:function(){J({step:3})},children:(0,v.Z)("common_skip")})]})]})})]})})}})})})},se=r(79012),le=r(74673),ce=r(57689);var ue=r.p+"static/media/last_step.3464db42fddaa0d1fda7e937dad74d9a.svg",he=r(90392),de=r(80066),me=r(94454),xe=["sx"],_e=(0,p.ZP)(me.Z)((function(e){var n=e.theme,r=e.other;return{"& .MuiSvgIcon-root":{fontSize:r.checkboxsize?r.checkboxsize:28},"& + .MuiTypography-root":{fontSize:r.fontSize},"&.Mui-checked":{"&, & + .MuiFormControlLabel-label":{backgroundColor:"inherit"},color:n.palette.secondary.main}}})),pe=function(e){var n=e.sx,r=(0,ee.Z)(e,xe);return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(_e,(0,l.Z)({sx:(0,l.Z)({},n),other:e},r))})},Ze=function(e){var n=e.handleBack,r=e.healthInfo,t=(0,de.AU)("consultantProfile"),i=(0,le.Z)(),l=(0,s.Z)(i,2)[1],c=(0,g.I0)(),u=(0,ce.s0)(),h=r,d=E.Ry().shape({termAndCondition:E.O7().oneOf([!0],(0,v.Z)("front_error_must_accept_terms_and_conditions"))}),m=function(){var e=(0,S.Z)((0,k.Z)().mark((function e(n){var r;return(0,k.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c((0,A.xs)(n)).unwrap().then(function(){var e=(0,S.Z)((0,k.Z)().mark((function e(n){return(0,k.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.status){e.next=5;break}return c((0,A.$h)()),e.next=4,c((0,he.L_)()).unwrap().then((function(e){e.status&&l("isSignupCompleted",(0,Z.get)(e,"data.termAndCondition",!1),{path:"/",expires:de.aV})})).catch((function(e){console.log("OTP error=======>",e)}));case 4:u(void 0!==t?t:"/dashboard");case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()).catch((function(e){console.log(" basic err",e)}));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(a.Z,{children:(0,j.jsx)(M.J9,{initialValues:{termAndCondition:(0,Z.get)(h,"termAndCondition",!1),subscription:(0,Z.get)(h,"subscription",!1)},validationSchema:d,onSubmit:function(e){var n={termAndCondition:e.termAndCondition,subscription:e.subscription};m(n)},children:function(e){return(0,j.jsx)("form",{onSubmit:e.handleSubmit,children:(0,j.jsxs)(o.ZP,{container:!0,spacing:2,children:[(0,j.jsx)(o.ZP,{item:!0,xs:12,sm:8,md:10,lg:8,className:"mx-auto",children:(0,j.jsx)(a.Z,{component:"img",src:ue,className:"img-fluid w-100"})}),(0,j.jsx)(o.ZP,{item:!0,xs:12,children:(0,j.jsxs)(se.Z,{children:[(0,j.jsx)(B.Z,{control:(0,j.jsx)(pe,{name:"termAndCondition",checked:e.values.termAndCondition,checkedIcon:(0,j.jsx)(Q.yz,{}),onChange:e.handleChange}),label:(0,v.Z)("common_terms_and_conditions")}),e.errors.termAndCondition&&(0,j.jsx)(W.Z,{error:!0,children:e.errors.termAndCondition}),(0,j.jsx)(B.Z,{control:(0,j.jsx)(pe,{name:"subscription",checked:e.values.subscription,checkedIcon:(0,j.jsx)(Q.yz,{}),onChange:e.handleChange}),label:(0,v.Z)("common_subscription")}),e.errors.subscription&&(0,j.jsx)(W.Z,{error:!0,children:e.errors.subscription})]})}),(0,j.jsx)(o.ZP,{item:!0,xs:12,children:(0,j.jsxs)(T.Z,{direction:"row",justifyContent:"space-between",children:[(0,j.jsx)(R.Z,{type:"button",variant:"outlined",color:"primary",onClick:n,children:(0,v.Z)("common_btn_back")}),(0,j.jsx)(T.Z,{direction:"row",spacing:1,children:(0,j.jsx)(R.Z,{type:"submit",variant:"contained",disabled:e.isSubmitting,children:(0,v.Z)("common_finish")})})]})})]})})}})})})},ge=function(){var e=(0,t.useState)(0),n=(0,s.Z)(e,2),r=n[0],i=n[1],o=(0,g.I0)(),l=(0,g.v9)(A.cR),u=(0,t.useState)(!1),h=(0,s.Z)(u,2),d=h[0],m=h[1],x=function(e){i((function(){return e})),o((0,f.H0)())},_=function(){i((function(e){return e-1})),o((0,f.wm)())},p=(0,t.useCallback)((0,S.Z)((0,k.Z)().mark((function e(){return(0,k.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o((0,N.G$)({sectionName:"DIETARY_PREFERENCE"})),o((0,N.V)({sectionName:"WORK_ACTIVITY_LEVEL"})),o((0,N.GN)({sectionName:"LEISURE_TIME_ACTIVITY_LEVEL"})),o((0,N.O2)({sectionName:"GOAL_TYPE"})),e.next=6,o((0,A.$h)()).unwrap().then((function(e){e.status&&(o((0,f.ZL)((0,Z.get)(e.data,"step",0))),i((0,Z.get)(e.data,"step",0)),m(!0))}));case 6:case"end":return e.stop()}}),e)}))),[o]),b=(0,t.useMemo)((function(){return(0,Z.debounce)(p,1e3)}),[p]);(0,t.useEffect)((function(){b()}),[b]);var w=[{label:(0,v.Z)("common_basic_information"),formData:(0,j.jsx)(X,{handleNext:x,handleBack:_,healthInfo:l})},{label:(0,v.Z)("front_about_me"),formData:(0,j.jsx)(z,{handleNext:x,handleBack:_,healthInfo:l})},{label:(0,v.Z)("front_my_goals"),formData:(0,j.jsx)(ae,{handleNext:x,handleBack:_,healthInfo:l})},{label:(0,v.Z)("common_terms_and_conditions"),formData:(0,j.jsx)(Ze,{handleNext:x,handleBack:_,healthInfo:l})}];return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(a.Z,{component:"div",children:(0,j.jsx)(P.Z,{activeStep:r,orientation:"vertical",className:q.Z.stepper,children:d&&w.map((function(e,n){return(0,j.jsxs)(C.Z,{children:[(0,j.jsx)(L.Z,{optional:4===n?(0,j.jsx)(c.Z,{variant:"caption",children:(0,v.Z)("common_last_step")}):null,children:e.label}),(0,j.jsx)(F.Z,{children:(0,j.jsx)(a.Z,{children:e.formData})})]},n)}))})})})},fe=function(){return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(a.Z,{component:"section",sx:{py:{sm:6.4,xs:4}},className:"d-flex align-items-center justify-content-center w-100",children:(0,j.jsx)(i.Z,{maxWidth:"xl",children:(0,j.jsxs)(o.ZP,{container:!0,spacing:2,sx:{justifyContent:{md:"space-between",xs:"center"}},column:12,children:[(0,j.jsx)(o.ZP,{item:!0,lg:6,md:6,children:(0,j.jsx)(ge,{})}),(0,j.jsx)(o.ZP,{item:!0,lg:5,md:6,children:(0,j.jsx)(I,{})})]})})})})}}}]);
//# sourceMappingURL=919.b6640ab3.chunk.js.map