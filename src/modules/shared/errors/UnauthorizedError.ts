export default class UnauthorizedError extends Error {
  constructor() {
    super('Você não possui permissão para isso.');
    this.name = 'UnauthorizedError';
  }
}
