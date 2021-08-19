export class Breakdown {
  constructor(
    public category_name: String,
    public amount: String,
    public bgColor: String
  ) {}
}

export const BREAKDOWN = [
    {
      category_name : "Food & Bav.",
      amount : "Rp60.000",
      bgColor : "#e8bcb6"
    },
    {
      category_name : "Shopping",
      amount : "Rp126.000",
      bgColor : "#bdefff"
    },
    {
      category_name : "Subscription",
      amount : "Rp280.000",
      bgColor : "#f8d1fe"
    }
];