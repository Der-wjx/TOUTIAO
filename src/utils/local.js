// 导出一个本地操作用户信息的模块（设置用户，获取用户，清除用户
const KEY = 'toutiao-user-key'
const local = {
  setUser (user) {
    const jsonStr = JSON.stringify(user)
    window.sessionStorage.setItem(KEY, jsonStr)
  },
  getUser () {
    const jsonStr = window.sessionStorage.getItem(KEY)
    return JSON.parse(jsonStr)
  },
  delUser () {
    window.sessionStorage.removeItem(KEY)
  }
}
export default local
