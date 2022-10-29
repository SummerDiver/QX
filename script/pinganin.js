var body = $response.body
var obj = JSON.parse(body)

obj.status = 1
obj.msg = '研究生用户，入校授权有效！'
body = JSON.stringify(obj)
$done({ body })