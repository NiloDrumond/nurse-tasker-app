import IGetDeviceInfo from '@/modules/security/domain/usecases/IGetDeviceID';
import IDeviceInfo from '../protocols/device/IDeviceInfo';

class GetDeviceID implements IGetDeviceInfo {
  private deviceInfo: IDeviceInfo;

  constructor(deviceInfo: IDeviceInfo) {
    this.deviceInfo = deviceInfo;
  }

  get(): string {
    return this.deviceInfo.getUniqueId();
  }
}

export default GetDeviceID;
