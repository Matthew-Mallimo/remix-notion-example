import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  json
} from "remix";
import notion from './utils/notion.server';

export function meta() {
  return { title: "New Remix App" };
}

export const action = async ({ request }) => {
  const form = await request.formData();
  const firstname = form.get('firstname');
  const lastname = form.get('lastname');
  const email = form.get('email');

  await notion.pages.create({
    parent: { database_id: process.env.NOTION_DB_ID },
    properties: {
      Firstname: {
        title: [{ text: { content: firstname } }],
      },
      Lastname: {
        rich_text: [{ text: { content: lastname } }],
      },
      Email: {
        rich_text: [{ text: { content: email } }],
      },
    },
  });
  return json({ success: true });
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
