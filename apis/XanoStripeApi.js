import * as React from 'react';
import {
  useQuery,
  useMutation,
  useIsFetching,
  useQueryClient,
} from 'react-query';
import useFetch from 'react-fetch-hook';
import { useIsFocused } from '@react-navigation/native';
import { handleResponse, isOkStatus } from '../utils/handleRestApiResponse';
import usePrevious from '../utils/usePrevious';
import {
  encodeQueryParam,
  renderParam,
  renderQueryString,
} from '../utils/encodeQueryParam';
import * as GlobalVariables from '../config/GlobalVariableContext';

const cleanHeaders = headers =>
  Object.fromEntries(Object.entries(headers).filter(kv => kv[1] != null));

export const getPublishableKeyGET = async (
  Constants,
  _args,
  handlers,
  timeout
) => {
  const url = `https://x8ki-letl-twmt.n7.xano.io/api:bHJFCnDp/Stripe_Get`;
  const controller = new AbortController();
  let timeoutObj;
  if (timeout) {
    timeoutObj = setTimeout(() => {
      const err = new Error(`Timeout after ${timeout}ms`);
      err.__type = 'TIMEOUT';
      controller.abort(err);
    }, timeout);
  }
  try {
    const res = await fetch(url, {
      headers: cleanHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
      signal: controller.signal,
    });
    timeoutObj && clearTimeout(timeoutObj);
    return handleResponse(res, handlers);
  } catch (e) {
    if (e.__type === 'TIMEOUT') {
      handlers.onTimeout?.();
    } else if (timeoutObj) {
      clearTimeout(timeoutObj);
    }
    throw e;
  }
};

export const useGetPublishableKeyGET = (
  args = {},
  {
    refetchInterval,
    refetchOnWindowFocus,
    refetchOnMount,
    refetchOnReconnect,
    retry,
    staleTime,
    timeout,
    handlers = {},
  } = {}
) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['StripeAPIS', args],
    () => getPublishableKeyGET(Constants, args, handlers, timeout),
    {
      refetchInterval,
      refetchOnWindowFocus,
      refetchOnMount,
      refetchOnReconnect,
      retry,
      staleTime,
    }
  );
};

export const FetchGetPublishableKeyGET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  refetchOnWindowFocus,
  refetchOnMount,
  refetchOnReconnect,
  retry,
  staleTime,
  timeout,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useGetPublishableKeyGET(
    {},
    {
      refetchInterval,
      refetchOnWindowFocus,
      refetchOnMount,
      refetchOnReconnect,
      retry,
      staleTime,
      timeout,
      handlers: { onData, ...handlers },
    }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused && refetchOnWindowFocus !== false) {
      refetch();
    }
  }, [isFocused, prevIsFocused, refetchOnWindowFocus]);

  React.useEffect(() => {
    if (error) {
      console.error(error);
      if (error.status) {
        console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      }
    }
  }, [error]);
  return children({ loading, data, error, refetchGetPublishableKey: refetch });
};
