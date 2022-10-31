let obj = JSON.parse($response.body)

let url = new URL($request.url)
let searchParams = new URLSearchParams(url.search)

obj.status = 1
obj.msg = `${searchParams.get(`controllerId`)}`

const body = JSON.stringify(obj)
$done({ body })