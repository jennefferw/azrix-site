import { Outlet, createRootRouteWithContext, HeadContent, Scripts } from "@tanstack/react-router";
import { type ReactNode } from "react";
// Puxa o arquivo de estilos correto que criamos no Passo 1
import appCss from "../styles.css?url";

export const Route = createRootRouteWithContext<{
  queryClient: any;
}>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" }
    ],
    links: [
      // Importação oficial do Google Fonts que você mandou
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@400;500;600;700&display=swap" },
      { rel: "stylesheet", href: appCss }
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
