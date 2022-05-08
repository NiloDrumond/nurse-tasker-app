import { FeedbackError } from '@/components/FeedbackWindow';

const handleError = (error: { title?: string; message: string }): void => {
  FeedbackError({
    mainText: error.title || 'Atenção!',
    subText: error.message,
  });
};

export default handleError;
