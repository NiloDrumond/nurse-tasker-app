import Toast from 'react-native-toast-message';
import { FeedbackProps } from './FeedbackWindow.types';

const FeedbackWindow = (type: string, mainText: string, subText?: string) => {
  try {
    Toast.show({
      type,
      position: 'top',
      text1: mainText,
      text2: subText,
    });
  } catch (e) {
    console.log('toast error');
  }
};

const FeedBackSuccess = (params: FeedbackProps): void => {
  FeedbackWindow('success', params.mainText, params.subText);
};

const FeedbackError = (params: FeedbackProps): void => {
  FeedbackWindow('error', params.mainText, params.subText);
};

const FeedackInfo = (params: FeedbackProps): void => {
  FeedbackWindow('info', params.mainText, params.subText);
};

export { FeedBackSuccess, FeedbackError, FeedackInfo };
