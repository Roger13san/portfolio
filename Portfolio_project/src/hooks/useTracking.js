/**
 * Hook centralizado de tracking GA4.
 * Dispara eventos customizados via gtag() já carregado no index.html.
 *
 * Uso:
 *   const { trackEvent } = useTracking();
 *   trackEvent("click_github", { section: "hero" });
 */
export function useTracking() {
  function trackEvent(eventName, params = {}) {
    if (typeof window.gtag !== "function") return;
    window.gtag("event", eventName, params);
  }

  return { trackEvent };
}
