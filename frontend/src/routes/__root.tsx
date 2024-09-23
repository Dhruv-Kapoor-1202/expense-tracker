import {
  createRootRouteWithContext,
  Link,
  Outlet,
} from "@tanstack/react-router";
import { type QueryClient } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner";
// import { TanStackRouterDevtools } from '@tanstack/router-devtools'

interface MyRouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: Root,
});

function NavBar() {
  return (
    <div className="flex flex-col items-baseline justify-between max-w-lg gap-2 p-2 px-4 m-auto sm:max-w-2xl sm:flex-row">
      <Link to="/" className="[&.active]:font-bold">
        <h1 className="text-2xl font-bold">Expense Tracker</h1>
      </Link>{" "}
      <div className="flex gap-2 ">
        {/* <Link to="/about" className="[&.active]:font-bold text-sm sm:text-base">
          About
        </Link> */}
        <Link
          to="/expenses"
          className="[&.active]:font-bold text-sm sm:text-base"
        >
          Expenses
        </Link>
        <Link
          to="/create-expense"
          className="[&.active]:font-bold text-sm sm:text-base"
        >
          Create Expense
        </Link>
        <Link
          to="/profile"
          className="[&.active]:font-bold text-sm sm:text-base"
        >
          Profile
        </Link>
      </div>
    </div>
  );
}

function Root() {
  return (
    <>
      <NavBar />
      <hr />
      <div className="max-w-lg gap-2 p-2 m-auto sm:max-w-2xl ">
        <Outlet />
      </div>
      <Toaster />
      {/* <TanStackRouterDevtools /> */}
    </>
  );
}
