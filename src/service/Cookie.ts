import { AxiosResponse } from "axios";
import Cookies from "universal-cookie";

class Cookie extends Cookies {
  cookieName: string  = process.env.REACT_APP_COOKIE_NAME as string

  constructor(){
    super()
  }

  getToken() {
    return this.get(this.cookieName);
  }

  removeToken() {
    this.remove(this.cookieName);
  }

  setToken(res: AxiosResponse<any, any>) {
    cookie.set('twittrToken', `Bearer ${res.data.token}`, {path: '/', maxAge: 3600})
  }
}

const cookie = new Cookie()

export default cookie;