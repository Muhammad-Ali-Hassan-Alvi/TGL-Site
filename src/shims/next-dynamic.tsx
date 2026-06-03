// Shim for 'next/dynamic' module
import { lazy, Suspense, type ComponentType, type ReactNode, type JSX } from 'react';

type DynamicOptions<T> = {
  loading?: () => ReactNode;
  ssr?: boolean;
};

type DynamicImport<T> = () => Promise<{ default: ComponentType<T> } | ComponentType<T>>;

export default function dynamic<T extends object>(
  importFunc: DynamicImport<T>,
  options: DynamicOptions<T> = {}
) {
  const LazyComponent = lazy(async () => {
    const module = await importFunc();
    // Handle both { default: Component } and Component exports
    const Component = 'default' in module ? module.default : module;
    return { default: Component as ComponentType<T> };
  });

  const LoadingComponent = options.loading;

  return function DynamicComponent(props: T): JSX.Element {
    const fallback = LoadingComponent ? <LoadingComponent /> : null;
    
    return (
      <Suspense fallback={fallback}>
        <LazyComponent {...props} />
      </Suspense>
    );
  };
}
