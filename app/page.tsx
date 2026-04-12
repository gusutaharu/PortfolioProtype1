import { Hero } from '@/components/sections/hero';
import { Skills } from '@/components/sections/skills';
import { GraphTest } from '@/components/sections/skills/graphql-test';

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <GraphTest />
    </main>
  );
}
