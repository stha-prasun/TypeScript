interface User {
  readonly dbID: number;
  email: string;
  userId: number;
  googleId?: string;
  startTrial: () => string; // Method Syntax 1
  endTrial(): string; // Method Syntax 2 (Easier and Clear)
  getCoupon(name: string, value: number): number;
}

const user: User = {
  dbID: 123,
  email: "",
  userId: 1,
  startTrial() {
    return "Trial Started!!";
  },
  endTrial() {
    return "Trial Ended";
  },
  getCoupon(name: "coupon10", value: 10) {
    return 10;
  },
};
