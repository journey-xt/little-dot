export default (url: string, doc: Document = document, target?: HTMLElement) => {
  const script = doc.createElement('script');
  script.type = 'text/javascript';
  script.src = url;

  return new Promise((resolve, reject) => {
    // @ts-ignore
    if (script.readyState) {
      // @ts-ignore
      script.onreadystatechange = () => {
        // @ts-ignore
        if (this.readyState === 'loaded' || this.readyState === 'complete') {
          resolve(null);
        }
      };
    } else {
      script.onload = () => resolve(null);
    }

    script.onerror = () => reject();

    (target || doc.body).appendChild(script);
  });
};
