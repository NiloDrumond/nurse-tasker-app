/* eslint-disable @typescript-eslint/ban-types */
import { createRef } from 'react';
import { NavigationContainerRef, StackActions } from '@react-navigation/native';
import { Deferred } from '@/utils/promises/deferred';
import { AppStackParamList, NTScreen } from './navigation.types';

export const navigationDeferred = new Deferred();

export const isReadyRef =
  createRef<NavigationContainerRef<AppStackParamList>>();

export const navigationRef =
  createRef<NavigationContainerRef<AppStackParamList>>();

export const resolveNavigationDeferred = (): void => {
  navigationDeferred.resolve(navigationRef.current);
};

function navigate<T extends NTScreen>(
  name: T,
  params: AppStackParamList[T],
): void {
  if (navigationRef.current) {
    navigationRef.current.navigate(name, params);
  }
}

const push = (name: string, params?: Object): void => {
  if (navigationRef.current) {
    navigationRef.current.dispatch(StackActions.push(name, params));
  }
};

const goBack = (): void => {
  if (navigationRef.current) {
    navigationRef.current.goBack();
  }
};

export default {
  navigate,
  goBack,
  push,
};
