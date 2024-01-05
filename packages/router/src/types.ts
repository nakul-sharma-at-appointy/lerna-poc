import { LinkProps as MuiLinkProps } from "@mui/material/Link";
import {
  MemoryRouterProps as RMemoryRouterProps,
  NavigateFunction as RNavigateFunction,
  NavigateProps as RNavigateProps,
  Navigator as RNavigator,
  OutletProps as ROutletProps,
  Params as RParams,
  PartialRouteObject as RPartialRouteObject,
  PathMatch as RPathMatch,
  RouteMatch as RRouteMatch,
  RouteObject as RRouteObject,
  RouteProps as RRouteProps,
  RoutesProps as RRoutesProps,
} from "react-router";
import {
  BrowserRouterProps as RBrowserRouterProps,
  HashRouterProps as RHashRouterProps,
  LinkProps as RLinkProps,
  ParamKeyValuePair as RParamKeyValuePair,
  PromptProps as RPromptProps,
  URLSearchParamsInit as RURLSearchParamsInit,
} from "react-router-dom";

export interface LinkProps
  extends MuiLinkProps,
    Partial<Pick<RLinkProps, "to" | "state" | "replace">> {
  query?: Record<string, any>;
}

export interface RouteProps extends RRouteProps {
  title?: string;
}

export type match = PathMatch;

export type HashRouterProps = RHashRouterProps;
export type BrowserRouterProps = RBrowserRouterProps;
export type MemoryRouterProps = RMemoryRouterProps;
export type NavigateProps = RNavigateProps;
export type ParamKeyValuePair = RParamKeyValuePair;
export type URLSearchParamsInit = RURLSearchParamsInit;
export type RouteObject = RRouteObject;
export type RoutesProps = RRoutesProps;
export type OutletProps = ROutletProps;
export type PartialRouteObject = RPartialRouteObject;
export type Params = RParams;
export type Navigator = RNavigator;
export type NavigateFunction = RNavigateFunction;
export type PathMatch = RPathMatch;
export type RouteMatch = RRouteMatch;
export type PromptProps = RPromptProps;
