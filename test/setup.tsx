import { beforeEach, mock } from "bun:test";
import { cloneElement, isValidElement } from "react";
import type { ReactNode } from "react";
import {
  isFlagEnabled,
  recordInitializeCall,
  recordProviderOptions,
  resetTestState,
} from "./test-utils";

type WrapperProps = {
  children?: ReactNode;
  className?: string;
  to?: string;
  href?: string;
};

function classNames(...values: Array<string | undefined>) {
  return values.filter(Boolean).join(" ");
}

function passthroughTag(tag: keyof JSX.IntrinsicElements) {
  return ({ children, ...props }: WrapperProps) => {
    const Component = tag;
    return <Component {...props}>{children}</Component>;
  };
}

function Button({ asChild, children, className, ...props }: WrapperProps & { asChild?: boolean }) {
  if (asChild && isValidElement(children)) {
    return cloneElement(children, {
      ...props,
      className: classNames(className, children.props.className),
    });
  }

  return (
    <button {...props} className={className}>
      {children}
    </button>
  );
}

beforeEach(() => {
  resetTestState();
});

mock.module("@flags-gg/react-library", () => ({
  FlagsProvider: ({ children, options }: { children?: ReactNode; options: { projectId: string; agentId: string; environmentId: string } }) => {
    recordProviderOptions(options);
    return <>{children}</>;
  },
  useFlags: () => ({
    initialize: (key: string, value: boolean) => recordInitializeCall(key, value),
    is: (name: string) => ({
      enabled: () => isFlagEnabled(name),
      disabled: () => !isFlagEnabled(name),
    }),
  }),
}));

mock.module("react-router", () => ({
  Link: ({ children, to, className }: { children?: ReactNode; to: string; className?: string }) => (
    <a href={to} className={className}>
      {children}
    </a>
  ),
  Links: () => null,
  Meta: () => null,
  Outlet: () => <div data-outlet="true" />,
  Scripts: () => null,
  ScrollRestoration: () => null,
  isRouteErrorResponse: (error: unknown) => {
    return Boolean(
      error &&
        typeof error === "object" &&
        "status" in error &&
        typeof (error as { status?: unknown }).status === "number",
    );
  },
}));

mock.module("~/components/ui/button", () => ({ Button }));
mock.module("~/components/ui/badge", () => ({ Badge: passthroughTag("span") }));
mock.module("~/components/ui/separator", () => ({ Separator: () => <hr /> }));
mock.module("~/components/ui/card", () => ({
  Card: passthroughTag("div"),
  CardContent: passthroughTag("div"),
  CardDescription: passthroughTag("p"),
  CardFooter: passthroughTag("div"),
  CardHeader: passthroughTag("div"),
  CardTitle: passthroughTag("h3"),
}));
mock.module("~/components/ui/sheet", () => ({
  Sheet: passthroughTag("div"),
  SheetContent: passthroughTag("div"),
  SheetDescription: passthroughTag("p"),
  SheetHeader: passthroughTag("div"),
  SheetTitle: passthroughTag("h2"),
  SheetTrigger: Button,
}));
mock.module("~/components/ui/dropdown-menu", () => ({
  DropdownMenu: passthroughTag("div"),
  DropdownMenuContent: passthroughTag("div"),
  DropdownMenuItem: passthroughTag("button"),
  DropdownMenuTrigger: Button,
}));
mock.module("~/components/ui/tabs", () => ({
  Tabs: passthroughTag("div"),
  TabsContent: passthroughTag("div"),
  TabsList: passthroughTag("div"),
  TabsTrigger: passthroughTag("button"),
}));
