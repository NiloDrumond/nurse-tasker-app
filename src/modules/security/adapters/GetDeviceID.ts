import GetDeviceID from '@/modules/security/data/usecases/GetDeviceID';
import DeviceInfo from '@/modules/security/infra/protocols/device/DeviceInfo';

export default new GetDeviceID(new DeviceInfo());
