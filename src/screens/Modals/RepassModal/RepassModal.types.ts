export type RepassProps = {
  title: string;
  subtitle?: string;
  prescriptionId: string;
  onConfirm: () => void;
  onCancel?: () => void;
};
