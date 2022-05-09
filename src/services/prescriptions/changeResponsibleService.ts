import config from '@/config';
import api from '@/modules/shared/http/ApiHelper';

async function changeResponsibleService(
  id_prescricao: string,
  responsavel_atual: string,
) {
  await api.patch({
    url: `${config.PRESCRIPTIONS_URL}${id_prescricao}/`,
    body: { responsavel_atual },
  });
}

export { changeResponsibleService };
