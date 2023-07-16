import { Metadata } from 'next';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'About Nextspace',
};

export default function Blog() {
  return (
    <div>
      <h1>About Us</h1>
      <p>We are a social media company that wants to bring people together!</p>
    </div>
  );
}
