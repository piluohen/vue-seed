webpackJsonp([5],{"+qwT":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t("Dd8w"),o=t.n(i),a=t(2);n.default={data:function(){return{loading:!1,explainDialogVisible:!1,expertInfo:{},formSubmitting:!1,demandFormVerifyRule:{companyIntroduces:[{message:"请输入调研公司信息",trigger:"blur",required:!0}],content:[{message:"请输入调研描述",trigger:"blur",required:!0}],intentionUserName:[{message:"请输入发布者名称",trigger:"blur",required:!0}],intentionUserJob:[{message:"请输入发布者职务",trigger:"blur",required:!0}],intentionUserCompany:[{message:"请输入发布者公司",trigger:"blur",required:!0}],intentionUserEmail:[{message:"请输入电子邮箱",trigger:"blur",required:!0}],intentionUserTel:[{message:"请输入联系方式",trigger:"blur",required:!0}]}}},components:{},watch:{$route:function(e){this.demandForm.objectId=e.query.expertId||null}},computed:o()({},t.i(a.mapState)({userIsLogin:function(e){return e.User.isLogin},userInfo:function(e){return e.User.userInfo},loginToUrl:function(e){return e.User.loginToUrl},curPageUrl:function(e){return e.Site.curPageUrl}}),{demandForm:function(){return{companyIntroduces:"",content:"",intentionUserName:this.userInfo.realName||"",intentionUserJob:this.userInfo.job||"",intentionUserCompany:this.userInfo.companyName||"",intentionUserEmail:this.userInfo.email||"",intentionUserTel:this.userInfo.userName||"",objectId:this.$route.query.expertId||null}}}),methods:{demandSubmit:function(){var e=this;this.formSubmitting||(this.formSubmitting=!0,this.$refs.demandForm.validate(function(n){if(n){var t=e.demandForm;e.Api.researchBill(t).then(function(n){var t=n.data;200===t.statusCode?(e.closeDemandDialog(),e.$alert("调研单发布成功","提示",{type:"success",confirmButtonText:"确定"}),e.changeSubmitStatus()):(e.$message({message:t.desc,type:"error"}),e.changeSubmitStatus())})}else e.formSubmitting=!1}))},closeDemandDialog:function(){this.explainDialogVisible=!1,this.$refs.demandForm.resetFields()},changeSubmitStatus:function(e){var n=this;setTimeout(function(){n.formSubmitting=!1},e||3e3)}},created:function(){var e=this;this.demandForm.objectId&&this.Api.getExpertDetail(this.demandForm.objectId).then(function(n){200===n.data.statusCode?e.expertInfo=n.data.rows:e.$message({message:n.data.desc,type:"error"})})}}},Ig6y:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQ3MEIxNjJEMEY5NTExRTdBMDExOUUyQUZGQ0E3NTIzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQ3MEIxNjJFMEY5NTExRTdBMDExOUUyQUZGQ0E3NTIzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDcwQjE2MkIwRjk1MTFFN0EwMTE5RTJBRkZDQTc1MjMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDcwQjE2MkMwRjk1MTFFN0EwMTE5RTJBRkZDQTc1MjMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7zUK5NAAABp0lEQVR42qyVMUsDQRCFzZ1aaCWIkC6VRGIjKU1jE1OZ5iSNzQULC3+AP8FaIljlGptoEGJ1sUmjnekMBNKkE0QQRRSVu/gW3h2bdfdMkYEvkNuZl5m9mUlqNBrNTNNmxYfneepzC5SBA7ZAms8fQQc0QQuE4qHruuOCiuVBHeTADTgGQ55lQAlcgh6ogu6fDCXbAQ1wB9ZBX/ODJyALauAWVMC1XJqcmRA7B9uK2CKYl7736SN8G7iyvCposUyR2QEIpOAFMAD3SqYBfUVMHaKWLFjmnR0qYsJWwBxY0pQfMCZHjVjQ4QvQ3dkLA78NndJnrCMLitbwDQGvFPxKaD+fGrFgWmoNnf2Az4TzYdSr1oQDIO7waRJHS5qATILfO31MlonOI8EOJ8BkF+Aq4bxEjVhQzGaRE6DaMtgHp8DWnGcZ25QFW5zNmiEoZcjMZkyPGrFgyEHfBGeK6DNYBWtK09v0FTFVbJxQfctdDvoeaCvlv4EPpcw2fSsQ65q2jdgaBc71AyfA16yvIsss/Le+okw3pAV7pFmwu/KCHbvsaf8F/AowAHf0alWJPDx8AAAAAElFTkSuQmCC"},j7rn:function(e,n,t){var i=t("uJlI");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);t("rjj0")("45006dba",i,!0)},k7gI:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"release-research"},[t("div",{staticClass:"layout-wrap"},[e._m(0),e._v(" "),t("div",{staticClass:"demand-form"},[t("el-form",{ref:"demandForm",attrs:{model:e.demandForm,rules:e.demandFormVerifyRule,"label-width":"125px"}},[e.demandForm.objectId?t("div",{staticClass:"expert-baseinfo"},[t("div",{staticClass:"company-info-title"},[e._v("专家信息：")]),e._v(" "),t("div",{staticClass:"baseinfo"},[t("h3",[t("span",{attrs:{title:e.expertInfo.expertName}},[e._v(e._s(e._f("subStr")(e.expertInfo.expertName,6)))]),e._v(" "),e.expertInfo.city?t("span",{staticClass:"city",attrs:{title:e.expertInfo.city}},[e._v(e._s(e._f("subStr")(e.expertInfo.city,10)))]):e._e()]),e._v(" "),t("p",[t("span",{attrs:{title:e.expertInfo.positionName}},[e._v(e._s(e._f("subStr")(e.expertInfo.positionName,10)))]),e._v(" "),e.expertInfo.positionName&&e.expertInfo.companyName?t("span",[e._v(" | ")]):e._e(),e._v(" "),e.expertInfo.companyName?t("span",{attrs:{title:e.expertInfo.companyName}},[e._v(e._s(e._f("subStr")(e.expertInfo.companyName,15)))]):e._e(),e._v(" "),e.expertInfo.yearsOfWorking?t("span",[e._v(" "+e._s(e.expertInfo.yearsOfWorking)+"年")]):e._e()]),e._v(" "),t("p",[e._v(e._s(e._f("subStr")(e.expertInfo.expertIntroduces,165)))])])]):e._e(),e._v(" "),t("div",{staticClass:"company-info-title required"},[e._v("调研公司信息：")]),e._v(" "),t("el-form-item",{attrs:{prop:"companyIntroduces","label-width":"1px"}},[t("el-input",{attrs:{type:"textarea",rows:5,autofocus:"true",placeholder:"请尽可能的对公司信息进行描述，以便客服人员安排相应的专家进行调研"},model:{value:e.demandForm.companyIntroduces,callback:function(n){e.demandForm.companyIntroduces=n},expression:"demandForm.companyIntroduces"}})],1),e._v(" "),t("div",{staticClass:"company-info-title required"},[e._v("调研描述：")]),e._v(" "),t("el-form-item",{attrs:{prop:"content","label-width":"1px"}},[t("el-input",{attrs:{type:"textarea",rows:5,autofocus:"true",placeholder:"请尽可能说明具体内容问题，并对背景有所介绍，让专家能够快速理解您调查内容的重点"},model:{value:e.demandForm.content,callback:function(n){e.demandForm.content=n},expression:"demandForm.content"}})],1),e._v(" "),t("div",{staticClass:"user-info"},[t("el-form-item",{attrs:{prop:"intentionUserName",label:"发布者名称："}},[t("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"请填写发布者的姓名"},model:{value:e.demandForm.intentionUserName,callback:function(n){e.demandForm.intentionUserName=n},expression:"demandForm.intentionUserName"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"intentionUserCompany",label:"发布者公司："}},[t("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"请填写发布者公司信息，如公司名称等"},model:{value:e.demandForm.intentionUserCompany,callback:function(n){e.demandForm.intentionUserCompany=n},expression:"demandForm.intentionUserCompany"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"intentionUserJob",label:"发布者职务："}},[t("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"请填写发布者的职务信息"},model:{value:e.demandForm.intentionUserJob,callback:function(n){e.demandForm.intentionUserJob=n},expression:"demandForm.intentionUserJob"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"intentionUserEmail",label:"电子邮箱："}},[t("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"请填写发布者电子邮箱"},model:{value:e.demandForm.intentionUserEmail,callback:function(n){e.demandForm.intentionUserEmail=n},expression:"demandForm.intentionUserEmail"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"intentionUserTel",label:"联系方式："}},[t("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"请务必填写联系方式，以便后续联系"},model:{value:e.demandForm.intentionUserTel,callback:function(n){e.demandForm.intentionUserTel=n},expression:"demandForm.intentionUserTel"}})],1),e._v(" "),t("el-form-item",[t("el-button",{staticClass:"btn-demandSubmit",attrs:{type:"primary",disabled:e.formSubmitting},on:{click:e.demandSubmit}},[e._v("提交\n            ")])],1)],1)],1),e._v(" "),t("el-dialog",{attrs:{title:"需求发布说明","custom-class":"yzk-dialog explain-dialog",size:"small"},model:{value:e.explainDialogVisible,callback:function(n){e.explainDialogVisible=n},expression:"explainDialogVisible"}},[t("div",{staticClass:"explain-content"},[t("p",[e._v("- 发布者按照需求表单填写好需求咨询单后，云智库将有专人与您联系。")]),e._v(" "),t("p",[e._v("- 云智库与发布者确认好需求后，将正式发布此需求并告知发布者。")]),e._v(" "),t("p",[e._v("- 需求正式发布后，云智库上的认证专家可以报名参与此需求。")]),e._v(" "),t("p",[e._v("- 发布者可通过云智库平台及时联系以及和报名专家进行沟通。")]),e._v(" "),t("p",[e._v("- 在发布者未确定专家人选前，报名专家可以取消报名。")]),e._v(" "),t("p",[e._v("- 发布者通过云智库与专家沟通后，确定合作专家及给予沟通评价，并在线下完成合作签约。")]),e._v(" "),t("p",[e._v("- 任何其他疑问，可联系云智库客服电话：400-860-0550。")])]),e._v(" "),t("div",{staticClass:"dialog-btn-item"},[t("el-button",{staticClass:"btn-iknow",attrs:{type:"primary"},on:{click:function(n){e.explainDialogVisible=!1}}},[e._v("知道了")])],1)])],1)])])},staticRenderFns:[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"rr-title"},[t("h3",[e._v("发布调研单")])])}]}},ss88:function(e,n,t){function i(e){t("j7rn")}var o=t("VU/8")(t("+qwT"),t("k7gI"),i,null,null);e.exports=o.exports},uJlI:function(e,n,t){n=e.exports=t("FZ+f")(),n.push([e.i,"\n.yzk-dialog .el-dialog__header {\n  background: #1d86eb;\n  line-height: 35px;\n  padding-top: 0;\n}\n.yzk-dialog .el-dialog__title {\n  color: #fff;\n  font-weight: normal;\n}\n.yzk-dialog .el-dialog__close {\n  color: #fff;\n}\n.yzk-dialog .el-dialog__close:hover {\n  color: #efefef;\n}\n.yzk-dialog .el-dialog__close:before {\n  font-size: 14px;\n}\n.yzk-dialog .dialog-btn-item {\n  text-align: center;\n  padding: 40px 0 10px;\n}\n.yzk-dialog .btn-iknow {\n  width: 90px;\n}\n.release-research {\n  border-top: 1px solid #dedede;\n}\n.rr-title {\n  border-bottom: 1px solid #dedede;\n  margin-top: 50px;\n}\n.rr-title h3 {\n    color: #3e3e3e;\n    font-size: 24px;\n    font-weight: normal;\n    display: inline-block;\n    border-bottom: 3px solid #2788e8;\n    margin-bottom: -1px;\n    padding: 9px 0;\n}\n.rr-title span {\n    display: inline-block;\n    cursor: pointer;\n    float: right;\n    padding-left: 25px;\n    margin-top: 15px;\n    background: url("+t("Ig6y")+') no-repeat left center;\n}\n.demand-form {\n  margin-bottom: 80px;\n}\n.demand-form .company-info-title {\n    font-size: 20px;\n    color: #3e3e3e;\n    margin-top: 0px;\n    padding: 20px 0;\n}\n.demand-form .company-info-title.required:before {\n    content: "*";\n    padding-right: 10px;\n    color: red;\n    vertical-align: middle;\n}\n.demand-form .user-info {\n    width: 600px;\n    margin: 0 auto;\n    padding-top: 20px;\n}\n.demand-form .el-form-item__label {\n    font-size: 16px;\n    color: #3e3e3e;\n}\n.demand-form .btn-demandSubmit {\n    width: 200px;\n    margin: 20px 0 0 80px;\n}\n.explain-dialog .explain-content p {\n  font-size: 14px;\n  color: #3e3e3e;\n  line-height: 200%;\n}\n.expert-baseinfo .baseinfo {\n  padding-left: 8px;\n}\n.expert-baseinfo h3 {\n  font-weight: normal;\n  font-size: 24px;\n  margin-bottom: 10px;\n  color: #3e3e3e;\n}\n.expert-baseinfo h3 .city {\n    font-size: 14px;\n    margin-left: 20px;\n    padding-left: 20px;\n    background: url('+t("x2MR")+") no-repeat left center;\n}\n.expert-baseinfo p {\n  margin: 5px 0;\n  font-size: 14px;\n  line-height: 180%;\n  word-wrap: break-word;\n}\n",""])},x2MR:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjgwQkUxRUREMEY5MDExRTc4NTY2RjBCRjIyOEE4RUNCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjgwQkUxRURFMEY5MDExRTc4NTY2RjBCRjIyOEE4RUNCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODBCRTFFREIwRjkwMTFFNzg1NjZGMEJGMjI4QThFQ0IiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODBCRTFFREMwRjkwMTFFNzg1NjZGMEJGMjI4QThFQ0IiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6ECOeqAAABn0lEQVR42syUzytEURTH5yFJktjMxkrRbCxNfpYljaYspERZSEr5tRjNgppEZGqSJAthJz8W3szCxkYp+QeksJCiycLKb8/ncBZ6M6+umoVbn773vXPueee8e8+1HMfx5XLk+XI8CrwMyWSyF5kCP3zqx+9gJhQKbf4pQ4KtIFuwAy3QAI2wDxvYV40D4tyFDEEVmUTRSViHMZ4jaA0M4tdtmqFkl2DxFYtkx8rhAGp5fuf9BfNl9csYlnuXWfSBVMM8VBIg+Mt2g+zBAtxis0wyfIYXaAL3z9+FNnhUP6OSi0HS3oaYyzYKa1ACRaYB5WhMU86IHBfKvIcUPPF8zvs4Ogdp04ATMKBzv/6zUlgiWEDf96tf5pBNcWPbdhpOPWwn8JDNJni1Xp1AmeOuEyC/oV7t5p1CadciECdIpwYLy/mEMPZLr4BWttuGxe3IGfTBorahzCPaNUGCpkxbbxgR5wrd0Q4IaGZyoMt+3L7LN7pt3lRjLDpGD6FHqtGPNbv8jEpuRWb1IigEacd8eAXp5SjZHhkH/Fc39pcAAwBCns2QMaQIPQAAAABJRU5ErkJggg=="}});