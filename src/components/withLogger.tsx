import { useEffect, type ComponentType } from "react";

function withLogger<P extends object>(WrappedComponent: ComponentType<P>) {
  const ComponentWithLogger = (props: P) => {
    useEffect(() => {
      console.log(`${WrappedComponent.name} mounted`);
      return () => {
        console.log(`${WrappedComponent.name} unmounted`);
      };
    }, []);

    return <WrappedComponent {...props} />;
  };

  return ComponentWithLogger;
}

export default withLogger;