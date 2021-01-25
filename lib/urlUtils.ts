import { useEffect } from "react";

function getHash(): string {
  return decodeURI(window.location.hash.substr(1));
}

function hashConsumer(callable: (city: string) => void): void {
  return useEffect(() => {
    const hash = getHash();
    if (hash) {
      callable(hash);
    }
  }, []);
}

export default { hashConsumer };
