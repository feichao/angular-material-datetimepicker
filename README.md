# datetimepicker
angular material datetimepicker inherits from md-date-time.

### [demo](http://www.0xfc.cn/article/0/57e77416a450230821a53871) ###
> ![demo](http://o8tapqn1p.bkt.clouddn.com/20160925-angular-material-datetime-date.png)
> ![demo](http://o8tapqn1p.bkt.clouddn.com/20160925-angular-material-datetime-time.png)

**demo**

> demo/index.html

**dependencies**
> daterange-picker depends on angular, angular material, md-date-time.

**install**
> `bower install mdDatetimeInline --save`

**how to use**

> styles:
> 1. angular-material.css
> 2. md-date-time.css
> 3. font-awesome.css
> 4. datetimepicker.css

> scripts:
> 1. angular-material.js
> 2. md-date-time.js
> 3. datetimepicker.js

> `app.module('your angular app name','mdDatetimeInline')`

**use like this**

> `<daterange-picker dateLang: '@' dateLabel: '@'  startDate: '=' endDate: '=?' minDate: '@' maxDate: '@' dateType: '@' dateLength: '=?' confirm-event='&?'>
</daterange-picker>`

**params**
> init-datatime: datetime, format is 'yyyy-MM-dd HH:mm:ss'
>
> placeholder: input placeholder
>
> date-changed: callback once init-datatime changed
