import { Hero } from '@/components/Hero';
import { Layout } from '@/components/Layout';
import {
  ComponentProps,
  DefaultNotImplementedComponent,
  UniformComposition,
  UniformSlot,
} from '@uniformdev/canvas-react';
import { CanvasClient } from '@uniformdev/canvas';
import Head from 'next/head';
import React from 'react';

export default function Home(props: any) {
  const { composition } = props;

  function resolveRenderer({ type }: { type: string }) {
    const components: Record<
      string,
      React.ComponentType<ComponentProps<any>>
    > = {
      hero: Hero,
    };

    return components[type] ?? DefaultNotImplementedComponent;
  }

  return (
    <>
      <Head>
        <title>Lyne | Home</title>
        <meta name="description" content="Demo app for a Uniform tutorial" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <UniformComposition
          data={composition}
          behaviorTracking={'onLoad'}
          resolveRenderer={resolveRenderer}
        >
          <UniformSlot name="content" />
        </UniformComposition>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const client = new CanvasClient({
    apiKey: process.env.UNIFORM_API_KEY,
    projectId: process.env.UNIFORM_PROJECT_ID,
  });

  const { composition } = await client.getCompositionBySlug({
    slug: '/',
  });

  return {
    props: {
      composition,
    },
  };
}
