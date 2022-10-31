let obj = JSON.parse($response.body)

const url = new URL($request.url)
const searchParams = new URLSearchParams(url.search)
const controllerId = searchParams.get('controllerId')

const inId = ['021', '1000006$7$0$0']
const outId = ['030', '1000000$7$0$0', '1000011$7$0$0', '1000020$7$0$0']

obj.status = 1
obj.msg = `研究生用户，${outId.indexOf(controllerId) >= 0 ? `出` : `入`}校授权有效！`

const body = JSON.stringify(obj)
$done({ body })