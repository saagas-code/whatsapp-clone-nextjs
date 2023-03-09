import axios from "axios";
import { parseCookies } from "nookies";


export function setupAPIClient(ctx: any = undefined) {
  let cookies = parseCookies(ctx);

  const api = axios.create({
    baseURL: 'http://localhost:8819',
    headers: {
      Authorization: `Bearer ${cookies['token']}`
    }
  })

  return api;
}