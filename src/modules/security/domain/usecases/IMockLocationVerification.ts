export default interface IMockLocationVerification {
  check(): boolean; // true: safe, false: user with mock location
}
