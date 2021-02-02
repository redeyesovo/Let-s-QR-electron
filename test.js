//const axios = require('axios');
//const FormData = require('form-data');
//var request = require('request');
//var fs = require('fs');
//
//let bodyFormData = new FormData();
//bodyFormData.append('u', fs.createReadStream('/Users/mac/Documents/Let\'s-QR/test/2.jpeg'));
//axios({
//	method: 'post',
//	url: 'https://oms.keqin-it.com/w/decode',
//	headers: {
//			'Content-Type': `multipart/form-data; boundary=${bodyFormData._boundary}`
//	},
//	data: bodyFormData
//})
//.then( res => {
//	console.log(res.data)
//})
var axios = require('axios');
const params = {
			access_token: '787670442700533a2b4e7cf74571b305',
			timestamp: Math.floor(Date.now() / 1000),
			nonce: '7805a09187e4fe60bac6',
			account_id: 14605912,
			level: 'REPORT_LEVEL_ADVERTISER_WECHAT',
			'fields[]': [
				'account_id',
				'date',
				'view_count',
				'thousand_display_price',
				'valid_click_count',
				'ctr',
				'cpc',
				'cost',
				'platform_page_view_count',
				'web_order_cost',
				'order_amount',
				'order_unit_price',
				'order_roi',
				'forward_count',
				'praise_count',
				'comment_count',
				'conversions_count',
				'conversions_rate',
				'conversions_cost',
				'video_play_count',
				'click_image_count',
				'click_detail_count',
				'click_head_count',
				'click_nick_count',
				'video_inner_play_count',
				'cpn_click_button_count',
				'cpn_click_button_uv',
				'no_interest_count',
				'first_day_order_count',
				'first_day_order_amount',
				'video_outer_play_count',
				'wechat_account_id',
				'wechat_agency_id',
				'cost_deviation_rate',
				'compensation_amount',
				'view_user_count',
				'avg_view_per_user',
				'click_user_count',
				'image_click_user_count',
				'video_click_user_count',
				'link_click_user_count',
				'portrait_click_user_count',
				'nickname_click_user_count',
				'platform_key_page_view_user_count',
				'platform_key_page_avg_view_per_user',
				'platform_key_page_view_duration',
				'cpn_click_button_cost',
				'praise_user_count',
				'comment_user_count',
				'order_count',
				'order_rate',
				'official_account_follow_count',
				'official_account_follow_cost',
				'official_account_follow_rate',
				'official_account_consult_count',
				'official_account_reader_count',
				'forward_user_count',
				'video_outer_play_user_count',
				'video_inner_play_user_count',
			],
			date_range: `{"start_date":"2020-08-23","end_date":"2020-08-23"}`,
			page: 1,
			page_size: 200
		};
		const gateway = 'https://api.e.qq.com/v1.3/daily_reports/get?https://api.e.qq.com/v1.3/daily_reports/get?access_token=787670442700533a2b4e7cf74571b305&timestamp=1598258606&nonce=7805a09187e4fe60bac6&account_id=14605912&level=REPORT_LEVEL_ADVERTISER_WECHAT&fields[]=[account_id,date&view_count,thousand_display_price,valid_click_count,ctr,cpc,cost,platform_page_view_count,web_order_cost,order_amount,order_unit_price,order_roi,forward_count,praise_count,comment_count,conversions_count,conversions_rate,conversions_cost,video_play_count,click_image_count,click_detail_count,click_head_count,click_nick_count,video_inner_play_count,cpn_click_button_count,cpn_click_button_uv,no_interest_count,first_day_order_count,first_day_order_amount,video_outer_play_count,wechat_account_id,wechat_agency_id,cost_deviation_rate,compensation_amount,view_user_count,avg_view_per_user,click_user_count,image_click_user_count,video_click_user_count,link_click_user_count,portrait_click_user_count,nickname_click_user_count,platform_key_page_view_user_count,platform_key_page_avg_view_per_user,platform_key_page_view_duration,cpn_click_button_cost,praise_user_count,comment_user_count,order_count,order_rate,official_account_follow_count,official_account_follow_cost,official_account_follow_rate,official_account_consult_count,official_account_reader_count,forward_user_count,video_outer_play_user_count,video_inner_play_user_count]&date_range={start_date=2020-08-23,end_date=2020-08-23}&page=1&page_size=200}';
//var data = JSON.stringify({"items":[{"mpId":1792,"start":"2020-07-01","end":"2020-07-08"},{"mpId":1691,"start":"2020-07-01","end":"2020-07-02"}]});
console.log(gateway);
var config = {
	method: 'get',
	url: gateway
};

axios(config)
.then(function (response) {
	console.log(JSON.stringify(response.data));
})
.catch(function (error) {
	console.log(error);
});
