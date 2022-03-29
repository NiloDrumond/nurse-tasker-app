import LocalAuthentication from '@/modules/security/data/usecases/LocalAuthentication';
import AsyncStorageAuthStorage from '@/modules/security/infra/protocols/storage/AsyncStorageAuthStorage';

export default new LocalAuthentication(new AsyncStorageAuthStorage());
