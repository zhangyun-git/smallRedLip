import wepy from 'wepy'
export const getData = (url, method) => {
  return wepy.request({
    url: url,
    method: method,
    success: (res) => res
  })
}
