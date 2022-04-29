export type AskProps = {
  title: string;
  subtitle?: string;
  onConfirm: () => void;
  onCancel?: () => void;
};
