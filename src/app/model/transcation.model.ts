export class Transcation {
  constructor(
    public product_name: string,
    public product_type: String,
    public time: String,
    public amount: String
  ) {}
}

export const ALL_TRANSACTION = [
  {
    product_name: 'Boba Time',
    product_type: 'Food & Bav.',
    time: '04:03 PM',
    amount: 'Rp12.000',
  },
  {
    product_name: 'JimsHoney Bag',
    product_type: 'Shopping',
    time: '04:33 PM',
    amount: 'Rp126.500',
  },
  {
    product_name: 'sandwich',
    product_type: 'Food & Bav.',
    time: '05:12 PM',
    amount: 'Rp18.000',
  },
  {
    product_name: 'Netfix',
    product_type: 'Subscription',
    time: '06:14 PM',
    amount: 'Rp150.500',
  },
];
