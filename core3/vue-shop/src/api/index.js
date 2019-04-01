import axios from 'axios'

axios.defaults.baseURL ="http://localhost:3001";
axios.interceptors.response.use((res)=>{
  return res.data
},(err)=>{
  Promise.reject(err)
})
// 轮播图接口 
export let getBannaer =()=>{
  return axios.get('/banner')
}
// 首页列表接口 export 导出 
export let getHomelist = ()=>{
  return axios.get('/hot')
}
// 获取首页所有数据 axios.all= prmise.all
export let getHomeAll=()=>{
	return axios.all([getBannaer(),getHomelist()])
}


