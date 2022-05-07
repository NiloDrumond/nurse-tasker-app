import config from '@/config';
import RemoteAuthentication from '@/modules/security/data/usecases/RemoteAuthentication';
import ApiHelper from '@/modules/shared/http/ApiHelper';

function CreateRemoteAuthentication(): RemoteAuthentication {
  return new RemoteAuthentication(ApiHelper, config.AUTH_URL, config.AUTH_URL);
}

export default CreateRemoteAuthentication;
