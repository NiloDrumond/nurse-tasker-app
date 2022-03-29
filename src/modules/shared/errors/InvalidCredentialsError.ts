export default class InvalidCredentialsError extends Error {
  constructor() {
    super('Credenciais inválidas. Verifique os dados e tente novamente.');
    this.name = 'InvalidCredentialsError';
  }
}
