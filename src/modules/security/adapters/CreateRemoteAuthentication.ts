import constants from '@/Constants';
import RemoteAuthentication from '@/modules/security/data/usecases/RemoteAuthentication';
import ApiHelper from '@/modules/shared/http/ApiHelper';

function CreateRemoteAuthentication(): RemoteAuthentication {
  return new RemoteAuthentication(
    ApiHelper,
    constants.AUTH_URL,
    constants.AUTH_URL,
  );
}

export default CreateRemoteAuthentication;
