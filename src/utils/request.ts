import Taro from '@tarojs/taro';

interface ParamsData {
  [propsName: string]: any;
}

interface ParamsHeader {
  'content-type'?: string;
}

export enum HttpMethod {
  GET = 'GET',
  POST = 'POST'
}

interface Params {
  url: string;
  method: HttpMethod;
  data?: ParamsData;
  header?: ParamsHeader;
}

const request = async (params: Params) => {
  const { url, ...rest } = params;
  const response = await Taro.request({
    url: `${BASE_URL}${BASE_PREFIX}${url}`,
    ...rest
  });
  return response.data;
};

export default request;
