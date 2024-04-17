import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { HttpAdapter } from 'src/types/http-adapter';

@Injectable()
export class AxiosAdapter implements HttpAdapter {
  async get<T>(url: string) {
    try {
      const res = await axios.get<T>(url);

      return res.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
}
