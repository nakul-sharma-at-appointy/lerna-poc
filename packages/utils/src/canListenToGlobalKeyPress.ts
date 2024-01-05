const canListenToGlobalKeyPress = (event: KeyboardEvent) => {
  let isAnyDialogOpen = true;
  if (typeof document !== "undefined") {
    const activeElement = document.activeElement as HTMLElement;
    const rootElement = document.querySelector(
      "#root:focus-within, #root:focus"
    ) as HTMLElement;
    if (activeElement && activeElement.tagName === "BODY") {
      isAnyDialogOpen = false;
    }
    if (rootElement) {
      isAnyDialogOpen = false;
    }
  }
  const target = (event.target as HTMLElement) || event.srcElement;
  //@ts-ignore
  const tagName = target.tagName;
  return !(
    isAnyDialogOpen ||
    //@ts-ignore
    target.isContentEditable ||
    tagName === "INPUT" ||
    tagName === "SELECT" ||
    tagName === "TEXTAREA"
  );
};

export default canListenToGlobalKeyPress;
