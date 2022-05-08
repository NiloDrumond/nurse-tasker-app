import config from '@/config';
import api from '@/modules/shared/http/ApiHelper';
import { CreatePrescriptionData } from '@/screens/Modals/PrescriptionModal/PrescriptionModal.types';

async function createPrescriptionService(
  data: CreatePrescriptionData,
  cpf: string,
) {
  await api.post({
    url: config.PRESCRIPTIONS_URL,
    body: { ...data, cpf_cadastrante: cpf },
  });
}

export { createPrescriptionService };
