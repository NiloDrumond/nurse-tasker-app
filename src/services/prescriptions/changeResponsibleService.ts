async function changeResponsibleService(
  data: CreatePrescriptionData,
  cpf: string,
) {
  await api.post({
    url: config.PRESCRIPTIONS_URL,
    body: { ...data, cpf_cadastrante: cpf },
  });
}

export { changeResponsibleService };
