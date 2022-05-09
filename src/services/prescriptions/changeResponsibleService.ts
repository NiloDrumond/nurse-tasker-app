import config from '@/config';
import api from '@/modules/shared/http/ApiHelper';

async function changeResponsibleService(
  newResposible: string,
  data:
) {
  await api.post({
    url: `${config.PRESCRIPTIONS_URL}/${newResposible}`,
    body: { ...data, },
  });
}

export { changeResponsibleService };
