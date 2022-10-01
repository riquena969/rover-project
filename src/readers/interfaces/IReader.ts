export default interface IReader<T> {
  read(): Promise<T>;
  checkString(string: string): boolean;
}
