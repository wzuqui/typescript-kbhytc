export class React {
  static createElement(
    elementType: string | Function,
    props: object,
    ...children: unknown[]
  ) {
    const virtualElementProps = {
      ...props,
      children,
    };

    if (typeof elementType === "function") {
      return elementType(virtualElementProps);
    }

    return {
      tagName: elementType,
      props: virtualElementProps,
    };
  }
}

function convertToHtml(virtualNode) {
  if (typeof virtualNode === "string" || typeof virtualNode === "number") {
    return document.createTextNode(`${virtualNode}`);
  }

  const $domElement = document.createElement(virtualNode.tagName) as HTMLElement;

  Object.keys(virtualNode.props)
    .filter((p) => p !== "children")
    .forEach((pKey) => {
      const xKey = pKey === 'className' ? 'class' : pKey;
      const xValue = virtualNode.props[pKey];
      $domElement.setAttribute(xKey, xValue)
    });
  virtualNode.props.children.forEach((virtualChild) => {
    $domElement.appendChild(convertToHtml(virtualChild));
  });

  return $domElement;
}

export function render(initialVirtualTree, $domRoot) {
  const $appHTML = convertToHtml(initialVirtualTree);
  $domRoot.appendChild($appHTML);
}

function createElement(elementType, props, ...children) {
  const virtualElementProps = {
    ...props,
    children,
  };

  if (typeof elementType === "function") {
    return elementType(virtualElementProps);
  }

  return {
    tagName: elementType,
    props: virtualElementProps,
  };
}
