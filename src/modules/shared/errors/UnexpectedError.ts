export default class UnexpectedError extends Error {
  constructor() {
    super('Um erro inesperado ocorreu. Pedimos desculpas');
    this.name = 'UnexpectedError';
  }
}
