import { Result, LLA } from "./types";

export default class GeoUtils {
  static doSomething(xyz: number): Result {
    return {
      edgeId: 420,
      howdyDoodie: "uh...yeehaw!",
      urNum: xyz,
    };
  }

  static doOtherThing(xyz: LLA): string {
    return "Happy happy joy joy";
  }
}
