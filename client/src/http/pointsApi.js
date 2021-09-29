import { $host } from './index.js'

export const newPoint = async (points) => {

  const { data } = await $host.post('/api', points)
    return data
}

export const fetchPoints = async () => {

  const { data } = await $host.get('/api')
    return data
}