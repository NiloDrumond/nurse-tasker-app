import Info from 'react-native-device-info';

import IDeviceInfo from '@/modules/security/data/protocols/device/IDeviceInfo';

class DeviceInfo implements IDeviceInfo {
  getUniqueId(): string {
    return Info.getUniqueId();
  }
}

export default DeviceInfo;
