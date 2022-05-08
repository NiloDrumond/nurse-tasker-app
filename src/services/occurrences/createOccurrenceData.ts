import config from '@/config';
import api from '@/modules/shared/http/ApiHelper';
import { CreateOccurrenceData } from '@/screens/Modals/OccurrenceModal/OccurrenceModal.types';

async function createOccurrenceService(
  data: CreateOccurrenceData,
  usuario_cadastrante: string,
  prescricao_associada: string,
) {
  await api.post({
    url: config.OCCURRENCES,
    body: { ...data, usuario_cadastrante, prescricao_associada },
  });
}

export { createOccurrenceService };
