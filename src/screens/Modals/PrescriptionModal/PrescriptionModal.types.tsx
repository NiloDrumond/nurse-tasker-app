export type PrescriptionProps = {
    title: string;
    subtitle?: string;
    onConfirm: () => void;
    onCancel?: () => void;
};