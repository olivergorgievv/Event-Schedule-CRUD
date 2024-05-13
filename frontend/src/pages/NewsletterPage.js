import NewsletterSignup from "../components/NewsletterSignup";
import PageComponent from "../components/PageComponent";

function NewsletterPage() {
  return (
    <PageComponent title="Join our awesome newsletter!">
      <NewsletterSignup />
    </PageComponent>
  );
}

export default NewsletterPage;

export async function action({ request }) {
  const data = await request.formData();
  const email = data.get("email");

  // send to backend newsletter server ...
  console.log(email);
  return { message: "Signup successful!" };
}
