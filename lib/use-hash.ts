'use client';

import {useSyncExternalStore} from 'react';

export function useHash() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

function getSnapshot() {
  return window.location.hash;
}

function getServerSnapshot() {
  return '';
}

function subscribe(callback: any) {
  window.addEventListener('hashchange', callback);
  return () => {
    window.removeEventListener('hashchange', callback);
  };
}
