import config from '@/config';
import api from '@/modules/shared/http/ApiHelper';

async function nextStatePrescriptionService(id_prescricao: string) {
  await api.patch({
    url: `${config.PRESCRIPTIONS_URL}${id_prescricao}/`,
    body: {},
  });
}

export { nextStatePrescriptionService };
