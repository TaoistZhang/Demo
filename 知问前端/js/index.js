$(function () {

	$('#search_button').button({
		icons:{
			primary:'ui-icon-search',	//放大镜图标
			secondary:'ui-icon-triangle-1-s',	//倒三角图标
		},
	});
	
	//点击注册
	$('#reg_a').click(function () {
		$('#reg').dialog({
//			autoOpen:true,
			modal:true,	//遮罩效果
			width:'320',
			height:'340',
			title:'知问注册',
			buttons:{
				'提交' : function () {
					$(this).submit();
					$('#loading').dialog({
						modal: true,
						resizable: false,
						draggable: false,
						closeOnEscape: false,	//不能按ESC关闭窗口
						width: 160,
						height: 80,
					}).parent().parent().find('.ui-widget-header').hide();	//去除窗口上部横栏;
				},
				'取消' : function () {
					$(this).dialog('close');
				},
			},
			position : 'top center',
			show : 'slide',
			hide : 'slide',
			resizable:'false',
			closeText : '关闭',
		});
		
		$('#sex').buttonset();	//圆点改为按钮式样
		$('#date').datepicker();	//调取日历
		
		//悬浮式提示框
		$('#reg input[title]').tooltip({
			show : false,	//关闭淡入效果
			hide : false,	//关闭淡出效果
			position : {
				my : 'left center',
				at : 'right+5 center',
			},
		});	
		
		//自动补全提示
		var hosts=['China','USA','Japan','England'];
		$('#nation').autocomplete({
			source:hosts,
			delay:0,
			minLength:1,
			autoFocus:true,
		});	
		
		//使用表单提交验证插件验证注册信息
		$('#reg').validate({
			rules: {
				user: {
					required: true,	//不得为空
					rangelength: [2,10],
				},
				pass: {
					required: true,	
					minlength: 6,
				},
				nation: {
					required: true,	
					minlength: 2,
				},
				date: {
					date:true,
				},
			},
			messages: {
				user: {
					rquired: '账号不得为空！',
					rangelength: '帐号不得小于{0}位或大于{1}位！',
				},
				pass: {
					rquired: '密码不得为空！',
					minlength: '密码不得小于{0}位！',
				},
				nation: {
					rquired: '国别不得为空！',
					minlength: '请输入国家代码简称！',
				},
			},
			errorLabelContainer: 'ol.reg_error',	//将错误验证保存到ol处显示，不打乱下方排版
			wrapper: 'li',	//包裹方式
			
			//错误验证自动调整窗口高度，不显示滚动条
			showErrors : function (errorMap, errorList) {	
				var errors = this.numberOfInvalids();
				if (errors > 0) {
					$('#reg').dialog('option', 'height', errors * 20 + 340);
				} else {
					$('#reg').dialog('option', 'height', 340);
				}
				this.defaultShowErrors();
			},
			
			//验证成功*显示ok
			unhighlight : function (element, errorClass) {
				$(element).parent().find('span').html('ok');
			},
		});
	});
	
	
	//点击登录
	$('#login_a').click(function () {
		$('#login').dialog({
			modal:true,
			width:'320',
			height:'240',
			title:'知问登录',
			buttons:{
				'提交' : function () {
					$(this).submit();
					$('#loading').dialog({
						modal: true,
						resizable: false,
						draggable: false,
						closeOnEscape: false,
						width: 160,
						height: 80,
					}).parent().parent().find('.ui-widget-header').hide();
				},
				'取消' : function () {
					$(this).dialog('close');
				},
			},
			position : 'top center',
			show : 'slide',
			hide : 'slide',
			resizable:'false',
			closeText : '关闭',
		});
		
		//使用表单提交验证插件验证登录信息	
		$('#login').validate({
			rules: {
				login_user: {
					required: true,
					rangelength: [2,10],
				},
				login_pass: {
					required: true,	
					minlength: 6,
				},
			},
			messages: {
				login_user: {
					rquired: '账号不得为空！',
					rangelength: '帐号不得小于{0}位或大于{1}位！',
				},
				login_pass: {
					rquired: '密码不得为空！',
					minlength: '密码不得小于{0}位！',
				},
			},
			errorLabelContainer: 'ol.login_error',	
			wrapper: 'li',
		
			unhighlight : function (element, errorClass) {
				$(element).parent().find('span').html('ok');
			},
		});		
	});
	
	//选项卡
	$('#tabs').tabs({
		collapsible: true,	//可点击折叠		
	});
	
	//折叠菜单
	$('#accordion').accordion({
		collapsible: true,
		event:'mouseover',
		heightStyle: 'content',	//根据内容调整展开高度
	});
});


























