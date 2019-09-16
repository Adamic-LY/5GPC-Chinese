/*
 * jQuery.validator表单校验 自定义校验 2019.01.18
 *                         自定义校验更新 2019.05.14
 * */

//手机号
jQuery.validator.addMethod("isMobile", function (value, element) {
    var _val = value.replace(/\D/g, "");
    var mobile = /^(1[3-9][0-9]{9})$/;
    var length = _val.length;
    return this.optional(element) || (length == 11 && mobile.test(_val));
}, "请正确填写您的手机号码");

//身份证
jQuery.validator.addMethod("isID", function (value, element) {
    var idReg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    return this.optional(element) || idReg.test(value);
}, "请正确填写您的身份证号码");
jQuery.validator.addMethod("isIdCardNo", function (value, element) {
    return this.optional(element) || idCardNoUtil.checkIdCardNo(value);
}, "身份证号错误");

// 字母
jQuery.validator.addMethod("isName", function (value, element) {
    var reg = /^[a-zA-Z\s]+$/;
    return this.optional(element) || reg.test(value);
}, "请填写您名字的拼音");

//邮箱
jQuery.validator.addMethod("isEmail", function (value, element) {
    var mailReg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
    return this.optional(element) || mailReg.test(value);
}, "请正确填写您的邮箱地址");

//不允许是纯数字
jQuery.validator.addMethod("isNotPureNumber", function (value, element) {
    return this.optional(element) || isNaN(value);
}, "不允许是纯数字");

//不允许输入汉字
jQuery.validator.addMethod("isHanzi", function (value, element) {
    var reg = /^[^\u4e00-\u9fa5]+$/;
    return this.optional(element) || (reg.test(value));
}, "不允许输入汉字");

//填写手机号或邮箱
jQuery.validator.addMethod("isMobileOrMail", function (value, element) {
    var length = value.length;
    var mobile = /^(1[3-9][0-9]{9})$/;
    var mailReg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
    return this.optional(element) || (length == 11 && mobile.test(value) || mailReg.test(value));
}, "请正确填写您的手机号码或邮箱地址");