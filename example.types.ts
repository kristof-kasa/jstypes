type RandomObj = {
  param1: number;
  param2: boolean;
  param3: "one" | "two";
};

export type CouldBeAComplexType = {
  param1: string;
  param2: boolean;
  param3: RandomObj;
};
