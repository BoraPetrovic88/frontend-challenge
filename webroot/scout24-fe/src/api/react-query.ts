/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosError } from "axios";
import { QueryClient, DefaultOptions, UseQueryOptions, UseMutationOptions } from "react-query";
// eslint-disable-next-line import/no-unresolved
import { PromiseValue } from "type-fest";

const queryConfig: DefaultOptions = {
  queries: {
    useErrorBoundary: true,
    refetchOnWindowFocus: false,
    retry: false,
  },
};

export type QueryConfig<FetcherFnType extends (...args: any) => any> = UseQueryOptions<
  PromiseValue<ReturnType<FetcherFnType>>,
  AxiosError<any>
>;

export type MutationConfig<FetcherFnType extends (...args: any) => any> = UseMutationOptions<
  PromiseValue<ReturnType<FetcherFnType>>,
  AxiosError<any>,
  Parameters<FetcherFnType>[0]
>;

export const queryClient = new QueryClient({ defaultOptions: queryConfig });
