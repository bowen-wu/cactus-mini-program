import { useEffect, useState } from 'react';
import Unstated from '@/unstated';
import { getOrderList } from '@/services/test';

interface Order {
  id: number;
  name: string;
  orderNo: string;
  remark: string;
  state: 0 | 1;
  version: number;
  createTime: string;
  updateTime: string;
}

const useOrder = () => {
  const [orderList, setOrderList] = useState<Order[]>([]);
  const unstated = Unstated.useContainer();

  useEffect(() => {
    const loadData = async () => {
      const res = await getOrderList();
      setOrderList(res.data.records);
    };
    void loadData();
  }, []);

  return { ...unstated, orderList };
};

export default useOrder;
