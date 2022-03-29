export default class DeviceLimitExceededError extends Error {
  constructor() {
    super('Essa conta já está com o máximo de dispositivos logados.');
    this.name = 'DeviceLimitExceededError';
  }
}
