let url = $request.url
let obj = JSON.parse($response.body)

obj.status = 1
obj.msg = `研究生用户，${url.indexOf(`030`) ? `出` : `入`}校授权有效！`

const body = JSON.stringify(obj)
$done({ body })