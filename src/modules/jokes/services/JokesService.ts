import axios from 'axios'
import type { Joke } from '../interfaces/types'

const BASE_API_URL = 'https://official-joke-api.appspot.com'

export default class JokeService {
  static async fetchJokes(type: string = 'programming'): Promise<Joke[]> {
    const response = await axios.get(`${BASE_API_URL}/jokes/${type}/ten`)
    return response.data
  }

  static async fetchJokeById(id: number): Promise<Joke> {
    const response = await axios.get(`${BASE_API_URL}/jokes/${id}`)
    return response.data
  }

  static async fetchRandomJoke(): Promise<Joke> {
    const response = await axios.get(`${BASE_API_URL}/jokes/random`)
    return response.data
  }

  static async fetchJokeTypes(): Promise<string[]> {
    const response = await axios.get(`${BASE_API_URL}/types`)
    return response.data
  }
}
