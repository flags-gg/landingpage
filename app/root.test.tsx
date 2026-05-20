import { describe, expect, test } from "bun:test";
import { ErrorBoundary, Layout, links } from "./root";
import { render } from "../test/test-utils";

describe("root", () => {
  test("returns the expected external font links", () => {
    expect(links()).toEqual([
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
      },
    ]);
  });

  test("renders the document shell with the default theme class", () => {
    const markup = render(
      <Layout>
        <main>Page content</main>
      </Layout>,
    );

    expect(markup).toContain('<html lang="en" class="dark">');
    expect(markup).toContain("Page content");
  });

  test("renders a 404 message for missing routes", () => {
    const markup = render(
      <ErrorBoundary error={{ status: 404, statusText: "Not Found" } as never} />,
    );

    expect(markup).toContain("<h1>404</h1>");
    expect(markup).toContain("The requested page could not be found.");
  });

  test("renders the route status text for non-404 route errors", () => {
    const markup = render(
      <ErrorBoundary error={{ status: 500, statusText: "Server exploded" } as never} />,
    );

    expect(markup).toContain("<h1>Error</h1>");
    expect(markup).toContain("Server exploded");
  });

  test("renders the generic fallback for unknown errors", () => {
    const markup = render(<ErrorBoundary error={{ reason: "unknown" } as never} />);

    expect(markup).toContain("<h1>Oops!</h1>");
    expect(markup).toContain("An unexpected error occurred.");
  });
});
