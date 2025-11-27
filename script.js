$(() => {
  $(".nav-pills .nav-item").on("click", () => {
    const navbarCollapse = $(".navbar-collapse");
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
      toggle: false,
    });
    bsCollapse.hide();
  });
});
