import { Button } from "@/components/ui/button";
import { userQueryOptions } from "@/lib/api";
import { createFileRoute, Outlet } from "@tanstack/react-router";

const Login = () => {
  return (
    <div className="flex flex-col max-w-2xl gap-4 p-2">
      <p>You Have to Login or Register!</p>
      <div className="flex flex-col w-full gap-2 sm:flex-row">
        <Button asChild className="w-full" variant={"secondary"}>
          <a href="/api/login">LOGIN</a>
        </Button>
        <Button asChild className="w-full" variant={"default"}>
          <a href="/api/register">REGISTER</a>
        </Button>
      </div>
    </div>
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

// Fuck all of this
