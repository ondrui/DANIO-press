interface Switch {
  [index: number]: string;
  4: string;
  6: string;
  2: string;
  1: string;
  0: string;
}

/**
 * Object with switch code of trafficlight
 */
export const switchCodeColor: Switch = {
  4: "red yellow",
  6: "green",
  2: "red",
  1: "yellow",
  0: "",
};
