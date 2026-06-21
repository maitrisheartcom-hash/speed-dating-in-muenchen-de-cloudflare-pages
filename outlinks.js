(function () {
  const targets = {
    replika: "aHR0cHM6Ly9yZXBsaWthLmNvbS8=",
    characterai: "aHR0cHM6Ly9jaGFyYWN0ZXIuYWkv",
    nomi: "aHR0cHM6Ly9ub21pLmFpLw==",
    kindroid: "aHR0cHM6Ly9raW5kcm9pZC5haS8=",
    candy: "aHR0cHM6Ly9jYW5keS5haS8=",
    kupid: "aHR0cHM6Ly93d3cua3VwaWQuYWkvYWktZ2lybGZyaWVuZA==",
    dreamgf: "aHR0cHM6Ly9kcmVhbWdmLmFpLw==",
    anima: "aHR0cHM6Ly9teWFuaW1hLmFpLw=="
  };

  document.querySelectorAll("[data-service-link]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = targets[button.dataset.serviceLink];
      if (!target) {
        return;
      }

      window.open(atob(target), "_blank", "noopener,noreferrer");
    });
  });
})();
