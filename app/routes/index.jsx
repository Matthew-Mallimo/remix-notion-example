import { json, useTransition } from 'remix';

export default function Index() {
  const { state } = useTransition();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Remix Form to Notion DB Example</h1>
      <form method="post">
        <div>
          <label>
            First name: <input type="text" name="firstname" />
          </label>
        </div>
        <div>
          <label>
            Last name: <input type="text" name="lastname" />
          </label>
        </div>
        <div>
          <label>
            Email: <input type="text" name="email" />
          </label>
        </div>
        <div>
          <button type="submit" className="button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
