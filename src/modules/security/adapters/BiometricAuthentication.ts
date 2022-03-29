import BiometryClient from '@/modules/security/infra/protocols/biometry/BiometryClient';
import BiometricAuthentication from '@/modules/security/data/usecases/BiometricAuthentication';
import AsyncStorageBiometricStorage from '@/modules/security/infra/protocols/storage/AsyncStorageBiometricStorage';

export default new BiometricAuthentication(
  new BiometryClient(),
  new AsyncStorageBiometricStorage(),
);
