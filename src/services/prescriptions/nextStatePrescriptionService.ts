import config from '@/config';
import api from '@/modules/shared/http/ApiHelper';
import { PatchPrescriptionData } from '@/screens/Modals/PrescriptionModal/PrescriptionModal.types';

async function nextStatePrescriptionService(id: string) {
  await api.patch({
    url: config.PRESCRIPTIONS_URL,
    body: { id },
  });
}

export { nextStatePrescriptionService };
