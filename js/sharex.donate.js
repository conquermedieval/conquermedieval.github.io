$(document).ready(function() {
    $(".btn-clipboard-copy").on("click", function() {
        let button = $(this);
        let text = button.prev("input[type='text']").val();
        navigator.clipboard.writeText(text).then(function() {
            button.text("Copiado!");
            setTimeout(function() {
                button.text("Copiar");
            }, 2000);
        }, function() {
            button.text("Copy failed.");
            setTimeout(function() {
                button.text("Copiar");
            }, 2000);
        });
    });
});
