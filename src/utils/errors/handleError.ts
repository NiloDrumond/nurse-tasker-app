import { FeedbackError } from '@/components/FeedbackWindow';

const handleError = (error: Error): void => {
  FeedbackError({
    mainText: 'Atenção!',
    subText: error.message,
  });
};

export default handleError;
