import { userQueryOptions } from "@/lib/api";
import { createFileRoute, Outlet } from "@tanstack/react-router";

const Login = () => {
  return (
    <>
      <p>You Have to Login</p>
      <a href="/api/login">LOGIN</a>
    </>
  );
};

const Component = () => {
  const { user } = Route.useRouteContext();
  if (!user) {
    return <Login />;
  }

  return <Outlet />;
};

// src/routes/_authenticated.tsx
export const Route = createFileRoute("/_authenticated")({
  beforeLoad: async ({ context }) => {
    const queryClient = context.queryClient;

    try {
      const data = await queryClient.fetchQuery(userQueryOptions);
      return data;
    } catch (error) {
      return { user: null };
    }
  },
  component: Component,
});
