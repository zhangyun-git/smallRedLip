# smallRedLip
小红唇
## 调用接口获取数据
## 获取产品列表
@url get（https://wapi.xiaohongchun.com/applet/v1/index?&tdsourcetag=s_pcqq_aiomsg）
## 获取详情页的数据
@url get (`https://wapi.xiaohongchun.com/applet/v1/goods/${id}/detail`)
## 项目介绍
本项目分为两个页面，分别是首页和我的页面
### 首页
首页是一个轮播图外加列表，点击列表传个id到详情页，然后在详情页在进行渲染，
详情页有一个小动画，这个动画是把每个买家依次展示出来
# ![图片](https://note.youdao.com/yws/public/resource/f97088e95e823457e809fd4962c4f9c3/xmlnote/D14B53785072426E9FD20D82D8B71FC9/6046)

# ![图片](https://note.youdao.com/yws/public/resource/f97088e95e823457e809fd4962c4f9c3/xmlnote/75C5000BDEC045B0B8124A035625BC90/6050)

### 我的页面
我的页面实现了一个简单的排版，然后获取用户的头像及用户名
# ![图片](https://note.youdao.com/yws/public/resource/f97088e95e823457e809fd4962c4f9c3/xmlnote/EFB15AC4B00B4661AB32CE3409E06E37/6053)
在订单管理这部分，如果没有订单，当点击**去小红唇商场逛逛**，就会跳转到首页，如下页面：
# ![图片](https://note.youdao.com/yws/public/resource/f97088e95e823457e809fd4962c4f9c3/xmlnote/06557DD622E249C18D5155905A99D658/6056)