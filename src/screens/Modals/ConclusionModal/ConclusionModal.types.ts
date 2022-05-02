export type ConclusionProps = {
    title: string;
    subtitle?: string;
    onConfirm: () => void;
    onCancel?: () => void;
};