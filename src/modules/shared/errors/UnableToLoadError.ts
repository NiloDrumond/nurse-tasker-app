export default class UnableToLoadError extends Error {
  constructor() {
    super(
      'Não foi possível resgatar suas respostas. Tente novamente mais tarde.',
    );
    this.name = 'UnableToLoadError';
  }
}
