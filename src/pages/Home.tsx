import axios from 'axios'
import useSWR from 'swr'

const fetcher = (path: string) => {
  return axios.get<{ message: string }>(path)
}

export const Home: React.FC = () => {
  const { data, error, isValidating, mutate } = useSWR('http://121.196.236.94:3000', fetcher)
  const isLoading = !data && !error
  const onClick = async () => {
    const data = await axios.post('xxx')
    mutate(data)
  }
  console.log('data?.data')
  console.log(data?.data)

  if (error)
    return <div>failed to load</div>
  if (isLoading)
    return <div>loading...</div>
  if (isValidating)
    return <div>正在获取最新值</div>

  return <div text-6xl>
    {data?.data.message}
  </div>
}
