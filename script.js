$(() => {
  $(".nav-pills .nav-item").on("click", () => {
    const navbarCollapse = $(".navbar-collapse");
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
      toggle: false,
    });
    bsCollapse.hide();
  });

  $("#contact-form").validate({
    rules: {
      name: {
        required: true,
        minlength: 3,
      },
      email: {
        required: true,
        email: true,
      },
      message: {
        required: true,
        minlength: 10,
      },
    },
    messages: {
      name: {
        required: "Por favor, insira seu nome",
        minlength: "O nome deve ter pelo menos 3 caracteres",
      },
      email: {
        required: "Informe seu email",
        email: "Digite um email válido",
      },
      message: {
        required: "Digite uma mensagem",
        minlength: "A mensagem deve conter no mínimo 10 caracteres",
      },
    },
    invalidHandler: function (_event, validator) {
      if (validator.errorList.length) {
        let el = validator.errorList[0].element;
        el.focus(); // força o foco no primeiro campo inválido
        // rolar até o campo
        $("html, body").animate(
          {
            scrollTop: $(el).offset().top - 150,
          },
          500
        );
      }
    },
  });
});
