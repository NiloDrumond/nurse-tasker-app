export type RepassProps = {
    title: string;
    subtitle?: string;
    onConfirm: () => void;
    onCancel?: () => void;
};