let obj = JSON.parse($response.body)

let replenished = obj.data.calendars.filter(item => item.replenished_time)

let replenished_obj = {
  user_id: 5131078,
  status: -1,
  rewards: [],
  reward_voc: 0,
  reward_card: 0,
  created_time: "2022-12-15T08:28:40.981Z",
  sign_date: "2022-12-09T16:00:00.000Z",
  replenished_time: "2022-12-15T08:30:39.981Z",
  id: "639adb2e7a7d0000a1004094"
}

obj.data.calendars.splice(replenished_obj.length, 0, replenished_obj)

const body = JSON.stringify(obj)
$done({ body })